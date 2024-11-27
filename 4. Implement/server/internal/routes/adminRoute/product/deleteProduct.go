package admin

import (
	"net/http"

	"github.com/billzayy/golf-server/internal/handlers"
	admindb "github.com/billzayy/golf-server/internal/repository/admindb/product_management"
	"github.com/google/uuid"
)

func DeleteProduct(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")

	if r.Method != http.MethodDelete {
		handlers.Response(w, http.StatusMethodNotAllowed, "Invalid Method")
		return
	}

	id := r.URL.Query().Get("productId")

	if len(id) == 0 {
		handlers.Response(w, http.StatusBadRequest, "Id must not empty")
		return
	}

	parsedId, err := uuid.Parse(id)

	if err != nil {
		handlers.Response(w, http.StatusBadRequest, err.Error())
		return
	}

	err = admindb.DeleteProductRepo(parsedId)

	if err != nil {
		handlers.Response(w, http.StatusInternalServerError, err.Error())
		return
	}

	handlers.Response(w, http.StatusOK, "Delete Successful")
}
