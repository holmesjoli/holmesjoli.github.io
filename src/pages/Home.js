// Libraries
import { useState, useRef, useEffect } from "react";

// Components
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { PortfolioItemShowcase } from "../components/PortfolioItem";

import { itemData } from "../utils/global";
import Carousel from "../components/Carousel";

export default function Home() {

    const colors = ["#0088FE", "#00C49F", "#FFBB28"];
    const delay = 2500;

    const [index, setIndex] = useState(0);
    const timeoutRef = useRef(null);

    function resetTimeout() {
        if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
        }
    }

    useEffect(() => {
        resetTimeout();
        timeoutRef.current = setTimeout(
        () =>
            setIndex((prevIndex) =>
            prevIndex === colors.length - 1 ? 0 : prevIndex + 1
            ),
        delay
        );

        return () => {
        resetTimeout();
        };
    }, [index]);

    return(
        <Carousel index={index} setIndex={setIndex}/>
    )

    // return(
    //     <div className="Main">
    //         <Navigation />
    //         <div className="Portfolio-Item-Showcase-Container">
    //             {
    //                 itemData.sort((a, b) => b.year - a.year).map(d => {
    //                     return <PortfolioItemShowcase d={d}/>
    //                 })
    //             }
    //         </div>
    //         <Footer />
    //     </div>
    // )
}
