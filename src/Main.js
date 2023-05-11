import { Route, Routes } from "react-router-dom"
import { Cart } from "./components/Cart"
import { Footer } from "./components/Footer"
import { Navbar } from "./components/Navbar"
import { Contact } from "./pages/contact/Contact"
import { Home } from "./pages/home/Home"
import { ProductList } from "./pages/productListGrid/ProductList"
import { Like } from "./components/Like"

export let Main = ({ changeInput, state, }) => {
    return (
        <div className="main">
            <Navbar changeInput={changeInput} />
            <Routes>
                <Route path="/" element={<Home state={state} />} />
                <Route path="/like" element={<Like state={state}/>} />
                <Route path="/bags" element={<ProductList />} />
                <Route path="/sneakers" element={<ProductList />} />
                <Route path="/belt" element={<ProductList />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/product_list" element={<ProductList />} />
            </Routes>
            <Footer />
        </div>
    )
}