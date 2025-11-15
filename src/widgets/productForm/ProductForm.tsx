import { useForm } from "react-hook-form"
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from "@/shared/shadcn/ui/dialog";
import { Input } from "@/shared/shadcn/ui/input";
import { InputGroup, InputGroupText, InputGroupAddon, InputGroupInput, InputGroupTextarea } from "@/shared/shadcn/ui/input-group";
import { Label } from "@/shared/shadcn/ui/label";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "@/shared/shadcn/ui/button";
import { useAppDispatch, useAppSelector } from "@/hooks/reduxHooks";
import { useEffect, useState } from "react";
import type { CreateProductFormValues,  ModeValue } from "./lib/types";
import { buildSubmitHandler } from "./lib/submit";
import { selectLastId, selectProductById } from "@/model/productsSelectors";
import { productValidation } from "./lib/validation";

interface Props {
    mode: ModeValue
}

export default function ProductForm({ mode }: Props) {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const { id } = useParams();
    const lastId = useAppSelector(selectLastId);
    const product = useAppSelector(selectProductById(id));
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<CreateProductFormValues>({
        defaultValues: product || { title: "", price: 0, description: "", image: "" },
    })
    
    const [fileName, setFileName] = useState<string | undefined>(undefined);

    useEffect(() => {
    setFileName(mode === "edit" ? product?.image ?? "" : "");
    }, [mode, product]);

    
  const onSubmit = (data: CreateProductFormValues) => {
    const submit = buildSubmitHandler(mode, product, dispatch);
    submit(data, lastId);
    reset();
    navigate("..")
  };

    return (
        <Dialog open defaultOpen onOpenChange={() => navigate('/products')}>
            <form id="product-form" onSubmit={handleSubmit(onSubmit)}>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>
                            {mode === "create" ? "Новый товар" : "Редактирование товара"}
                        </DialogTitle>
                    </DialogHeader>

                    <div className="grid gap-1">
                        <Label htmlFor="title-1">Название</Label>
                        <Input placeholder="картошка" id="title-1" 
                        {...register("title", productValidation.title)}/>
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
                            {...register("price", productValidation.price)}/>
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
                            {...register("description", productValidation.description)}/>
                        </InputGroup>
                        {errors.description && (
                            <p className="text-sm text-red-500">{errors.description.message}</p>
                        )}
                    </div>

                    <div className="grid gap-1">
                        <Label htmlFor="image-1">Изображение</Label>
                        <Input id="image-1" type="file" accept="image/*" className="sr-only"
                        {...register("image", {    
                            required:
                                mode === "create" && !fileName
                                ? "Выберите изображение"
                                : false,
                            onChange: (e) => {
                                if (e.target.files && e.target.files.length > 0) {
                                    setFileName(e.target.files[0].name);
                                }
                            }                          
                         })}/>
                        <label
                            htmlFor="image-1"
                            className="flex h-20 w-full cursor-pointer items-center 
                            justify-center overflow-scroll rounded-md border-2 border-dashed
                            bg-gray-50 text-center text-sm text-muted-foreground hover:bg-gray-100"
                        >
                            {fileName ? `${fileName}` : "Нажмите для выбора изображения"}
                        </label>
                        {errors.image && (
                            <p className="text-sm text-red-500">{errors.image.message}</p>
                        )}
                    </div>

                    <DialogFooter>
                        <Button variant="outline"  onClick={() => navigate('..')}>Отмена</Button>
                        <Button type="submit" form="product-form">
                            {mode === "create" ? "Создать" : "Сохранить"}
                        </Button>
                    </DialogFooter>
                </DialogContent>    
            </form>
        </Dialog>
    )
}