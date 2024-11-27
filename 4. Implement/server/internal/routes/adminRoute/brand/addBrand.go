package admin

import (
	"encoding/json"
	"io"
	"net/http"

	"github.com/billzayy/golf-server/internal/handlers"
	admindb "github.com/billzayy/golf-server/internal/repository/admindb/brand_management"
	"github.com/billzayy/golf-server/internal/types"
)

func AddBrandRoute(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")

	if r.Method != http.MethodPost {
		handlers.Response(w, http.StatusMethodNotAllowed, "Invalid Method!")
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
		handlers.Response(w, http.StatusInternalServerError, "Error")
		return
	}

	data, err := admindb.AddBrandRepo(request.BrandName)

	if err != nil {
		handlers.Response(w, http.StatusInternalServerError, err.Error())
		return
	}

	if data == 1 {
		handlers.Response(w, http.StatusCreated, "Add Successful")
		return
	}
}
