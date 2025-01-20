package admin

import (
	"net/http"
	"strconv"

	"github.com/billzayy/golf-server/internal/handlers"
	admindb "github.com/billzayy/golf-server/internal/repository/admindb/brand_management"
)

func GetBrandByIdRoute(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")

	if r.Method != http.MethodGet {
		handlers.Response(w, http.StatusMethodNotAllowed, "Invalid Method")
		return
	}

	inputId := r.URL.Query().Get("id")

	convertId, err := strconv.Atoi(inputId)

	if err != nil {
		handlers.Response(w, http.StatusBadRequest, "Error convert id")
		return
	}

	result, err := admindb.GetBrandById(convertId)

	if err != nil {
		handlers.Response(w, http.StatusInternalServerError, err.Error())
		return
	}

	handlers.Response(w, http.StatusOK, result)
}
