package admin

import (
	"encoding/json"
	"io"
	"net/http"

	"github.com/billzayy/golf-server/internal/handlers"
	admindb "github.com/billzayy/golf-server/internal/repository/admindb/brand_management"
	"github.com/billzayy/golf-server/internal/types"
)

func UpdateBrandRoute(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")

	if r.Method != http.MethodPatch {
		handlers.Response(w, http.StatusMethodNotAllowed, "Invalid Method")
		return
	}

	body, err := io.ReadAll(r.Body)

	if err != nil {
		handlers.Response(w, http.StatusBadRequest, "Error Request")
		return
	}

	var request types.Brand

	err = json.Unmarshal(body, &request)

	if err != nil {
		handlers.Response(w, http.StatusInternalServerError, "Error Unmarshal")
		return
	}

	err = admindb.UpdateBrandRepo(request)

	if err != nil {
		handlers.Response(w, http.StatusInternalServerError, err.Error())
		return
	}

	handlers.Response(w, http.StatusOK, "Update Successful")
}
