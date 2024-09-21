// Library
import { useEffect, useState } from "react";
import Button from '@mui/material/Button';

// Components
import { contactMe } from "../utils/global";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { PortfolioItem } from "../components/PortfolioItem";
import FilterPortfolio from "../components/FilterPortfolio";

import { itemData, toolFilters, designFilters, roleFilters } from "../utils/global";

function filterData(selected, d) {
    let selectedInList = [];

    for (let o of selected) {
        if (d.tags.includes(o)) {
            selectedInList.push(true)
        } else {
            selectedInList.push(false)
        }
    }

    if (selectedInList.every(v => v === true)) {
        return d;
    }
}

export default function Portfolio() {

    const [data, updateData] = useState(itemData);

    const [selectedTools, updateSelectedTools] = useState([]);
    const [selectedDesign, updateSelectedDesign] = useState([]);
    const [selectedRole, updateSelectedRole] = useState([]);

    useEffect(() => {

        let dataNew = itemData.filter(d => {

            if (selectedTools.length === 0 && selectedDesign.length === 0 && selectedRole.length === 0) {
                return d;
            } else {
                return filterData(selectedRole.concat(selectedTools.concat(selectedDesign)), d);
            }
        });

        updateData(dataNew);

    }, [selectedDesign, selectedTools, selectedRole])

    return(
        <div className="Main">
            <Navigation />
            <div>
                <div className="Content">
            
                    <div className="Sidebar">
                        <FilterPortfolio title={"tools"} filters={toolFilters} updateSelectedValues={updateSelectedTools} selectedValues={selectedTools}/>
                        <FilterPortfolio title={"design"} filters={designFilters} updateSelectedValues={updateSelectedDesign} selectedValues={selectedDesign}/>
                        {/* <FilterPortfolio title={"roles"} filters={roleFilters} updateSelectedValues={updateSelectedRole} selectedValues={selectedRole}/> */}
                    </div>
                    <div className="Item-Container">
                        {
                            data.sort((a, b) => b.year - a.year).map(d => {
                                return <PortfolioItem d={d} key={d.title}/>
                            })
                        }
                    </div>
                </div>
                <Button id="ContactMe" variant="contained" onClick={contactMe}>Get in Touch</Button>
            </div>
            <Footer />
        </div>
    )
}
