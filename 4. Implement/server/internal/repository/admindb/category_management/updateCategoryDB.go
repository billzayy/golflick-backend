package admindb

import (
	"errors"
	"fmt"

	"github.com/billzayy/golf-server/internal/repository"
	"github.com/billzayy/golf-server/internal/types"
)

func UpdateCategoryRepo(input types.Category) error {
	db, err := repository.ConnectPostgres()

	if err != nil {
		return err
	}

	defer db.Close()

	query := fmt.Sprintf("UPDATE Category SET category_name = '%s', category_pic = '%s', brand_id = %d, type_id = %d WHERE category_id = '%v'",
		input.Name, input.Picture, input.BrandId, input.TypeId, input.Id)

	result, err := db.Exec(query)

	if err != nil {
		return err
	}

	if affected, _ := result.RowsAffected(); affected == 0 {
		return errors.New(fmt.Sprintf("Category with Id %d is not existed", input.Id))
	}

	return nil
}
