// Libraries
import { useState, useRef, useEffect } from "react";
import * as d3 from 'd3';

// Components
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { Slideshow } from "../components/Carousel";

import { itemData } from "../utils/global";
import introAnimation from "../components/AnimatedIntro";

export default function Home({count, setCount}) {

    const delay = 5000;

    const [index, setIndex] = useState(-1);

    console.log(count);
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
                prevIndex === itemData.length - 1 ? 0 : prevIndex + 1
                ),
            delay
        );

        return () => {
            resetTimeout();
        };
    }, [index]);

    useEffect(() => {
        if (count < 1) {
            introAnimation();
        } else {
            d3.select("#Main")
            .style("visibility", "visible")
            .style("z-index", 100)
            .style("opacity", 1);
        }
        setCount(count + 1);

    }, []);

    return(
        <div>
            <div id="Main">
                <Navigation />
                <Slideshow data={itemData.sort((a, b) => b.year - a.year)} showCase={true}/>
                <Footer />
            </div>
            <div id="intro-animation"></div>
        </div>
    )
}
