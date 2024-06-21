// Libraries
import { useState, useRef, useEffect } from "react";

// Components
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { Slideshow } from "../components/Carousel";

import { itemData, introTransition } from "../utils/global";
import introAnimation from "../components/AnimatedIntro";

export default function Home() {

    const delay = 5000 + introTransition;

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
            prevIndex === itemData.length - 1 ? 0 : prevIndex + 1
            ),
        delay
        );

        return () => {
        resetTimeout();
        };
    }, [index]);

    useEffect(() => {
        introAnimation();
    }, []);

    return(
        <div className="Main">
            <Navigation />
            <Slideshow data={itemData.sort((a, b) => b.year - a.year)} showCase={true}/>
            <Footer />
            <div id="intro-animation"></div>
        </div>
    )
}
