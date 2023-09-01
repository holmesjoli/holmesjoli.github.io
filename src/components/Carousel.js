import { PortfolioItemShowcase } from "../components/PortfolioItem";

export default function Carousel({index, setIndex, data}) {

    return (
        <div className="slideshow">
          <div
            className="slideshowSlider"
            style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
          >
            {data.sort((a, b) => b.year - a.year).map((d) => {
                 return <PortfolioItemShowcase d={d}/>
                }
            )}
          </div>

          <div className="slideshowDots">
            {data.map((_, idx) => (
              <div
                key={idx}
                className={`slideshowDot${index === idx ? " active" : ""}`}
                onClick={() => {
                  setIndex(idx);
                }}
              ></div>
            ))}
          </div>
        </div>
    );
}