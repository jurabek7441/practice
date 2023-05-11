import { Banner } from "./Banner"
import { Bestseller } from "./Bestseller"
import { FeaturedProducts } from "./FeaturedProducts"
import { Header } from "./Header"
import { LatestNews } from "./LatestNews"
import { SearchInut } from "./SearchInput"
import { WhyUs } from "./WhyUs"


export let Home = ({state})=>{
    return(
        <div className="home">
            <Header/>
            <Bestseller state={state}/>
            <Banner/>
            <WhyUs/>
            <LatestNews/>
            <FeaturedProducts/>
            <SearchInut/>
        </div>
    )
}