// Libraries
import { NavLink } from "react-router-dom";

// Portfolio Item
export function PortfolioItem({d}) {

    return(
        <NavLink className="Portfolio-Item" to={"/portfolio/"+d.page}>
            {d.iiba.filter(e => e.year === 2023 && e.longlist).length > 0 ? <img className="IIB-Award" src={ "/assets/awards/2023IIBA/2023 IIB Awards Badge Longlist (dark).png"}/>: <></>}
            <h2 className="Item-Title No-Hover">{d.title}</h2>
            <h3 className="Item-Year">{d.year}</h3>
            <img className="Item-Image" src={ "/assets/portfolio/" + d.page + "/" + d.mainImage.url} alt={d.mainImage.alt} />
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
