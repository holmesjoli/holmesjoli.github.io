// Portfolio Item
export default function PortfolioItem({title, year, imgPth}) {
    return(
        <div className="Portfolio-Item">
            <h2 className="Item-Title">{title}</h2>
            <h3 className="Item-Year">{year}</h3>
            <img className="Item-Image" src={imgPth}/>
        </div>
    )
}

