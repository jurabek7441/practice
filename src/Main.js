import { Route, Routes } from "react-router-dom"
import { Footer } from "./components/Footer"
import { Navbar } from "./components/Navbar"
import { Home } from "./pages/home/Home"

export let Main =()=>{
    return(
        <div className="main">
            <Navbar/>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/bags" element={<Home/>} />
                <Route path="/sneakers" element={<Home/>} />
                <Route path="/belt" element={<Home/>} />
                <Route path="/contact" element={<Home/>} />
            </Routes>
            <Footer/>
        </div>
    )
}