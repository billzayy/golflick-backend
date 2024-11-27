package admindb

import (
	"fmt"

	"github.com/billzayy/golf-server/internal/repository"
	"github.com/billzayy/golf-server/internal/types"
)

func GetBrandRepo() ([]types.Brand, error) {
	var result []types.Brand

	db, err := repository.ConnectPostgres()

	if err != nil {
		return result, err
	}

	defer db.Close()

	query := fmt.Sprintf("SELECT * FROM Brand")

	rows, err := db.Query(query)

	if err != nil {
		return result, err
	}

	var temp types.Brand
	for rows.Next() {
		err := rows.Scan(&temp.BrandId, &temp.BrandName)

		if err != nil {
			return result, err
		}

		result = append(result, temp)
	}

	rows.Close()

	return result, nil
}
