package userdb

import (
	"errors"
	"fmt"

	"github.com/billzayy/golf-server/internal/repository"
	"github.com/billzayy/golf-server/internal/types/response"
)

/*
Product Return Values :
{
	"id"
	"name"
	"star"
	"price"
	"sales"
	"picture" {
		"name"
		"url"
	}
}
*/

func GetProductRepo(offset int, limit int) ([]response.ResponseProduct, error) {
	db, err := repository.ConnectPostgres()

	if err != nil {
		return []response.ResponseProduct{}, err
	}

	defer db.Close()

	query := fmt.Sprintf(`SELECT 
	p.product_id, p.product_name, COALESCE(r.star, 0) AS star, p.product_price, p.product_sale, COALESCE(pic.pic_name, '') AS pic_name, COALESCE(pic.url, '') AS url 
	FROM Product p 
	LEFT JOIN pictures pic ON p.product_id = pic.product_id
	LEFT JOIN review r ON r.product_id = p.product_id
	ORDER BY RANDOM()
	LIMIT %d OFFSET %d`, limit, offset)

	rows, err := db.Query(query)

	if err != nil {
		return []response.ResponseProduct{}, err
	}

	defer rows.Close()

	var result []response.ResponseProduct

	for rows.Next() {
		var temp response.ResponseProduct
		err := rows.Scan(&temp.Id, &temp.Name, &temp.Star, &temp.Price, &temp.Sales, &temp.Picture.Name, &temp.Picture.Url)

		if err != nil {
			return []response.ResponseProduct{}, err
		}

		result = append(result, temp)
	}

	if len(result) == 0 {
		return result, errors.New("Empty Products")
	}

	return result, nil
}
