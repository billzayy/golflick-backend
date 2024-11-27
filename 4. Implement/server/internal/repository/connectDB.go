package repository

import (
	"database/sql"
	"log"
	"os"

	_ "github.com/lib/pq"

	"github.com/joho/godotenv"
)

func ConnectPostgres() (*sql.DB, error) {
	err := godotenv.Load("./internal/.env")

	if err != nil {
		log.Fatal("Error read .env file")
	}

	PATH := os.Getenv("DB_PATH")

	db, err := sql.Open("postgres", PATH)

	if err != nil {
		return db, err
	}

	return db, nil
}
