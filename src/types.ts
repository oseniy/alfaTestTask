export type productId = string | undefined

export interface productT {
    id: productId,
    title: string,
    price: number,
    image: string,
    description: string
}

export interface productsT {
    list: productT[]
}