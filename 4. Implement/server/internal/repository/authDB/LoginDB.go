package authdb

import (
	"errors"
	"fmt"

	"github.com/billzayy/golf-server/internal/repository"
	"github.com/billzayy/golf-server/internal/types"
	"github.com/billzayy/golf-server/internal/types/request"
	"github.com/billzayy/golf-server/internal/types/response"
	"golang.org/x/crypto/bcrypt"
)

func LoginDB(user request.Login) (response.ResponseUser, error) {
	var result response.ResponseUser

	if user.Email == "" {
		return result, errors.New("email is not empty")
	}

	db, err := repository.ConnectPostgres()

	if err != nil {
		fmt.Println("Postgres Connection Error")
		return result, err
	}

	defer db.Close()

	query := fmt.Sprintf("SELECT * FROM users WHERE email = '%s'", user.Email)

	rows, err := db.Query(query)

	if err != nil {
		fmt.Println(err) // Email does not existed
		return result, err
	}

	var temp types.User

	for rows.Next() {
		err := rows.Scan(&temp.UserId, &temp.FirstName, &temp.LastName, &temp.Email, &temp.Password, &temp.Avatar)

		if err != nil {
			fmt.Println(err) // Error or missing destination arguments
			return result, err
		}

		err = bcrypt.CompareHashAndPassword([]byte(temp.Password), []byte(user.Password))

		if err != nil {
			fmt.Println(err) // Incorrect password
			return result, errors.New("incorrect password")
		}
		result.UserId = temp.UserId
		result.FirstName = temp.FirstName
		result.LastName = temp.LastName
		result.Email = temp.Email
		result.Avatar = temp.Avatar
	}
	rows.Close()

	if result.UserId == "" {
		return result, errors.New("account not found")
	}

	return result, nil
}
