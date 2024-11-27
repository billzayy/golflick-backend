package admin

import (
	"net/http"

	"github.com/billzayy/golf-server/internal/handlers"
	admindb "github.com/billzayy/golf-server/internal/repository/admindb/category_management"
)

func GetCategory(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")

	if r.Method != http.MethodGet {
		handlers.Response(w, http.StatusMethodNotAllowed, "Invalid Method")
		return
	}

	result, err := admindb.GetCategoryDB()

	if err != nil {
		handlers.Response(w, http.StatusInternalServerError, err.Error())
		return
	}

	if result == nil {
		handlers.Response(w, http.StatusOK, "Empty")
		return
	}

	handlers.Response(w, http.StatusOK, result)
}
