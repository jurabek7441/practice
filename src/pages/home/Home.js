import { Bestseller } from "./Bestseller"
import { Header } from "./Header"


export let Home = ()=>{
    return(
        <div className="home">
            <Header/>
            <Bestseller/>
        </div>
    )
}