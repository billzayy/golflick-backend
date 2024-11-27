package admindb

import (
	"errors"
	"fmt"

	"github.com/billzayy/golf-server/internal/repository"
)

func AddBrandRepo(brandName string) (int, error) {
	if brandName == "" {
		return 0, errors.New("brand name is not empty")
	}

	db, err := repository.ConnectPostgres()

	if err != nil {
		return 0, err
	}

	defer db.Close()

	query := fmt.Sprintf("INSERT INTO Brand(brand_name) VALUES ('%s')", brandName)

	_, err = db.Exec(query)

	if err != nil {
		return 0, err
	}

	return 1, nil
}
