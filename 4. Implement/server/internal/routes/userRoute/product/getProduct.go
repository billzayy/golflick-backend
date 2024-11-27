package user

import (
	"net/http"
	"strconv"

	"github.com/billzayy/golf-server/internal/handlers"
	userdb "github.com/billzayy/golf-server/internal/repository/userdb/product"
)

func GetProduct(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")

	inputOffset := r.URL.Query().Get("offset")
	inputLimit := r.URL.Query().Get("limit")

	offset, err := strconv.Atoi(inputOffset)

	if err != nil {
		handlers.Response(w, http.StatusBadRequest, "Empty Offset")
		return
	}

	limit, err := strconv.Atoi(inputLimit)

	if err != nil {
		handlers.Response(w, http.StatusBadRequest, "Empty Limit")
		return
	}

	if r.Method != http.MethodGet {
		handlers.Response(w, http.StatusMethodNotAllowed, "Invalid Method")
		return
	}

	result, err := userdb.GetProductRepo(offset, limit)

	if err != nil {
		handlers.Response(w, http.StatusInternalServerError, err.Error())
		return
	}

	handlers.Response(w, http.StatusOK, result)
}
