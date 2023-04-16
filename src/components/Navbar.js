import { BiUser } from "react-icons/bi"
import { CgShoppingCart } from "react-icons/cg"
import { BsSearch } from "react-icons/bs"
import { NavLink } from "react-router-dom"
import Icon from "../photo/icon.png"
import { Megamenu } from "./Megamenu"
export let Navbar = () => {
    return (
        <div className="navbar">
            <div className="navbar_top">
                <div className="lang_currensy">
                    <div className="lang">
                        <p>ENG</p>
                    </div>
                    <div className="currensy">
                        <p>USD</p>
                    </div>
                </div>
                <div className="account_cart_search">
                    <div className="account_item">
                        <i><BiUser /></i>
                        <p>My profile</p>
                    </div>
                    <div className="cart_item">
                        <NavLink to="/cart">
                            <i><CgShoppingCart /></i>
                        </NavLink>
                    </div>
                    <div className="items">
                        <p>Items</p>
                    </div>
                    <div className="price_item">
                        <p>$0.00</p>
                    </div>
                    <div className="search_item">
                        <i><BsSearch /></i>
                    </div>
                </div>
            </div>
            <div className="navbar_bottom">
                <div className="logo">
                    <figure>
                        <img src={Icon} alt="icon" />
                    </figure>
                </div>
                <ul className="menu">
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/bags"><p className="categoryActive">
                        Bags
                        <Megamenu />
                    </p></NavLink>
                    <NavLink to="/sneakers">Sneakers<Megamenu /></NavLink>
                    <NavLink to="/belt">Belt<Megamenu /></NavLink>
                    <NavLink to="/contact">Contact</NavLink>
                </ul>
            </div>

        </div>
    )
}