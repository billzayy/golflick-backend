package admindb

import (
	"fmt"

	"github.com/billzayy/golf-server/internal/repository"
	"github.com/billzayy/golf-server/internal/types"
)

func GetCategoryDB() ([]types.Category, error) {
	db, err := repository.ConnectPostgres()

	if err != nil {
		return []types.Category{}, err
	}

	defer db.Close()

	query := fmt.Sprintf("SELECT * FROM Category")

	rows, err := db.Query(query)

	if err != nil {
		return []types.Category{}, err
	}

	var result []types.Category

	defer rows.Close()
	for rows.Next() {
		var temp types.Category
		err := rows.Scan(&temp.Id, &temp.Name, &temp.Picture, &temp.BrandId, &temp.TypeId)

		if err != nil {
			return []types.Category{}, err
		}

		result = append(result, temp)
	}

	return result, nil
}
