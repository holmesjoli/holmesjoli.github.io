// Libraries
import { NavLink } from "react-router-dom";

// Components
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import PortfolioItem from "../components/PortfolioItem";

import { itemData } from "../utils/global";

export default function About() {

    return(
        <div className="Content">
            <Navigation />
            {itemData.sort((a, b) => b.year - a.year).map(d => {
                    return <NavLink className="Item-Container" to="/DesignProcess">
                    {
                        itemData.sort((a, b) => b.year - a.year).map(d => {
                            return <PortfolioItem title={d.title} year={d.year} src={d.src} alt={d.alt}/>
                        })
                    }
                    </NavLink>
                })
            }
            <Footer />
        </div>
    )
}
