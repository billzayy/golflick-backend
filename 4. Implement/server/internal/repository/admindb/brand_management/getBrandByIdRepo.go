package admindb

import (
	"fmt"

	"github.com/billzayy/golf-server/internal/repository"
	"github.com/billzayy/golf-server/internal/types"
)

func GetBrandById(id int) (types.Brand, error) {
	var result types.Brand

	db, err := repository.ConnectPostgres()

	if err != nil {
		return result, err
	}

	defer db.Close()

	query := fmt.Sprintf("SELECT * FROM Brand WHERE brand_id = %d", id)

	rows, err := db.Query(query)

	if err != nil {
		return result, err
	}

	for rows.Next() {
		err := rows.Scan(&result.BrandId, &result.BrandName)

		if err != nil {
			return result, err
		}
	}

	rows.Close()

	return result, nil
}
