package admindb

import (
	"errors"
	"fmt"

	"github.com/billzayy/golf-server/internal/repository"
	"github.com/billzayy/golf-server/internal/types"
	"github.com/google/uuid"
)

func AddCategoryRepo(input types.Category) error {
	if input == (types.Category{}) {
		return errors.New("")
	}

	db, err := repository.ConnectPostgres()

	if err != nil {
		return err
	}

	defer db.Close()

	newUUID := uuid.New()

	query := fmt.Sprintf("INSERT INTO Category VALUES ('%v','%s','%s', %d, %d)", newUUID, input.Name, input.Picture, input.BrandId, input.TypeId)

	result, err := db.Exec(query)

	if err != nil {
		return err
	}

	if affected, _ := result.RowsAffected(); affected == 0 {
		return err
	}

	return nil
}
