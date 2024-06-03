// Components
import { DesignStage, CollectionExample } from "./Carousel"
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

function Sidebar({d}) {

    return(
    <div className="Project-Attributes">
         {
            d.client ?
            <div className="Project-Attr">
                <h3>client</h3>
                <ul><li className="Attr" key={d.client.name}><a target="_blank"  rel="noreferrer" href={d.client.link}>{d.client.name}</a></li></ul>
            </div>: <></>
        }
        {
            d.links ?
            <div className="Project-Attr">
                <h3>project link</h3>
                <ul>{d.links.map((datum, i) => { return <li className="Attr" key={i}><a target="_blank"  rel="noreferrer" href={datum.url}>{datum.text}</a></li>})}
                </ul>
            </div>: <></>
        }
        {
            d.design ?
            <div className="Project-Attr">
                <h3>design</h3>
                <ul>{d.design.map((datum, i) => { return <li className="Attr" key={i}>{datum}</li>})}</ul>
            </div>: <></>
        }
        {
            d.role ? 
            <div className="Project-Attr">
                <h3>roles</h3>
                <ul>{d.role.map((datum, i) => { return <li className="Attr" key={i}>{datum}</li>})}</ul>
            </div>
            : <></>
        }
        {
            d.tools ?
            <div className="Project-Attr">
                <h3>tools</h3>
                <ul>{d.tools.map((datum, i) => { return <li className="Attr" key={i}>{datum}</li>})}</ul>
            </div>: <></>
        }
        {
            d.medium ?
            <div className="Project-Attr">
                <h3>medium</h3>
                <ul>{d.medium.map((datum, i) => { return <li className="Attr" key={i}>{datum}</li>})}</ul>
            </div>: <></>
        }
    </div>
    )
}

export function Page({d}) {

    return(
        <div className="Page">
            <div className="Project-Main">
                <h2 className="Project-Title">{d.title}</h2>
                <div className="Project-Information">
                    <div className="Project-Text ">
                        {
                            d.brief  ? 
                            <div className="Project-Brief">
                                    <h3>brief</h3>
                                    {
                                        d.brief.map((datum, i) => {
                                            return <p key={i}>{datum}</p>
                                        })
                                    }
                                </div>: <></>
                        }
                        {
                        d.summary  ? 
                        <div className="Project-Summary">
                            <h3>summary</h3>
                            {
                                d.summary.map((datum, i) => {
                                    return <p key={i}>{datum}</p>
                                })
                            }
                        </div>: <></>
                        }                       
                        {d.data  ? 
                            <div className="Project-Data">
                            <h3>data</h3>
                                {
                                    d.data.map((datum, i) => {
                                        return <p key={i}>{datum}</p>
                                    })
                                }
                            </div>: <></>
                        }
                        {d.methodology ? 
                            <div className="Project-Methodology">
                                <h3>methodology</h3>
                                {
                                    d.methodology.map((datum, i) => {
                                        return <p key={i}>{datum}</p>
                                    })
                                }
                            </div>: <></>
                        }
                        {
                        d.artistStatement  ? 
                        <div className="Project-Artist-Statement">
                                <h3>artist statement</h3>
                                {
                                    d.artistStatement.map((datum, i) => {
                                        return <p key={i}>{datum}</p>
                                    })
                                }
                            </div>: <></>
                        }
                    </div>
                    {d.designProcess ? 
                        <div className="Project-Design-Process">
                            <h3>design process</h3>

                            {
                            d.designProcess.descr  ? 
                            <div className="Project-Description">
                                <div className="Main-Image">
                                    <img src={d.mainImage.url} alt={d.mainImage.alt}></img>
                                </div>
                                <div>
                                    {
                                        d.designProcess.descr.map((datum, i) => {
                                            return <p key={i}>{datum}</p>
                                        })
                                    }
                                </div>
                                
                            </div>: <></>
                            }
                            <DesignStage descr="design research" stage={d.designProcess.research} />
                            <DesignStage descr="initial sketches" stage={d.designProcess.sketches} />
                            <DesignStage descr="prototype" stage={d.designProcess.prototype} />
                            <DesignStage descr="final design" stage={d.designProcess.final} />
                        </div> : <div className="Project-Collection">
                            {
                                d.collection.map((datum, i) => {
                                    return <CollectionExample collection={datum} key={i}/>
                                })
                            }    
                        </div>}
                </div>               
            </div>
            <Sidebar d={d}/>
        </div>
    )
}

export function PortfolioPage({d}) {

    return(
        <div className="Main">
            <Navigation />
            <Page d={d}/>
            <Footer/>
        </div>
    )
}