package auth

import (
	"encoding/json"
	"fmt"
	"io"
	"net/http"

	"github.com/billzayy/golf-server/internal/handlers"
	"github.com/billzayy/golf-server/internal/pkg/middleware"
	authdb "github.com/billzayy/golf-server/internal/repository/authDB"
	"github.com/billzayy/golf-server/internal/types/request"
)

func LoginRoute(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")
	var user request.Login

	if r.Method != http.MethodPost {
		handlers.Response(w, http.StatusMethodNotAllowed, "Invalid Method")
		return
	}

	body, err := io.ReadAll(r.Body)

	if err != nil {
		fmt.Println(err)
		return
	}

	err = json.Unmarshal(body, &user)

	if err != nil {
		fmt.Println(err)
		return
	}

	result, err := authdb.LoginDB(user)

	if err != nil {
		handlers.Response(w, http.StatusInternalServerError, err.Error())
		return
	}

	_, err = middleware.GenerateTokenAndSetCookie(result.UserId, w)

	if err != nil {
		handlers.Response(w, http.StatusInternalServerError, err.Error())
		return
	}

	handlers.Response(w, http.StatusOK, result)
	return
}
