// Libraries
import { Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/material/IconButton';

// Components
import { DesignStage } from "./Carousel"
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

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
                        <DesignStage title="design research" stage={d.designProcess.research} showCase={false}/>
                        <DesignStage title="initial sketches" stage={d.designProcess.sketches} showCase={false}/>
                        <DesignStage title="prototype" stage={d.designProcess.prototype} showCase={false}/>
                        <DesignStage title="final design" stage={d.designProcess.final} showCase={false}/>
                    </div>
                </div>               
            </div>
            <div className="Project-Attributes">
                {
                    d.design.length > 0 ?
                    <div className="Project-Attr">
                        <h3>design</h3>
                        <ul>{d.design.map(datum => { return <li className="Attr" key={datum}>{datum}</li>})}</ul>
                    </div>: <></>
                }
                {
                    d.role ? 
                    <div className="Project-Attr">
                        <h3>role</h3>
                        <ul>{d.role.map(datum => { return <li className="Attr" key={datum}>{datum}</li>})}</ul>
                    </div>
                    : <></>
                }
                {
                    d.tools ?
                    <div className="Project-Attr">
                        <h3>tools</h3>
                        <ul>{d.tools.map(datum => { return <li className="Attr" key={datum}>{datum}</li>})}</ul>
                    </div>: <></>
                }
                {
                    d.medium ?
                    <div className="Project-Attr">
                        <h3>medium</h3>
                        <ul>{d.medium.map(datum => { return <li className="Attr" key={datum}>{datum}</li>})}</ul>
                    </div>: <></>
                }
                {
                    d.links ?
                    <div className="Project-Attr">
                        <h3>link</h3>
                        <ul>{d.links.map((datum, i)=> { return <li className="Attr" key={i}><a target="_blank" href={datum.url}>{datum.text}</a></li>})}
                        </ul>
                    </div>: <></>
                }
            </div>
        </div>
    )
}

export function PortfolioPage({d}) {

    console.log(d)

    return(
        <div className="Main">
            <Navigation />
            <Page d={d}/>
            <Footer/>
        </div>
    )
}