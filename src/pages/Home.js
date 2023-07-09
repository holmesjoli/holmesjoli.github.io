import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import PortfolioItem from "../components/PortfolioItem";

export default function Home() {

    return(
        <div className="Content">
            <Navigation />
            <div className="Item-Container">
                <PortfolioItem title="Algorithmically Fair" year="2022" imgPth={`${process.env.PUBLIC_URL}/assets/algorithmically-fair/PXL_20221207_173728791.PORTRAIT.jpg`}/>
            </div>
            <Footer />
        </div>
    )
}