import React, { useState } from "react";
import Nike from "./photo/nike.png"
import Figma from "./photo/figma.png"
import Kronos from "./photo/kronos.png"
import Bestseller1 from "./photo/bestseller1.png"
import Bestseller2 from "./photo/bestseller2.png"
import Bestseller3 from "./photo/bestseller3.png"
import Bestseller4 from "./photo/bestseller4.png"
import Bestseller5 from "./photo/bestseller5.png"
import Bestseller6 from "./photo/bestseller6.png"
import Bestseller7 from "./photo/bestseller7.png"
import Photo1 from "./photo/discount1.png"
import Photo2 from "./photo/discount2.png"
import Photo3 from "./photo/discount3.png"
import Vector from "./photo/vector.png"
import Shipping from "./photo/shipping.png"
import Refund from "./photo/refund.png"
import Support from "./photo/support.png"
import { useNavigate } from "react-router-dom";
// import { useNavigate } from "react-router-dom";

export const DataContext = React.createContext();

export default function ContextProvider({ children }) {
    // latest News
    let [latestNewsData, setLatestNewsData] = useState([
        {
            id: 1,
            name: "Fashion Industry",
            photo: Nike,
            date: "01 Jan, 2015",
            info: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        },
        {
            id: 2,
            name: "Best Design Tools",
            photo: Figma,
            date: "01 Jan, 2015",
            info: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        },
        {
            id: 3,
            name: "HR Community",
            photo: Kronos,
            date: "01 Jan, 2015",
            info: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        },

    ]);
    // best seller
    let [allData, setAllData] = useState([
        {
            id: 1,
            photo: Bestseller1,
            name: "Air Force",
            rating: 4,
            price: 534.33,
            discount: 24,
            category: "belt",
            like: false,
            cart: false,
            count: 0,
            type: "bestseller",
        },
        {
            id: 2,
            photo: Bestseller2,
            name: "Air Jordan",
            rating: 4,
            price: 534.33,
            discount: 24,
            category: "bags",
            like: false,
            cart: false,
            count: 0,
            type: "bestseller",
        },
        {
            id: 3,
            photo: Bestseller3,
            name: "Nike Air Max",
            rating: 4,
            price: 534.33,
            discount: 24,
            category: "bags",
            like: false,
            cart: false,
            count: 0,
            type: "bestseller",
        },
        {
            id: 4,
            photo: Bestseller4,
            name: "Nike Air Yeezy",
            rating: 4,
            price: 534.33,
            discount: 24,
            category: "sneakers",
            like: false,
            cart: false,
            count: 0,
            type: "bestseller",
        },
        {
            id: 5,
            photo: Bestseller5,
            name: "Chuck Taylor All-Stars",
            rating: 4,
            price: 534.33,
            discount: 24,
            category: "belt",
            like: false,
            cart: false,
            count: 0,
            type: "bestseller",
        },
        {
            id: 6,
            photo: Bestseller6,
            name: "Converse (lifestyle wear)",
            rating: 4,
            price: 534.33,
            discount: 24,
            category: "sunglasses",
            like: false,
            cart: false,
            count: 0,
            type: "bestseller",
        },
        {
            id: 7,
            photo: Bestseller7,
            name: "Nike Free",
            rating: 4,
            price: 534.33,
            discount: 24,
            category: "sunglasses",
            like: false,
            cart: false,
            count: 0,
            type: "bestseller",
        },
        {
            id: 8,
            photo: Bestseller4,
            name: "Jumpman ",
            rating: 4,
            price: 534.33,
            discount: 24,
            category: "sneakers",
            like: false,
            cart: false,
            count: 0,
            type: "bestseller",
        },
        {
            id: 11,
            photo: Bestseller1,
            name: "Nike Mercurial Vapor",
            rating: 4,
            price: 534.33,
            discount: 24,
            category: "belt",
            like: false,
            cart: false,
            count: 0,
            type: "productList",
        },
        {
            id: 12,
            photo: Bestseller2,
            name: "Nike Air Max 97",
            rating: 4,
            price: 534.33,
            discount: 24,
            category: "bags",
            like: false,
            cart: false,
            count: 0,
            type: "productList",
        },
        {
            id: 13,
            photo: Bestseller3,
            name: "Nike Blazers",
            rating: 4,
            price: 534.33,
            discount: 24,
            category: "bags",
            like: false,
            cart: false,
            count: 0,
            type: "productList",
        },
        {
            id: 14,
            photo: Bestseller4,
            name: "NikeID",
            rating: 4,
            price: 534.33,
            discount: 24,
            category: "sneakers",
            like: false,
            cart: false,
            count: 0,
            type: "productList",
        },
        {
            id: 15,
            photo: Bestseller5,
            name: "Nike CTR360 Maestri",
            rating: 4,
            price: 534.33,
            discount: 24,
            category: "belt",
            like: false,
            cart: false,
            count: 0,
            type: "productList",
        },
        {
            id: 16,
            photo: Bestseller6,
            name: "Nike Grind",
            rating: 4,
            price: 534.33,
            discount: 24,
            category: "sunglasses",
            like: false,
            cart: false,
            count: 0,
            type: "productList",
        },
        {
            id: 17,
            photo: Bestseller7,
            name: "Nike Hypervenom",
            rating: 4,
            price: 534.33,
            discount: 24,
            category: "sunglasses",
            like: false,
            cart: false,
            count: 0,
            type: "productList",
        },
        {
            id: 18,
            photo: Bestseller4,
            name: "Nike Ordem",
            rating: 4,
            price: 534.33,
            discount: 24,
            category: "sneakers",
            like: false,
            cart: false,
            count: 0,
            type: "productList",
        },
        {
            id: 19,
            photo: Bestseller2,
            name: "Nike Shox",
            rating: 4,
            price: 534.33,
            discount: 24,
            category: "bags",
            like: false,
            cart: false,
            count: 0,
            type: "productList",
        },
    ]);



    // megamenu category items
    let menuCategory1 = [
        "Coporate Shoes",
        "Coporate Shoes",
        "Sneakers",
        "Sneakers",
        "Sandals",
        "Sandals",
        "Sport Shoe",
        "Sport Shoe",
        "Trainers",
        "Trainers",
    ];
    let menuCategory2 = [
        "HOT DEAL",
        "HOT DEAL",
        "Sunglasses",
        "Sunglasses",
        "Belts",
        "Belts",
        "Handbags  Shoe",
        "Handbags  Shoe",
        "Sneakers",
        "Sneakers",
    ];
    let menuCategory3 = [
        "Coporate Shoes",
        "Sneakers",
        "Sandals",
        "Sport Shoe",
        "Trainers",
    ];
    // hotDeals btn
    let hotDealsBtn = [
        {
            id: 1,
            name: "Nike",
            count: 2,
        },
        {
            id: 2,
            name: "Airmax",
            count: 48,
        },
        {
            id: 3,
            name: "Nike",
            count: 14,
        },
        {
            id: 4,
            name: "Adidas",
            count: 15,
        },
        {
            id: 5,
            name: "Vans",
            count: 23,
        },
        {
            id: 6,
            name: "All Stars",
            count: 1,
        },
        {
            id: 7,
            name: "Adidas",
            count: 95,
        },
    ];
    // Color Btn
    let colorBtn = [
        "blue",
        "red",
        "black",
        "yellow",
        "pink",
        "gray",
    ];
    // brandBtn
    let brandBtn = [
        {
            id: 1,
            name: "Nike",
            count: 99
        },
        {
            id: 2,
            name: "Nike",
            count: 99
        },
        {
            id: 3,
            name: "Adidas",
            count: 99
        },
        {
            id: 4,
            name: "Siemens",
            count: 99
        },
    ];


    // bestseller Catgory
    let bestsellerCategoryBtn = [
        "", "bags", "sneakers", "belt", "sunglasses",
    ]
    let [categoryState, setCategoryState] = useState('');
    // discount
    let discountData = [
        {
            id: 1,
            name: "FS - QUILTED MAXI CROSS BAG",
            photo: Photo1,
            price: 534.33,
            discount: 24,
        },
        {
            id: 2,
            name: "FS - Nike Air Max 270 React...",
            photo: Photo2,
            price: 534.33,
            discount: 24,
        },
        {
            id: 3,
            name: "FS - Nike Air Max 270 React...",
            photo: Photo3,
            price: 534.33,
            discount: 24,
        },
    ];
    // featured Products Data
    let featuredProductsData = [
        {
            id: 1,
            name: "Blue Swade Nike Sneakers",
            photo: Vector,
            price: 599,
            discount: 100,
            rating: 4,
        },
        {
            id: 2,
            name: "Blue Swade Nike Sneakers",
            photo: Vector,
            price: 599,
            discount: 100,
            rating: 4,
        },
        {
            id: 3,
            name: "Blue Swade Nike Sneakers",
            photo: Vector,
            price: 599,
            discount: 100,
            rating: 4,
        },

    ];
    // slider settings
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    // why Us
    let whyUsData = [
        {
            id: 1,
            name: "FREE SHIPPING",
            info: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            photo: Shipping,
        },
        {
            id: 2,
            name: "100% REFUND",
            info: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            photo: Refund,
        },
        {
            id: 3,
            name: "SUPPORT 24/7",
            info: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            photo: Support,
        },
    ];
    // portal func
    let portalMap = useNavigate();
    // likeFunc

    let likeFunc = (item) => {
        setAllData(
            allData.map((element) =>
                element.id === item.id ? { ...element, like: !element.like } : element)
        );
    }

    // add to cart

    let addCartFunc = (item) => {
        setAllData(
            allData.map((element) =>
                element.id === item.id ? { ...element, cart: !element.cart } : element)

        );
    }

    // plusFunc

    let plusFunc = (item) => {
        setAllData(
            allData.map((obj) =>
                obj.id === item.id && obj.count < 10
                    ? { ...obj, count: obj.count + 1 }
                    : obj
            )
        );
    };
    // minus Func
    let minusFunc = (item) => {
        if (item.count > 0) {
            setAllData(
                allData.map((obj) =>
                    obj.id === item.id ? { ...obj, count: obj.count - 1 } : obj
                )
            )
        } else {
            alert("error");
        }
    };
    // hamburger
    let [burgerBollean, setBurgerBollean] = useState(true);
    let sideBarFunc = () => {
        setBurgerBollean(!burgerBollean)
    }
    // filter
    let [filterBollean, setFilterBollean] = useState(true);
    let filterFunc = () => {
        setFilterBollean(!filterBollean)
    }
    return (
        <DataContext.Provider
            value={{
                latestNewsData,
                allData,
                bestsellerCategoryBtn,
                categoryState,
                setCategoryState,
                discountData,
                featuredProductsData,
                settings,
                whyUsData,
                likeFunc,
                addCartFunc,
                plusFunc,
                minusFunc,
                portalMap,
                setLatestNewsData,
                menuCategory1,
                menuCategory2,
                menuCategory3,
                hotDealsBtn,
                brandBtn,
                colorBtn,
                burgerBollean,
                sideBarFunc,
                filterFunc,
                filterBollean,
                setFilterBollean,
            }}
        >
            {children}
        </DataContext.Provider>
    );
}
