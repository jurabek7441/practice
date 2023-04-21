import { BiUser } from "react-icons/bi"
import { CgShoppingCart } from "react-icons/cg"
import { BsSearch } from "react-icons/bs"
import { NavLink } from "react-router-dom"
import Icon from "../photo/icon.png"
import { Megamenu } from "./Megamenu"
import { useContext } from "react"
import { DataContext } from "../Context"
export let Navbar = () => {
    let { allData,
        burgerBollean,
        sideBarFunc,
    } = useContext(DataContext);

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
                            <span>
                                {
                                    allData.filter((item) => item.cart === true && item.count > 0)
                                        .length
                                }
                            </span>
                        </NavLink>
                    </div>
                    <div className="items">
                        <p>Items</p>
                    </div>
                    <div className="price_item">
                        <p>${
                            allData.filter((item) => item.cart === true)
                                .reduce(
                                    (a, b) =>
                                        a + (b.price - (b.price / 100) * b.discount) * b.count,
                                    0
                                )
                                .toFixed(2)
                        }
                        </p>
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
                <ul className={burgerBollean ? "menu close" : "menu"}>
                    <NavLink to="/"
                        onClick={sideBarFunc}
                    >
                        Home
                    </NavLink>
                    <NavLink to="/bags"
                        onClick={sideBarFunc}
                    >
                        <p className="categoryActive">
                            Bags
                            <Megamenu />
                        </p>
                    </NavLink>
                    <NavLink to="/sneakers"
                        onClick={sideBarFunc}
                    >
                        Sneakers
                        <Megamenu />
                    </NavLink>
                    <NavLink to="/belt"
                        onClick={sideBarFunc}
                    >
                        Belt
                        <Megamenu />
                    </NavLink>
                    <NavLink to="/contact"
                        onClick={sideBarFunc}
                    >
                        Contact
                    </NavLink>
                </ul>
                <div className="hamburger"
                    onClick={sideBarFunc}
                >
                    <span className={burgerBollean ? "uncliced" : "clicked"}></span>
                    <span className={burgerBollean ? "uncliced" : "clicked"}></span>
                    <span className={burgerBollean ? "uncliced" : "clicked"}></span>
                </div>
            </div>

        </div>
    )
}