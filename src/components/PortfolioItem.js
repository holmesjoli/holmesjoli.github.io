// Portfolio Item
export default function PortfolioItem({title, year, src, alt}) {
    return(
        <div className="Portfolio-Item" key={title}>
            <h2 className="Item-Title">{title}</h2>
            <h3 className="Item-Year">{year}</h3>
            <img className="Item-Image" src={src} alt={alt} />
            <div class="Tag-Container"></div>
        </div>
    )
}
