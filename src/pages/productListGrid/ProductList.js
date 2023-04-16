import { Banner } from "../home/Banner"

import { ProductListContent } from "./ProductListContent"
import { ProductListSidebar } from "./ProductList_sidebar"



export let ProductList = () => {
    return (
        <div className="productList">
            <div className="path">
                <p>Home</p>
                /
                <p>Hot Deal</p>
            </div>
            <div className="productList_bottom">
                <ProductListSidebar/>
                <div className="productList_content">
                    <Banner/>
                    <ProductListContent/>
                </div>
            </div>
        </div>
    )
}