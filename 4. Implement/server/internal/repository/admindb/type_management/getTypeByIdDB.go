package admindb

import (
	"fmt"

	"github.com/billzayy/golf-server/internal/repository"
	"github.com/billzayy/golf-server/internal/types"
)

func GetTypeById(id int) (types.ProductType, error) {
	var result types.ProductType

	db, err := repository.ConnectPostgres()

	if err != nil {
		return result, err
	}

	defer db.Close()

	query := fmt.Sprintf("SELECT * FROM Type WHERE type_id = %d", id)

	rows, err := db.Query(query)

	if err != nil {
		return result, err
	}

	for rows.Next() {
		err := rows.Scan(&result.TypeId, &result.TypeName)

		if err != nil {
			return result, err
		}
	}

	rows.Close()

	return result, nil
}
