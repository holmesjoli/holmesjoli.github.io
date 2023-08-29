// Library
import { useEffect, useState } from "react";

// Components
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { PortfolioItem } from "../components/PortfolioItem";
import FilterPortfolio from "../components/FilterPortfolio";

import { itemData, mediumFilters, toolFilters, designFilters } from "../utils/global";

export default function Portfolio() {

    const [data, updateData] = useState(itemData);

    const [selectedTools, updateSelectedTools] = useState(toolFilters);
    const [selectedMedium, updateSelectedMedium] = useState(mediumFilters);
    const [selectedDesign, updateSelectedDesign] = useState(designFilters);

    useEffect(() => {

        // let dataNew = itemData.filter(d => {
        //     let tagInSelected = true;

        //     for (let o of d.tags) {
        //         if (!selectedValues.includes(o)) {
        //             tagInSelected = false;
        //         }
        //     }

        //     if (tagInSelected) {
        //         return d;
        //     }
        // });

        // updateData(dataNew);

    }, [selectedDesign, selectedMedium, selectedTools])

    return(
        <div className="Main">
            <Navigation />
            <div className="Content">
                <div>
                    <FilterPortfolio title={"tools"} filters={toolFilters} updateSelectedValues={updateSelectedTools} selectedValues={selectedTools}/>
                    <FilterPortfolio title={"design"} filters={designFilters} updateSelectedValues={updateSelectedDesign} selectedValues={selectedDesign}/>
                    <FilterPortfolio title={"medium"} filters={mediumFilters} updateSelectedValues={updateSelectedMedium} selectedValues={selectedMedium}/>
                </div>
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
