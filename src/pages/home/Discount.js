

import AOS from "aos";
import "aos/dist/aos.css";
import { useContext, useEffect } from "react";
import { DataContext } from "../../Context";

export let Discount = () => {
    const { discountData}= useContext(DataContext);
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