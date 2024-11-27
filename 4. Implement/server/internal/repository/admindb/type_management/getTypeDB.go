package admindb

import (
	"github.com/billzayy/golf-server/internal/repository"
	"github.com/billzayy/golf-server/internal/types"
)

func GetTypeDB() ([]types.ProductType, error) {
	var result []types.ProductType

	db, err := repository.ConnectPostgres()

	if err != nil {
		return result, err
	}
	defer db.Close()

	query := "SELECT * FROM Type"

	rows, err := db.Query(query)

	if err != nil {
		return result, err
	}

	var temp types.ProductType

	for rows.Next() {
		err := rows.Scan(&temp.TypeId, &temp.TypeName)

		if err != nil {
			return result, err
		}

		result = append(result, temp)
	}
	defer rows.Close()

	return result, nil
}
