// Libraries
import { useState, useRef, useEffect } from "react";
import * as d3 from 'd3';

// Components
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { Slideshow } from "../components/Carousel";


import introAnimation from "../components/AnimatedIntro";
import { itemData, contactMe } from "../utils/global";
import Button from '@mui/material/Button';

export default function Home({count, setCount}) {

    const delay = 21000;

    const [index, setIndex] = useState(0);

    const timeoutRef = useRef(null);

    const skipIntro = () => {

        d3.selectAll(".Intro div").remove();
        d3.select("#Data-Animation").remove();
        d3.select("#Skip").remove();

        d3.select("#Main")
            .transition()
            .ease(d3.easeCircleIn)
            .style("visibility", "visible")
            .style("z-index", 100)
            .style("opacity", 1);
    }

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

            d3.selectAll(".Intro div").remove();
            d3.select("#Data-Animation").remove();
        }
        setCount(count + 1);

    }, []);

    return(
        <div id="Home">
            <div id="Main">
                <Navigation />
                <Slideshow data={itemData.sort((a, b) => b.year - a.year)} showCase={true}/>
                <Button id="ContactMe" variant="contained" onClick={contactMe}>Get in Touch</Button>
                <Footer />
            </div>
            <div>
                <Button id="Skip" variant="outlined" onClick={skipIntro}>Skip Intro</Button>
                <div className="Intro">
                    {/* <div><h2>Most technology job applications want applicants to be able to check a box.</h2> </div>
                    <div><h2>Define yourself as one of the following: </h2></div>
                    <div><h2>UI designer</h2></div>
                    <div><h2>data analyst</h2></div>
                    <div><h2>developer</h2></div>
                    <div><h2>UX researcher</h2></div>
                    <div><h2>product designer</h2></div>
                    <div><h2>data scientist</h2></div>
                    <div><h2>Having worked mostly at start-ups, this has always been a confounding question.</h2></div>
                    <div><h2>I perform tasks that check boxes </h2><span><h2 className="No-Bold">&#x2611; &#x2611; &#x2611;</h2></span><h2>in each of those categories</h2></div>
                    <div><h2>So what I am?</h2></div> */}

                    <div><h2>I am a</h2></div>
                    <div><h2>storyteller</h2></div>
                    <div><h2>data visualization specialist</h2></div>
                    <div><h2>information designer</h2></div>
                    <div><h2>creative technologist</h2></div>
                    <div><h2>interface developer</h2></div>
                    <div><h2>human-centered thinker</h2></div>
                    <div><h2>I am</h2></div>
                    <div><h2>Let me help you with your next data story</h2></div>
                </div>
                
                <div id="Data-Animation"></div>
            </div>
        </div>
    )
}
