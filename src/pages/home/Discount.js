import Photo1 from "../../photo/discount1.png"
import Photo2 from "../../photo/discount2.png"
import Photo3 from "../../photo/discount3.png"

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export let Discount = () => {
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
    ]
    useEffect(() => {
        AOS.init();
      }, []);
    return (
        <div className="discount">
            {
                discountData.map((item, index) => (
                    <figure className="discount_card"
                        data-aos="fade-down"
                        data-aos-easing="linear"
                        data-aos-duration="1500"
                        key={index}>
                        <h3>{item.name}</h3>

                        <img src={item.photo} alt={item.name} />

                        <del>${item.price}</del>
                        <h4>
                            {item.discount}% off
                        </h4>
                        <h2>
                            ${(item.price - ((item.price / 100) * item.discount)).toFixed(2)}
                        </h2>
                    </figure>
                ))
            }
        </div>
    )
}