import { Routes, Route } from "react-router";

import Products from "@/pages/Products";

export default function App() {

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
