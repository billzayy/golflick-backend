package types

import "github.com/google/uuid"

type Product struct {
	Id               uuid.UUID `json:"id" db:"product_id"`
	Name             string    `json:"name" db:"product_name"`
	Description      string    `json:"description" db:"product_description"`
	AdditionalDetail string    `json:"detail" db:"additional_detail"`
	Status           int       `json:"status" db:"available_status"`
	Price            float64   `json:"price" db:"product_price"`
	Sales            int       `json:"sales" db:"product_sale"`
	CategoryId       uuid.UUID `json:"categoryId" db:"category_id"`
}
