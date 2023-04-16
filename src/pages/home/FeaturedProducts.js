import { useContext } from "react";
import { DataContext } from "../../Context";


export let FeaturedProducts = () => {

    const { featuredProductsData } = useContext(DataContext);
    return (
        <div className="featuredProducts">
            <h1>FEATURED PRODUCTS</h1>
            <div className="featuredProducts_content">
                {
                    featuredProductsData.map((item, index) => (
                        <div className="featuredProductsCard"
                            key={index}
                        >
                            <figure>
                                <img src={item.photo} alt={item.name} />
                            </figure>
                            <div className="featuredProductsCard_content">
                                <p>{item.name}</p>
                                <i>{item.rating}</i>
                                <div className="card_price">
                                    <h5>${item.price - item.discount}</h5>
                                    <del>${item.price}</del>
                                </div>
                            </div>

                        </div>
                    ))
                }
            </div>
        </div>
    )
}