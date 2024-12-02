package middleware

import (
	"fmt"
	"net/http"
	"os"
	"time"

	jwt "github.com/golang-jwt/jwt/v5"
	"github.com/joho/godotenv"
)

func GenerateTokenAndSetCookie(userId string, w http.ResponseWriter) (string, error) {
	err := godotenv.Load("./internal/.env")

	if err != nil {
		fmt.Println("Error loading .env file")
		return "", err
	}

	mySigningKey := []byte(os.Getenv("SECRET_KEY"))

	token := jwt.NewWithClaims(jwt.SigningMethodHS256, jwt.MapClaims{
		"userId": userId,
		"exp":    time.Now().Add(time.Hour * 24).Unix(),
	})

	tokenString, err := token.SignedString(mySigningKey)

	if err != nil {
		fmt.Println(err)
		return "", err
	}

	cookie := http.Cookie{
		Name:     "jwt",
		Value:    tokenString,
		HttpOnly: true,
		Path:     "/",
		SameSite: 3,
	}

	http.SetCookie(w, &cookie)

	return tokenString, nil
}
