import { useContext } from "react"
// import { useNavigate } from "react-router-dom";
import { DataContext } from "../Context"
import { NavLink } from "react-router-dom";



export let Megamenu = () => {
    let {
        menuCategory1,
        menuCategory2,
        menuCategory3,
        portalMap,
    }=useContext(DataContext);
    // let toProductList = useNavigate();
    return (
        <div className="megamenu">

            <div className="part">
                <div className="partHead">
                    <h5>Category</h5>
                </div>
                <div className="partContent">
                    {
                    menuCategory1.map((btn, index)=>(
                        <NavLink
                        to="/product_list"
                        key={index}
                        >{btn}</NavLink>
                    ))
                    }

                </div>
            </div>
            <div className="part">
                <div className="partHead">
                    <h5>Category</h5>
                </div>
                <div className="partContent">
                {
                    menuCategory2.map((btn, index)=>(
                        <NavLink
                        to="/product_list"
                        key={index}
                        >{btn}</NavLink>
                    ))
                    }
                </div>

            </div>
            <div className="part">
                <div className="partHead">
                    <h5>Category</h5>
                </div>
                <div className="partContent">
                {
                    menuCategory3.map((btn, index)=>(
                        <NavLink
                        to="/product_list"
                        key={index}
                        onClick={() => portalMap("/cart")}
                        >{btn}</NavLink>
                    ))
                    }

                </div>
            </div>
        </div>
    )
}