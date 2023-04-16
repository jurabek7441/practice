import BannerPhoto from "../../photo/banner_photo.png"
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export let Banner = () => {
    useEffect(() => {
        AOS.init();
      }, []);
    return (
        <div className="banner">
            <div className="banner_left">
                <h2>Adidas Men Running
                    Sneakers</h2>
                <p>
                    Performance and design. Taken right to the edge.
                </p>
                <button>
                    SHOP NOW
                </button>
            </div>
            <div className="banner_right">
                <figure
                data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="1500"
                >
                    <img src={BannerPhoto} alt="" />
                </figure>
            </div>
        </div>
    )
}