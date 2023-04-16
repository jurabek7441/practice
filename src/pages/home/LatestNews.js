
import { useContext } from "react"
import { DataContext } from "../../Context"

export let LatestNews = () => {
   const {
    latestNewsData,
   } = useContext(DataContext);
   
    return (
        <div className="latestNews">
            <h1>LATEST NEWS</h1>
            <div className="latestNews_content">
                {
                    latestNewsData.map((item, index)=>(
                        <div className="latestNewsCard"
                        key={index}
                        >
                            <figure>
                                <img src={item.photo} alt={item.name} />
                            </figure>
                            <div className="latestNewsCard_content">
                                <i>{item.date}</i>
                                <h5>{item.name}</h5>
                                <p>{item.info}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}