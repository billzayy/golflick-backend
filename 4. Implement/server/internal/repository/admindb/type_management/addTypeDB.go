package admindb

import (
	"fmt"

	"github.com/billzayy/golf-server/internal/repository"
)

func AddTypeDB(inputName string) (int, error) {
	if inputName == "" {
		return -1, nil
	}

	db, err := repository.ConnectPostgres()

	if err != nil {
		return 0, err
	}
	defer db.Close()

	query := fmt.Sprintf("INSERT INTO Type(type_name) VALUES('%s')", inputName)

	_, err = db.Exec(query)

	if err != nil {
		return 0, err
	}

	return 1, nil
}
