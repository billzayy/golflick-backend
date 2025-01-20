export interface IProduct { 
    id: string,
    name: string,
    star: number,
    price: number,
    sale: number,
    picture: IPicture
}

export interface IPicture { 
    pictureId?: string,
    pictureName: string,
    url: string
}

export interface IDetailProduct { 
    id?: string,
    name: string,
    description: string,
    detail: string,
    categoryId: string,
    status: number,
    price: number|"",
    sale: number|"",
    reviewId?: number | null
}