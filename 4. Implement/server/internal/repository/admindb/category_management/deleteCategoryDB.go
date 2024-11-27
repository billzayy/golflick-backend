package admindb

import (
	"errors"
	"fmt"

	"github.com/billzayy/golf-server/internal/repository"
	"github.com/google/uuid"
)

func DeleteCategoryDB(id uuid.UUID) error {
	if id.String() == "" {
		return errors.New("")
	}

	db, err := repository.ConnectPostgres()

	if err != nil {
		return err
	}
	defer db.Close()

	query := fmt.Sprintf("DELETE FROM Category WHERE category_id = '%v'", id)

	result, err := db.Exec(query)

	if err != nil {
		return err
	}

	if affected, _ := result.RowsAffected(); affected == 0 {
		return errors.New(fmt.Sprintf("Category with Id %d is not existed", id))
	}

	return nil
}
