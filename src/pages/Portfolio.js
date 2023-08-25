// Library
import { useState } from "react";

// Components
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import PortfolioItem from "../components/PortfolioItem";
import FilterPortfolio from "../components/FilterPortfolio";

import { itemData } from "../utils/global";

export default function Portfolio() {

    const [data, updateData] = useState(itemData);

    return(
        <div className="Main">
            <Navigation />
            <div className="Content">
                <FilterPortfolio data={data} updateData={updateData}/>
                <div className="Item-Container">
                    {
                        data.sort((a, b) => b.year - a.year).map(d => {
                            return <PortfolioItem d={d} key={d.title}/>
                        })
                    }
                </div>
            </div>
            <Footer />
        </div>
    )
}
