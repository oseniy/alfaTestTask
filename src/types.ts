export interface product {
    id: string,
    title: string,
    price: number,
    image: string
}

export interface products {
    list: product[]
}