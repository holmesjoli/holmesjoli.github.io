import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import PortfolioItem from "../components/PortfolioItem";


let itemData = [
    {title: "Algorithmically Fair", year: 2022, src: "/assets/algorithmically-fair/image.jpg", alt: "Three dimensional data visualization comparing black recidivism rates to white recidivism rates"}
]

export default function Home() {

    return(
        <div className="Content">
            <Navigation />
            <div className="Item-Container">
                {
                    itemData.map(d => {
                        return <PortfolioItem title={d.title} year={d.year} src={d.src} alt={d.alt}/>
                    })
                }
            </div>
            <Footer />
        </div>
    )
}