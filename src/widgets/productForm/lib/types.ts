export interface CreateProductFormValues {
    title: string
    price: number
    description: string
    image: FileList | string
}

export type ModeValue = "create" | "edit";