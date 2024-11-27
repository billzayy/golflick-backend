package admindb

import (
	"errors"
	"fmt"
	"log"

	"github.com/billzayy/golf-server/internal/repository"
)

func DeleteBrandDB(brandId int) error {
	if brandId == 0 {
		return errors.New("BrandId will not empty")
	}
	db, err := repository.ConnectPostgres()

	if err != nil {
		log.Fatal(err)
		return err
	}

	defer db.Close()

	query := fmt.Sprintf("DELETE FROM Brand WHERE brand_id = %d", brandId)

	result, err := db.Exec(query)

	if err != nil {
		fmt.Println("Error to delete Brand")
		return err
	}

	affected, err := result.RowsAffected() // Check the result brand id and if that is 0 then send error

	if err != nil {
		fmt.Println("Error to delete Brand")
		return err
	}

	if affected == 0 {
		return errors.New("id is not existed")
	}

	return nil
}
