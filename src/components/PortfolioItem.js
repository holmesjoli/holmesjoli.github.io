// Libraries
import { NavLink } from "react-router-dom";

// Portfolio Item
export default function PortfolioItem({d}) {
    return(
        <NavLink className="Portfolio-Item" key={d.title} to={"/portfolio/"+d.page}>
            <h2 className="Item-Title">{d.title}</h2>
            <h3 className="Item-Year">{d.year}</h3>
            <img className="Item-Image" src={d.src} alt={d.alt} />
            <div className="Tag-Container">
                {
                    d.tags.map(t => {
                        return <span className="Tag">{t}</span>
                    })
                }
            </div>
        </NavLink>
    )
}
