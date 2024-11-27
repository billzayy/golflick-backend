package admin

import (
	"net/http"

	"github.com/billzayy/golf-server/internal/handlers"
	admindb "github.com/billzayy/golf-server/internal/repository/admindb/category_management"
	"github.com/google/uuid"
)

func DeleteCategory(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")

	if r.Method != http.MethodDelete {
		handlers.Response(w, http.StatusMethodNotAllowed, "Invalid Method")
		return
	}

	id := r.URL.Query().Get("categoryId")

	if len(id) == 0 {
		handlers.Response(w, http.StatusBadRequest, "Id length would not be 0")
		return
	}

	err := admindb.DeleteCategoryDB(uuid.MustParse(id))

	if err != nil {
		handlers.Response(w, http.StatusInternalServerError, err.Error())
		return
	}

	handlers.Response(w, http.StatusOK, "Delete Successful")
}
