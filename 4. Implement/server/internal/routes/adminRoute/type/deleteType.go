package admin

import (
	"net/http"
	"strconv"

	"github.com/billzayy/golf-server/internal/handlers"
	admindb "github.com/billzayy/golf-server/internal/repository/admindb/type_management"
)

func DeleteTypeRoute(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")

	if r.Method != http.MethodDelete {
		handlers.Response(w, http.StatusMethodNotAllowed, "Invalid Method !")
		return
	}

	typeId := r.PathValue("typeId")

	if typeId == "" {
		handlers.Response(w, http.StatusBadRequest, "Empty Request")
		return
	}

	convertedId, err := strconv.Atoi(typeId)

	if err != nil {
		handlers.Response(w, http.StatusForbidden, "Convert Id Error")
		return
	}

	err = admindb.DeleteTypeRepo(convertedId)

	if err != nil {
		handlers.Response(w, http.StatusInternalServerError, err.Error())
		return
	}

	handlers.Response(w, http.StatusOK, "Delete Successful")
}
