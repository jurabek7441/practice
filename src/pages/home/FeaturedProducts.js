import { useContext } from "react";
import { DataContext } from "../../Context";
import { Rating, Stack } from "@mui/material";


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
                                <Stack spacing={1}>
                                    <Rating name="half-rating" defaultValue={item.rating} precision={0.5} />
                                </Stack>
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