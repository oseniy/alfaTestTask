import { useAppDispatch } from "@/hooks/reduxHooks";
import { useIsMobile } from "@/hooks/useIsMobile";
import { deleteProduct } from "@/model/productsSlice";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/shared/shadcn/ui/alert-dialog";
import { Button } from "@/shared/shadcn/ui/button";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/shared/shadcn/ui/tooltip";
import type { productId } from "@/types";
import { Trash2 } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Delete({ id }: { id: productId}) {
    const isMobile = useIsMobile();
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    return (
        <div
            onClick={(e) => {
                e.stopPropagation()
            }} 
        >
            <AlertDialog>
                <AlertDialogTrigger>
                    <Tooltip>
                        <TooltipTrigger                              
                        asChild>
                            <div>
                                <Button
                                variant="outline" size="icon-lg"> <Trash2/> </Button>
                            </div>
                        </TooltipTrigger>
                        {!isMobile && <TooltipContent>Удалить товар</TooltipContent>}
                    </Tooltip>            
                </AlertDialogTrigger>
                <AlertDialogContent>
                    <AlertDialogHeader>
                        <AlertDialogTitle>Внимание!</AlertDialogTitle>
                        <AlertDialogDescription>Это действие необратимо!</AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                        <AlertDialogAction
                            onClick={(e) => {
                                navigate(`/products`)
                                e.stopPropagation()
                                setTimeout(() => {
                                    dispatch(deleteProduct(id));
                                }, 300);
                            }} 
                        >
                            Удалить
                        </AlertDialogAction>
                        <AlertDialogCancel>Отмена</AlertDialogCancel>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
        </div>

    )
}