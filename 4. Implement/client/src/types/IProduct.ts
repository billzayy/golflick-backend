export interface IProduct { 
    id: string,
    name: string,
    star: number,
    price: number,
    sale: number,
    picture: IPicture
}

export interface IPicture { 
    pictureName: string,
    url: string
}