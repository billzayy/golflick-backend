package admindb

import (
	"errors"
	"fmt"

	"github.com/billzayy/golf-server/internal/repository"
	"github.com/billzayy/golf-server/internal/types"
)

func UpdateProductDB(input types.Product) error {
	db, err := repository.ConnectPostgres()

	if err != nil {
		return err
	}
	defer db.Close()

	query := fmt.Sprintf(`UPDATE Product SET
		product_name = '%s', product_description='%s',
		addition_detail='%s', available_status=%d,
		product_price=%v,product_sale=%d,
		category_id='%s' `,
		input.Name, input.Description, input.AdditionalDetail,
		input.Status, input.Price, input.Sales,
		input.CategoryId)

	var condition string

	if input.ReviewId == 0 {
		condition = fmt.Sprintf("WHERE product_id = '%v'", input.Id)
		query += condition
	} else {
		condition = fmt.Sprintf(", review_id = %d WHERE product_id = '%v'", input.ReviewId, input.Id)
		query += condition
	}

	result, err := db.Exec(query)

	if err != nil {
		return err
	}

	if affected, _ := result.RowsAffected(); affected == 0 {
		return errors.New(fmt.Sprintf("Id %v not found", input.Id))
	}

	return nil
}
