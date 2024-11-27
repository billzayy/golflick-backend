package admindb

import (
	"errors"
	"fmt"

	"github.com/billzayy/golf-server/internal/repository"
	"github.com/google/uuid"
)

func DeleteProductRepo(id uuid.UUID) error {
	db, err := repository.ConnectPostgres()

	if err != nil {
		return err
	}

	defer db.Close()

	query := fmt.Sprintf("DELETE FROM Product WHERE product_id = '%s'", id)

	result, err := db.Exec(query)

	if err != nil {
		return err
	}

	if affected, _ := result.RowsAffected(); affected == 0 {
		return errors.New(fmt.Sprintf("Id %s is not existed", id))
	}

	return nil
}
