export interface productT {
    id: string,
    title: string,
    price: number,
    image: string
}

export interface productsT {
    list: productT[]
}