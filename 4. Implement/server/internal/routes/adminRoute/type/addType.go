package admin

import (
	"encoding/json"
	"io"
	"net/http"

	"github.com/billzayy/golf-server/internal/handlers"
	admindb "github.com/billzayy/golf-server/internal/repository/admindb/type_management"
	"github.com/billzayy/golf-server/internal/types"
)

func AddTypeRoute(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")

	if r.Method != http.MethodPost {
		handlers.Response(w, http.StatusMethodNotAllowed, "Invalid Method")
		return
	}

	body, err := io.ReadAll(r.Body)

	if err != nil {
		handlers.Response(w, http.StatusInternalServerError, err.Error())
		return
	}

	var request types.ProductType

	err = json.Unmarshal(body, &request)

	if err != nil {
		handlers.Response(w, http.StatusInternalServerError, err.Error())
		return
	}

	status, err := admindb.AddTypeDB(request.TypeName)

	if err != nil {
		handlers.Response(w, http.StatusInternalServerError, err.Error())
		return
	}

	if status == -1 {
		handlers.Response(w, http.StatusBadRequest, "Input is empty!")
		return
	} else {
		handlers.Response(w, http.StatusCreated, "Add Successful")
		return
	}
}
