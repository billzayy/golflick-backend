package authdb

import (
	"database/sql"
	"errors"
	"fmt"

	"github.com/billzayy/golf-server/internal/pkg"
	"github.com/billzayy/golf-server/internal/repository"
	"github.com/billzayy/golf-server/internal/types"
)

func SignUpDB(register types.User) (int, error) {
	if register.Email == "" {
		return 0, errors.New("Email must not empty")
	}

	if register.FirstName == "" {
		return 0, errors.New("First Name must not empty")
	}

	if register.LastName == "" {
		return 0, errors.New("Last Name must not empty")
	}

	if register.Password == "" {
		return 0, errors.New("Password must not empty")
	}

	db, err := repository.ConnectPostgres()

	if err != nil {
		return 0, errors.New("database connection error")
	}

	defer db.Close()

	existedEmail, err := checkEmailQuery(register.Email, db)

	if !existedEmail {
		hashPassword, err := pkg.HashPassword(register.Password)

		if err != nil {
			return 0, err
		}

		query := fmt.Sprintf("INSERT INTO users(first_name, last_name, email, password, avatar) VALUES ('%s', '%s','%s','%s','%s')",
			register.FirstName, register.LastName, register.Email, hashPassword, register.Avatar)

		_, err = db.Exec(query)

		if err != nil {
			return 0, err
		}

		return 1, nil
	} else {
		return 2, nil
	}
}

func checkEmailQuery(email string, db *sql.DB) (bool, error) {
	checkEmailQuery := fmt.Sprintf("SELECT user_id FROM users WHERE email = '%s'", email)

	rows, err := db.Query(checkEmailQuery)

	if err != nil {
		return false, err
	}

	var result string

	for rows.Next() {
		err = rows.Scan(&result)
	}

	defer rows.Close()

	if result == "" {
		return false, err
	} else {
		return true, err
	}
}
