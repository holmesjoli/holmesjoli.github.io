import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import Page from "../../components/Page";

export default function BlackData({d}) {

    return(
        <div className="Main">
            <Navigation />
            <Page d={d}/>
            <Footer/>
        </div>
    )
}