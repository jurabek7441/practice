
import { useContext } from "react"
import { DataContext } from "../../Context"


export let WhyUs = () => {
    let {whyUsData}=useContext(DataContext);
    return (
        <div className="whyUs">
            {
                whyUsData.map((item, index) => (
                    <div className="whyUs_card"
                        key={index}>
                        <figure>
                            <img src={item.photo} alt={item.name} />
                        </figure>
                        <h3>{item.name}</h3>
                        <p>{item.info}</p>
                    </div>
                ))
            }
        </div>
    )
}