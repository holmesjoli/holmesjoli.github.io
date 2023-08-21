// Components
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import PortfolioItem from "../components/PortfolioItem";
import FilterPortfolio from "../components/FilterPortfolio";

import { itemData } from "../utils/global";

export default function Portfolio() {

    return(
        <div className="Main">
            <Navigation />
            <div className="Content">
                <FilterPortfolio/>
                <div className="Item-Container">
                    {
                        itemData.sort((a, b) => b.year - a.year).map(d => {
                            return <PortfolioItem d={d}/>
                        })
                    }
                </div>
            </div>
            <Footer />
        </div>
    )
}
