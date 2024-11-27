package admindb

import (
	"fmt"

	"github.com/billzayy/golf-server/internal/repository"
	"github.com/billzayy/golf-server/internal/types"
	"github.com/google/uuid"
)

func AddProductRepo(input types.Product) error {
	db, err := repository.ConnectPostgres()

	if err != nil {
		return err
	}

	defer db.Close()

	id := uuid.New()

	query := fmt.Sprintf(`INSERT INTO Product(product_id, category_id, product_name, product_description, addition_detail, available_status, product_price, product_sale) VALUES
	('%v','%s','%s','%s','%s',%v,%v,%v)`,
		id, input.CategoryId, input.Name, input.Description, input.AdditionalDetail,
		input.Status, input.Price, input.Sales)

	_, err = db.Exec(query)

	if err != nil {
		return err
	}

	return nil
}
