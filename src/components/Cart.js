import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { DataContext } from '../Context';
import { CiCircleRemove } from "react-icons/ci"


export let Cart = () => {

    let {
        allData,
        plusFunc,
        minusFunc,
        addCartFunc,
    } = React.useContext(DataContext);
    return (
        <div className="cart">
            <div className="path">
                <p>Home</p>
                /
                <p>Hot Deal</p>
                /
                <p>Nike Airmax 270 React</p>
            </div>
            <div className="cartContent">
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell align="center">PRODUCT</TableCell>
                                <TableCell align="center">PRICE</TableCell>
                                <TableCell align="left">QTY</TableCell>
                                <TableCell align="center">UNIT PRICE</TableCell>
                            </TableRow>
                        </TableHead>
                        {


                            <TableBody>
                                {allData.filter((item) => item.cart === true)
                                    .map((obj) => (
                                        <TableRow
                                            key={obj.id}
                                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                        >
                                            <div className="remove_item"
                                                onClick={() => addCartFunc(obj)}
                                            >
                                                <CiCircleRemove />
                                            </div>
                                            <TableCell className="cartItem_name"
                                                component="th" scope="row"
                                            >

                                                <figure>
                                                    <img src={obj.photo} alt={obj.name} />
                                                </figure>
                                                {obj.name}
                                            </TableCell>
                                            <TableCell align="center">${(obj.price * obj.count).toFixed(2)}</TableCell>
                                            <TableCell align="center"
                                            >
                                                <div
                                                    className="countItem"
                                                >

                                                    <button className="countPlus"
                                                        onClick={() => plusFunc(obj)}
                                                    >
                                                        +
                                                    </button>
                                                    <span>
                                                        {obj.count}
                                                    </span>
                                                    <button className="countMinus"
                                                        onClick={() => minusFunc(obj)}
                                                    >
                                                        -
                                                    </button>
                                                </div>
                                            </TableCell>
                                            <TableCell align="center">${obj.price}</TableCell>
                                        </TableRow>
                                    ))}
                            </TableBody>

                        }
                    </Table>
                </TableContainer>
                <div className="cartContent_media">
                    {
                        allData.filter((item) => item.cart === true)
                            .map((obj) => (
                                <div className="cartMedia_card"
                                    key={obj.id}
                                >
                                    <div className="remove_item"
                                        onClick={() => addCartFunc(obj)}
                                    >
                                        <CiCircleRemove />
                                    </div>
                                    <figure>
                                        <img src={obj.photo} alt={obj.name} />
                                    </figure>
                                    <div className="cartMedia_cardContent">
                                        <h3>{obj.name}</h3>
                                        <p>${(obj.price * obj.count).toFixed(2)}</p>
                                        <div
                                            className="countItem"
                                        >

                                            <button className="countPlus"
                                                onClick={() => plusFunc(obj)}
                                            >
                                                +
                                            </button>
                                            <span>
                                                {obj.count}
                                            </span>
                                            <button className="countMinus"
                                                onClick={() => minusFunc(obj)}
                                            >
                                                -
                                            </button>
                                        </div>
                                        <p>${obj.price}</p>
                                    </div>
                                </div>
                            ))
                    }
                </div>
            </div>
            <div className="cartCheck">
                <div className="voucherCode">
                    <input type="text" placeholder='Voucher code' id='code' />
                    <label htmlFor='code'
                        typeof='confirm'
                    >Redeem</label>
                </div>
                <div className="checkItem">
                    <div className="subtotal">
                        <p>Subtotal</p>
                        <p>${allData.filter((item) => item.cart === true)
                            .reduce(
                                (a, b) =>
                                    a + b.price * b.count,
                                0
                            )
                            .toFixed(2)}</p>
                    </div>
                    <div className="shippingFree">
                        <p>Shipping Free</p>
                        <p>24%</p>
                    </div>
                    <div className="coun">
                        <p>Coupon</p>
                        <p>no</p>
                    </div>
                    <div className="total">
                        <h3>TOTAL</h3>
                        <h3>$
                            {allData.filter((item) => item.cart === true)
                                .reduce(
                                    (a, b) =>
                                        a + (b.price - (b.price / 100) * b.discount) * b.count,
                                    0
                                )
                                .toFixed(2)}
                        </h3>
                    </div>
                    <button>
                        Check out
                    </button>
                </div>
            </div>
        </div>
    )
}