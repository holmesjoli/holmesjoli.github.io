// Libraries
import { NavLink } from "react-router-dom";

// Portfolio Item
export function PortfolioItem({d}) {
    return(
        <NavLink className="Portfolio-Item" to={"/portfolio/"+d.page}>
            <h2 className="Item-Title">{d.title}</h2>
            <h3 className="Item-Year">{d.year}</h3>
            <img className="Item-Image" src={d.src} alt={d.alt} />
            <div className="Tag-Container">
                {
                    d.tags.map(t => {
                        return <div className="Tag" key={t}>{t}</div>
                    })
                }
            </div>
        </NavLink>
    )
}

export function PortfolioItemShowcase({d}) {
    return(
        <NavLink className="Slide" key={d.page} to={"/portfolio/"+d.page}>
            <h2 className="Item-Title">{d.title}</h2>
            <h3 className="Item-Year">{d.year}</h3>
            <img className="Item-Image" src={d.src} alt={d.alt} />
        </NavLink>
    )
}
