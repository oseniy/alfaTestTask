import Layout from "@/shared/Layout";
import ProductsList from "@/widgets/productsList/ProductsList";
import Header from "@/widgets/header/Header";


export default function Products() {
    return (
        <Layout>
            <Header/>
            <ProductsList/>
        </Layout>
    )
}