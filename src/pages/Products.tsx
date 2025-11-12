import Layout from "@/shared/Layout";
import ProductsList from "@/widgets/productsList/ProductsList";
import Header from "@/widgets/header/Header";
import { Outlet } from "react-router-dom";


export default function Products() {
    return (
        <Layout>
            <Header/>
            <ProductsList/>
            <Outlet />
        </Layout>
    )
}