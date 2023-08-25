import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { PortfolioItemShowcase } from "../components/PortfolioItem";

import { itemData } from "../utils/global";

export default function Home() {

    return(
        <div className="Main">
            <Navigation />
            <div className="Portfolio-Item-Showcase-Container">
                {
                    itemData.sort((a, b) => b.year - a.year).map(d => {
                        return <PortfolioItemShowcase d={d}/>
                    })[0]
                }
            </div>
            <Footer />
        </div>
    )
}
