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
            <div>
            <div className="Body">
                <h2>Most technology job applications want applicants to be able to check a box.</h2> 
                <h2>Define yourself as one of the following: </h2>
                <h2>UI designer</h2>
                <h2>data analyst</h2>
                <h2>developer</h2>
                <h2>UX researcher</h2>
                <h2>product designer</h2>
                <h2>data scientist</h2>
                <h2>Having worked mostly at start-ups, this has always been a confounding question.</h2>
                <h2>I perform tasks that check boxes in each of those categories</h2>
                <h2>So what I am?</h2>

                <div id="intro-animation"></div>
                <h2>I am a</h2>
                <h2>storyteller</h2>
                <h2>data wrangler</h2>
                <h2>information designer</h2>
                <h2>data visualization engineer</h2>
                <h2>interface developer</h2>
                <h2>data visualization specialist</h2>
                <h2>human-centered thinker</h2>

                <h2>Let me help you with your next data story</h2>
            </div>
            </div>
        </div>
    )
}
