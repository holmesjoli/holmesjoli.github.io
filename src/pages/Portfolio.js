// Library
import { useEffect, useState } from "react";

// Components
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { PortfolioItem } from "../components/PortfolioItem";
import FilterPortfolio from "../components/FilterPortfolio";

import { itemData, filters } from "../utils/global";

export default function Portfolio() {

    const [data, updateData] = useState(itemData);

    const [selectedValues, updateSelectedValues] = useState(filters);

    useEffect(() => {

        let dataNew = itemData.filter(d => {
            let tagInSelected = false;

            for (let o of d.tags) {
                if (selectedValues.includes(o)) {
                    tagInSelected = true;
                }
            }

            if (tagInSelected) {
                return d;
            }
        });

        updateData(dataNew);

    }, [selectedValues])

    return(
        <div className="Main">
            <Navigation />
            <div className="Content">
                <FilterPortfolio updateSelectedValues={updateSelectedValues} selectedValues={selectedValues}/>
                <div className="Item-Container">
                    {
                        data.sort((a, b) => b.year - a.year).map(d => {
                            return <PortfolioItem d={d} key={d.title}/>
                        })
                    }
                </div>
            </div>
            {/* <Footer /> */}
        </div>
    )
}
