package main

import (
	"fmt"
	"log"
	"net/http"
	"os"

	"github.com/billzayy/golf-server/internal/routes"
	"github.com/joho/godotenv"
	"github.com/rs/cors"
)

func main() {
	err := godotenv.Load("./internal/.env")

	if err != nil {
		log.Fatal("Error loading .env file")
	}

	PORT := os.Getenv("PORT")
	route := routes.NewRouter()

	options := cors.Options{
		AllowedOrigins:   []string{"http://localhost:3006"},
		AllowedMethods:   []string{http.MethodGet, http.MethodPost, http.MethodPut, http.MethodDelete},
		AllowCredentials: true,
		AllowedHeaders:   []string{"*"},
	}

	c := cors.New(options)
	corsHandler := c.Handler(route)

	fmt.Printf("Server is running on port: %s\n", PORT)
	err = http.ListenAndServe(":"+PORT, corsHandler)

	if err != nil {
		log.Fatal(err)
	}
}
