package types

import "github.com/google/uuid"

type Picture struct {
	Id        uuid.UUID `json:"id"`
	Name      string    `json:"pictureName"`
	Url       string    `json:"url"`
	ProductId string    `json:"productId"`
}
