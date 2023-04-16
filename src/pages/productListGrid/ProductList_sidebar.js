import { useContext } from "react"
import { DataContext } from "../../Context"
import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

function valuetext(value) {
    return `$${value}`;
}


export let ProductListSidebar = () => {

    const [value, setValue] = React.useState([20, 37]);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    let {
        hotDealsBtn,
        colorBtn,
        brandBtn
    } = useContext(DataContext);
    return (
        <div className="productList_sidebar">
            <div className="hotDeals">
                <h5>Hot Deals</h5>
                <div className="hotDeals_list">
                    {
                        hotDealsBtn.map((item) => (
                            <div className="hotDeals_item"
                                key={item.id}
                            >
                                <p>
                                    {item.name}
                                </p>
                                <span>
                                    {item.count}
                                </span>
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className="prices">
                <h5>Prices</h5>
                <div className="pricesRanger">
                    <p>Ranger:</p>
                    <p>${(value[0]).toFixed(2)} - ${(value[1]).toFixed(2)} </p>
                </div>
                <Box sx={{ width: 250 }}>
                    <Slider
                        getAriaLabel={() => 'Temperature range'}
                        value={value}
                        onChange={handleChange}
                        valueLabelDisplay="auto"
                        getAriaValueText={valuetext}
                    />
                </Box>
            </div>
            <div className="color">
                <h5>Color</h5>
                <div className="color_list">
                    {
                        colorBtn.map((item, index)=>(
                            <div
                            key={index}
                            style={{
                                backgroundColor: item,
                                padding: "10px",
                            }}
                            className="color_item"
                            ></div>
                        ))
                    }
                </div>
            </div>
            <div className="brand">
                <h5>Brand</h5>
                <div className="brand_list">
                    {
                        brandBtn.map((item)=>(
                            <div className="brand_item"
                            key={item.id}
                            >
                                <p>{item.name}</p>
                                <span>{item.count}</span>
                            </div>
                        ))
                    }
                </div>
            </div>

        </div>
    )
}