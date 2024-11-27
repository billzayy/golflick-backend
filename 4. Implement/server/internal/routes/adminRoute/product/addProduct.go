package admin

import (
	"encoding/json"
	"io"
	"net/http"

	"github.com/billzayy/golf-server/internal/handlers"
	admindb "github.com/billzayy/golf-server/internal/repository/admindb/product_management"
	"github.com/billzayy/golf-server/internal/types"
)

func AddProductRoute(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")

	if r.Method != http.MethodPost {
		handlers.Response(w, http.StatusMethodNotAllowed, "Invalid Method!")
		return
	}

	body, err := io.ReadAll(r.Body)

	if err != nil {
		handlers.Response(w, http.StatusBadRequest, err.Error())
		return
	}

	var input types.Product

	err = json.Unmarshal(body, &input)

	if err != nil {
		handlers.Response(w, http.StatusBadRequest, err.Error())
		return
	}

	err = admindb.AddProductRepo(input)

	if err != nil {
		handlers.Response(w, http.StatusInternalServerError, err.Error())
		return
	}

	handlers.Response(w, http.StatusCreated, "Add Product Successful")
}
