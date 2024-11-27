package auth

import (
	"net/http"

	"github.com/billzayy/golf-server/internal/handlers"
)

func LogOutRoute(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")

	if r.Method != http.MethodPost {
		handlers.Response(w, http.StatusMethodNotAllowed, "Invalid Method")
		return
	}

	cookie := http.Cookie{
		Name:   "jwt",
		Value:  "",
		MaxAge: 0,
	}

	http.SetCookie(w, &cookie)

	handlers.Response(w, http.StatusOK, "Logged out successfully")
}
