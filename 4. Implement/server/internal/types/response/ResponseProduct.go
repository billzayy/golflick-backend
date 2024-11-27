package response

import "github.com/google/uuid"

type ResponseProduct struct {
	Id      uuid.UUID   `json:"id" db:"id"`
	Name    string      `json:"name" db:"product_name"`
	Star    float64     `json:"star" db:"product_star"`
	Price   float64     `json:"price" db:"product_price"`
	Sales   int         `json:"sale" db:"product_sale"`
	Picture ListPicture `json:"picture" db:"product_picture"`
}

type ListPicture struct {
	Name string `json:"pictureName"`
	Url  string `json:"url"`
}
