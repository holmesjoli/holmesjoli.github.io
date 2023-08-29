// Library
import { useEffect, useState } from "react";

// Components
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { PortfolioItem } from "../components/PortfolioItem";
import FilterPortfolio from "../components/FilterPortfolio";

import { itemData, toolFilters, designFilters } from "../utils/global";


function filterData(selected, d) {
    let tagInSelected = false;

    for (let o of d.tags) {
        if (selected.includes(o)) {
            tagInSelected = true;
        }
    }

    if (tagInSelected) {
        return d;
    }
}

export default function Portfolio() {

    const [data, updateData] = useState(itemData);

    const [selectedTools, updateSelectedTools] = useState([]);
    const [selectedDesign, updateSelectedDesign] = useState([]);

    useEffect(() => {

        let dataNew = itemData.filter(d => {

            if (selectedTools.length === 0 && selectedDesign.length === 0) {
                return d;
            } else {

                let selectedToolsInList = [];

                for (let o of selectedTools) {
                    if (d.tags.includes(o)) {
                        selectedToolsInList.push(true)
                    } else {
                        selectedToolsInList.push(false)
                    }
                }
 
                if (selectedToolsInList.every(v => v === true)) {
                    return d;
                }
            }
        });

        updateData(dataNew);

    }, [selectedDesign, selectedTools])

    return(
        <div className="Main">
            <Navigation />
            <div className="Content">
                <div>
                    <FilterPortfolio title={"tools"} filters={toolFilters} updateSelectedValues={updateSelectedTools} selectedValues={selectedTools}/>
                    <FilterPortfolio title={"design"} filters={designFilters} updateSelectedValues={updateSelectedDesign} selectedValues={selectedDesign}/>
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
