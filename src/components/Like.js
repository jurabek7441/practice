import { useContext } from "react";
import { DataContext } from "../Context";
import { TbShoppingCartPlus } from "react-icons/tb"
import { TbShoppingCartX } from "react-icons/tb"
import { HiOutlineHeart } from "react-icons/hi"
import { BsTrash} from "react-icons/bs"
import { Rating, Stack } from "@mui/material";


export let Like = ({ state }) => {
    const {
        allData,
        bestsellerCategoryBtn,
        setCategoryState,
        categoryState,
        likeFunc,
        addCartFunc,
    } = useContext(DataContext);
    return (
        <div className="like">
            <div className="bestseller_content">


                {
                    allData.length > 0 &&
                        allData.filter((obj) => {
                            if (state === "") {
                                return obj;
                            } else if (
                                obj.name.toLowerCase().includes(state.toLowerCase().trim()) ||
                                obj.price.toString().includes(state.toLowerCase().trim())
                            ) {
                                return obj;
                            }
                        }).length > 0 ? (
                        allData
                            .filter((obj) => {
                                if (state === "") {
                                    return obj;
                                } else if (
                                    obj.name.toLowerCase().includes(state.toLowerCase().trim()) ||
                                    obj.price.toString().includes(state.toLowerCase().trim())
                                ) {
                                    return obj;
                                }
                            }) && allData.filter((item) => item.like === true)
                            .map((item, index) => (
                                <div className="bestseller_card"
                                    data-aos="flip-left"
                                    data-aos-duration="1000"
                                    key={index}>
                                    <figure>
                                        <img src={item.photo} alt={item.name} />
                                        <div className="card_hover">
                                            <div className="card_like"
                                                onClick={() => likeFunc(item)}
                                            >
                                                <i>
                                                    <BsTrash/>

                                                </i>
                                            </div>
                                            <div className="card_cart"
                                                onClick={() => addCartFunc(item)}
                                            >
                                                <i>
                                                    {item.cart ? <TbShoppingCartX /> : <TbShoppingCartPlus />}
                                                </i>
                                            </div>
                                        </div>
                                    </figure>
                                    <div className="card_content">

                                        <h3>{item.name}</h3>
                                        <div className="rating">
                                            <Stack spacing={1}>
                                                <Rating name="half-rating" defaultValue={item.rating} precision={0.5} />
                                            </Stack>
                                        </div>
                                        <div className="price">
                                            <h5>${(item.price - ((item.price / 100) * item.discount)).toFixed(2)}</h5>
                                            <p>${item.price}</p>
                                            <h6>{item.discount}% off</h6>
                                        </div>
                                    </div>
                                </div>
                            ))
                    ) : (
                        <h2>no data...</h2>
                    )
                }
            </div>
        </div>
    )
}