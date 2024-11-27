package admindb

import (
	"errors"
	"fmt"

	"github.com/billzayy/golf-server/internal/repository"
	"github.com/billzayy/golf-server/internal/types"
)

func UpdateTypeRepo(input types.ProductType) error {
	db, err := repository.ConnectPostgres()

	if err != nil {
		return err
	}

	defer db.Close()

	query := fmt.Sprintf("UPDATE Type SET type_name = '%s' WHERE type_id = %d", input.TypeName, input.TypeId)

	result, err := db.Exec(query)

	if err != nil {
		return err
	}

	affected, err := result.RowsAffected()

	if err != nil {
		return err
	}

	if affected == 0 {
		return errors.New("id is not existed !")
	}

	return nil
}
