package admindb

import (
	"fmt"

	"github.com/billzayy/golf-server/internal/repository"
	"github.com/billzayy/golf-server/internal/types"
)

func UpdateBrandRepo(brandUpdate types.Brand) error {
	db, err := repository.ConnectPostgres()

	if err != nil {
		return err
	}

	defer db.Close()

	query := fmt.Sprintf("UPDATE Brand SET brand_name = '%s' WHERE brand_id = %d", brandUpdate.BrandName, brandUpdate.BrandId)

	_, err = db.Exec(query)

	if err != nil {
		return err
	}

	return nil
}
