import { PortfolioItemShowcase } from "../components/PortfolioItem";
import { itemData } from "../utils/global";

export default function Carousel({index, setIndex}) {

    return (
        <div className="slideshow">
          <div
            className="slideshowSlider"
            style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
          >
            {itemData.sort((a, b) => b.year - a.year).map((d) => {
                 return <PortfolioItemShowcase d={d}/>
                }
            )}
          </div>

          <div className="slideshowDots">
            {itemData.map((_, idx) => (
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