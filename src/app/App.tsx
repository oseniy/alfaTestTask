import { Routes, Route } from "react-router";

import Products from "@/pages/Products";
import useSetProducts from "@/hooks/useSetProducts";

export default function App() {

  useSetProducts();
  return (
    <>
      <main className="w-full">
        <Routes>
          <Route path="products" element={<Products/>}/>
        </Routes>
      </main>
    </>
  )
}
