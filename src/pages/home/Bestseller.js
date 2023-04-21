import { useContext } from "react"

import { TbShoppingCartPlus } from "react-icons/tb"
import { TbShoppingCartX } from "react-icons/tb"
import { HiOutlineHeart } from "react-icons/hi"
// import { Rating, Stack } from "@mui/material"

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { DataContext } from "../../Context"
import { FcLike } from "react-icons/fc"
import { Rating, Stack } from "@mui/material";

export let Bestseller = () => {

    const {
        allData,
        bestsellerCategoryBtn,
        setCategoryState,
        categoryState,
        likeFunc,
        addCartFunc,
    } = useContext(DataContext);


    useEffect(() => {
        AOS.init();
    }, []);
    return (
        <div className="bestseller">
            <h1>BEST SELLER</h1>
            <div className="bestseller_categoryItem">
                {bestsellerCategoryBtn.map((btn, index) => (
                    <p
                        key={index}
                        onClick={() => {
                            setCategoryState(btn);
                        }}
                    >
                        {btn === "" ? "All" : btn}
                    </p>
                ))}
            </div>
            <div className="bestseller_content">
                {
                    allData.length > 0 &&
                        allData.filter(
                            (item) =>
                                item.category.toLocaleLowerCase().includes(categoryState.toLocaleLowerCase())
                        ).length > 0 ? (
                        allData
                            .filter(
                                (item) =>
                                    item.category
                                        .toLocaleLowerCase()
                                        .includes(categoryState.toLocaleLowerCase())
                            ).filter((item) => item.type === "bestseller")
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
                                                    {item.like ? <FcLike /> : <HiOutlineHeart />}

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
            <p>LOAD MORE</p>
        </div>
    )
}