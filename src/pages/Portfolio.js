// Components
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import PortfolioItem from "../components/PortfolioItem";

import { itemData } from "../utils/global";

export default function About() {

    return(
        <div className="Content">
            <Navigation />
            <div className="Item-Container"></div>
            <div className="Item-Container">
                {
                    itemData.map(d => {
                        return <PortfolioItem d={d}/>
                    })
                }
            </div>
            <Footer />
        </div>
    )
}
