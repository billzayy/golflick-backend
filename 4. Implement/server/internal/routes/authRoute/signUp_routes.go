package auth

import (
	"encoding/json"
	"io"
	"log"
	"net/http"

	"github.com/billzayy/golf-server/internal/handlers"
	authdb "github.com/billzayy/golf-server/internal/repository/authDB"
	"github.com/billzayy/golf-server/internal/types"
)

func SignUpRoute(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")

	if r.Method != http.MethodPost {
		handlers.Response(w, http.StatusMethodNotAllowed, "Invalid Method")
		return
	}

	body, err := io.ReadAll(r.Body)

	if err != nil {
		handlers.Response(w, http.StatusBadRequest, "Error Request Body")
		return
	}

	var register types.User

	err = json.Unmarshal(body, &register)

	if err != nil {
		log.Println(err)
		handlers.Response(w, http.StatusBadRequest, "Invalid Body")
		return
	}

	result, err := authdb.SignUpDB(register)

	if err != nil {
		handlers.Response(w, http.StatusInternalServerError, err)
		return
	}

	if result == 1 {
		handlers.Response(w, http.StatusCreated, "Sign In Successful!")
		return
	} else if result == 2 {
		handlers.Response(w, http.StatusConflict, "Email is existed!")
		return
	}
}
