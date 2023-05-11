import { BiUser } from "react-icons/bi"
import { BsHeartFill } from "react-icons/bs"
import { CgShoppingCart } from "react-icons/cg"
import { BsSearch } from "react-icons/bs"
import { NavLink } from "react-router-dom"
import Icon from "../photo/icon.png"
import { Megamenu } from "./Megamenu"
import { useContext } from "react"
import { DataContext } from "../Context"
import * as React from 'react';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Usa from "../photo/usa.png"
import Eng from "../photo/eng.png"


export let Navbar = ({ changeInput }) => {
    let { allData,
        burgerBollean,
        sideBarFunc,
    } = useContext(DataContext);

    return (
        <div className="navbar">
            <div className="navbar_top">
                <div className="lang_currensy">
                    <figure className="eng_lang">
                        <img src={Eng} alt="eng" />
                    </figure>
                    <figure className="usa_lang">
                        <img src={Usa} alt="usa" />
                    </figure>
                </div>
                <div className="account_cart_search">
                    <div className="account_item">
                        <i><BiUser /></i>
                    </div>
                    <div className="cart_item">
                        <NavLink to="/cart">
                            <i><CgShoppingCart /></i>
                            <span>
                                {
                                    allData.filter((item) => item.cart === true)
                                        .length
                                }
                            </span>
                        </NavLink>
                    </div>
                    <div className="like_item">
                        <NavLink to="/like"
                        >
                            <i><BsHeartFill /></i>
                            <span>
                                {allData.filter((item) => item.like === true)
                                    .length
                                }
                            </span>
                        </NavLink>

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
                        <i></i>
                        <Stack spacing={2} sx={{ width: 300 }}>
                            <TextField
                                onChange={changeInput}
                                label={<BsSearch />}
                                InputProps={{
                                    type: 'search',
                                }}
                            />
                        </Stack>
                    </div>
                </div>
            </div>
            <div className="navbar_bottom">
                <div className="logo">
                    <figure>
                        <img src={Icon} alt="icon" />
                    </figure>
                </div>
                <div className={burgerBollean ? "menu close" : "menu"}>
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
                </div>
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