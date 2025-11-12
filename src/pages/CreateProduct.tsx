
import { useForm } from "react-hook-form"
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/shared/shadcn/ui/dialog";
import { Input } from "@/shared/shadcn/ui/input";
import { InputGroup, InputGroupText, InputGroupAddon, InputGroupInput, InputGroupTextarea } from "@/shared/shadcn/ui/input-group";
import { Label } from "@/shared/shadcn/ui/label";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Button } from "@/shared/shadcn/ui/button";
import { useAppDispatch, useAppSelector } from "@/hooks/reduxHooks";
import { addProduct } from "@/model/productsSlice";
import type { productId } from "@/types";

interface CreateProductFormValues {
  title: string
  price: number
  description: string
  image: FileList
}

export default function CreateProduct() {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const lastId = useAppSelector((s) => s.products.list[s.products.list.length-1]?.id)
    const { register, handleSubmit, watch, reset, formState: { errors } } =
    useForm<CreateProductFormValues>()

    const onSubmit = (data: CreateProductFormValues) => {
        console.log("вызвался сабмит")
        const product = {
        id: String(Number(lastId)+1) as productId,
        title: data.title,
        price: Number(data.price),
        description: data.description,
        image: data.image?.[0]
            ? URL.createObjectURL(data.image[0])
            : "",
        }

        dispatch(addProduct(product))
        reset()
        navigate('/products')
  }

    return (
        <Dialog open defaultOpen onOpenChange={() => navigate('/products')}>
            <form id="create-product-form" onSubmit={handleSubmit(onSubmit)}>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>
                            Новый товар
                        </DialogTitle>
                    </DialogHeader>
                    <div className="grid gap-1">
                        <Label htmlFor="title-1">Название</Label>
                        <Input placeholder="картошка" id="title-1" 
                        {...register("title", { required: "Введите название" })}/>
                        {errors.title && (
                            <p className="text-sm text-red-500">{errors.title.message}</p>
                        )}
                    </div>
                    <div className="grid gap-1">
                        <Label htmlFor="price-1">Стоимость</Label>
                        <InputGroup>
                            <InputGroupAddon>
                                <InputGroupText>$</InputGroupText>
                            </InputGroupAddon>
                            <InputGroupInput type="number" id="price-1" placeholder="0.00"
                            {...register("price", { required: "Введите цену", 
                            valueAsNumber: true, 
                            min: {value: 0, message: "Цена должна быть неотрицательна"} })}/>
                        </InputGroup>
                        {errors.price && (
                            <p className="text-sm text-red-500">{errors.price.message}</p>
                        )}
                    </div>
                    <div className="grid gap-1">
                        <Label htmlFor="description-1">Описание</Label>
                        <InputGroup>
                            <InputGroupTextarea id="description-1"
                            className="resize-none overflow-y-auto max-h-48"
                            {...register("description", { required: "Введите описание",
                             maxLength: {value: 500, message: "максимальная длина текста: 500 символов"} })}/>
                        </InputGroup>
                        {errors.description && (
                            <p className="text-sm text-red-500">{errors.description.message}</p>
                        )}
                    </div>
                    <div className="grid gap-1">
                        <Label htmlFor="image-1">Изображение</Label>
                        <Input id="image-1" type="file" accept="image/*"
                        {...register("image", { required: "Выберите изображение" })}/>
                        {errors.image && (
                            <p className="text-sm text-red-500">{errors.image.message}</p>
                        )}
                    </div>
                    <DialogFooter>
                        <Button variant="outline"  onClick={() => navigate('/products')}>Отмена</Button>
                        <Button type="submit" form="create-product-form">Создать</Button>
                    </DialogFooter>
                </DialogContent>    
            </form>
        </Dialog>
    )
}