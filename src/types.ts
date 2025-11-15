export type ProductId = string | undefined;

export interface ProductT {
    id: ProductId,
    title: string,
    price: number,
    image: string,
    description: string
};

export interface ProductsT {
    list: ProductT[]
};