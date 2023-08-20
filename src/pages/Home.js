import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import PortfolioItem from "../components/PortfolioItem";

import { itemData } from "../utils/global";

export default function Home() {

    return(
        <div className="Content">
            <Navigation />
            <div className="Item-Container">
                {
                    itemData.map(d => {
                        return <PortfolioItem d={d}/>
                    })[0]
                }
            </div>
            <Footer />
        </div>
    )
}
