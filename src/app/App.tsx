import { Routes, Route } from "react-router";

import Products from "@/pages/Products";
import useSetProducts from "@/hooks/useSetProducts";
import Product from "@/pages/Product";
import CreateProduct from "@/pages/CreateProduct";

export default function App() {

  useSetProducts();
  return (
    <>
      <main className="w-full">
        <Routes>
          <Route path="/products" element={<Products />}>
            <Route path=":id" element={<Product />} />
            <Route path="create-product" element={<CreateProduct />} />
          </Route>
        </Routes>
      </main>
    </>
  )
}
