package admin

import (
	"net/http"
	"strconv"

	"github.com/billzayy/golf-server/internal/handlers"
	admindb "github.com/billzayy/golf-server/internal/repository/admindb/type_management"
)

func GetTypeByIdRoute(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")

	inputId := r.URL.Query().Get("id")

	convertId, err := strconv.Atoi(inputId)

	if err != nil {
		handlers.Response(w, http.StatusBadRequest, "Error convert Id")
		return
	}

	if r.Method != http.MethodGet {
		handlers.Response(w, http.StatusMethodNotAllowed, "Invalid Method")
		return
	}

	result, err := admindb.GetTypeById(convertId)

	if err != nil {
		handlers.Response(w, http.StatusInternalServerError, err.Error())
		return
	}

	handlers.Response(w, http.StatusOK, result)
}
