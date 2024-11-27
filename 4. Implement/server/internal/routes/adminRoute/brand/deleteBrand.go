package admin

import (
	"fmt"
	"net/http"
	"strconv"

	"github.com/billzayy/golf-server/internal/handlers"
	admindb "github.com/billzayy/golf-server/internal/repository/admindb/brand_management"
)

func DeleteBrandRoute(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")

	if r.Method != http.MethodDelete {
		handlers.Response(w, http.StatusMethodNotAllowed, "Invalid Method")
		return
	}

	brandId := r.PathValue("brandId")

	convertId, err := strconv.Atoi(brandId)

	if err != nil {
		handlers.Response(w, http.StatusBadRequest, err.Error())
		return
	}

	err = admindb.DeleteBrandDB(convertId)

	if err != nil {
		handlers.Response(w, http.StatusInternalServerError, err.Error())
		return
	}

	if err == fmt.Errorf("id is not existed") {
		handlers.Response(w, http.StatusNotFound, "Id Not Found")
		return
	}

	handlers.Response(w, http.StatusOK, "Successful")
}
