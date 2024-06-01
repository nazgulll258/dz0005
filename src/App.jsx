import { Route, Routes } from "react-router-dom"
import Layout from "./components/Layout"
import BasketPage from "./pages/BasketPage"
import ProductPage from "./pages/ProductPage"

const App = () => {
  return (
    <div>
      <Routes >
        <Route path="/" element={<Layout/>}>
          <Route index element={<BasketPage/>}/>
          <Route path="product" element={<ProductPage/>}/>
          <Route path="*" element={<h1>error</h1>}/>
        </Route>
      </Routes>
    </div>
  )
}

export default App
