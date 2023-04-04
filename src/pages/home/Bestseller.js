import { useState } from "react"
import Bestseller1 from "../../photo/bestseller1.png"
import Bestseller2 from "../../photo/bestseller2.png"
import Bestseller3 from "../../photo/bestseller3.png"
import Bestseller4 from "../../photo/bestseller4.png"
import Bestseller5 from "../../photo/bestseller5.png"
import Bestseller6 from "../../photo/bestseller6.png"
import Bestseller7 from "../../photo/bestseller7.png"
import * as React from 'react';



export let Bestseller = () => {

    let BestsellerData = [
        {
            id: 1,
            photo: Bestseller1,
            name: "Nike Air Max 270 React",
            rating: 4,
            price: 534.33,
            discount: 24,
            category: "belt",
        },
        {
            id: 2,
            photo: Bestseller2,
            name: "Nike Air Max 270 React",
            rating: 4,
            price: 534.33,
            discount: 24,
            category: "bags",
        },
        {
            id: 3,
            photo: Bestseller3,
            name: "Nike Air Max 270 React",
            rating: 4,
            price: 534.33,
            discount: 24,
            category: "bags",
        },
        {
            id: 4,
            photo: Bestseller4,
            name: "Nike Air Max 270 React",
            rating: 4,
            price: 534.33,
            discount: 24,
            category: "sneakers",
        },
        {
            id: 5,
            photo: Bestseller5,
            name: "Nike Air Max 270 React",
            rating: 4,
            price: 534.33,
            discount: 24,
            category: "belt",
        },
        {
            id: 6,
            photo: Bestseller6,
            name: "Nike Air Max 270 React",
            rating: 4,
            price: 534.33,
            discount: 24,
            category: "sunglasses",
        },
        {
            id: 7,
            photo: Bestseller7,
            name: "Nike Air Max 270 React",
            rating: 4,
            price: 534.33,
            discount: 24,
            category: "sunglasses",
        },
        {
            id: 8,
            photo: Bestseller4,
            name: "Nike Air Max 270 React",
            rating: 4,
            price: 534.33,
            discount: 24,
            category: "sneakers",
        },
    ]

    let BestsellerCategoryBtn = [
        "", "bags", "sneakers", "belt", "sunglasses",
    ]
    let [categoryState, setCategoryState] = useState('');
    return (
        <div className="bestseller">
            <h1>BEST SELLER</h1>
            <div className="bestseller_categoryItem">
                {BestsellerCategoryBtn.map((btn, index) => (
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
                    BestsellerData.length > 0 &&
                        BestsellerData.filter(
                            (item) =>
                                item.category.toLocaleLowerCase().includes(categoryState.toLocaleLowerCase())
                        ).length > 0 ? (
                        BestsellerData
                            .filter(
                                (item) =>
                                    item.category
                                        .toLocaleLowerCase()
                                        .includes(categoryState.toLocaleLowerCase())
                            ).map((item, index) => (
                                <div className="bestseller_card"

                                    key={index}>
                                    <figure>
                                        <img src={item.photo} alt={item.name} />
                                    </figure>
                                    <h3>{item.name}</h3>
                                    <div className="rating">
                                        <Stack spacing={1}>
                                            
                                            <Rating name="size-medium" defaultValue={4} />
                                            
                                        </Stack>
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