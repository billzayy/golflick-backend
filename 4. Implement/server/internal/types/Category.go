package types

import "github.com/google/uuid"

type Category struct {
	Id      uuid.UUID `json:"categoryId"`
	Name    string    `json:"categoryName"`
	Picture string    `json:"categoryPicture"`
	BrandId int       `json:"brandId"`
	TypeId  int       `json:"typeId"`
}
