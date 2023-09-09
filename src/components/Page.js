import { Slideshow, MainImage, DesignStage } from "./Carousel"


export default function Page({d}) {

    return(
        <div className="Page">
            <div className="Project-Main">
                <h2 className="Project-Title">{d.title}</h2>
                <div className="Project-Information">
                    <div className="Project-Text ">
                        {
                            d.brief.length > 0  ? 
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
                        d.summary.length > 0  ? 
                        <div className="Project-Summary">
                            <h3>summary</h3>
                            {
                                d.summary.map((datum, i) => {
                                    return <p key={i}>{datum}</p>
                                })
                            }
                        </div>: <></>
                        }                       
                        {d.data.length > 0  ? 
                            <div className="Project-Data">
                            <h3>data</h3>
                                {
                                    d.data.map((datum, i) => {
                                        return <p key={i}>{datum}</p>
                                    })
                                }
                            </div>: <></>
                        }
                        {d.methodology.length > 0  ? 
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
                        d.artistStatement.length > 0  ? 
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
                        <div className={"Project-Description"}>
                            {
                                 d.designProcess.descr.map((datum, i) => {
                                    return <p key={i}>{datum}</p>
                                })
                            }
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
                <div className="Project-Design">
                    <h3>design</h3>
                    <ul>{d.design.map(datum => { return <li className="Design" key={datum}>{datum}</li>})}</ul>
                </div>: <></>
                }
                {
                d.role.length > 0 ? 
                <div className="Project-Role">
                    <h3>role</h3>
                    <ul>{d.role.map(datum => { return <li className="Role" key={datum}>{datum}</li>})}</ul>
                </div>
                : <></>
                }
                {
                d.tools.length > 0 ?
                <div className="Project-Tools">
                    <h3>tools</h3>
                    <ul>{d.tools.map(datum => { return <li className="Tool" key={datum}>{datum}</li>})}</ul>
                </div>: <></>
                }
                {
                d.medium.length > 0 ?
                <div className="Project-Medium">
                    <h3>medium</h3>
                    <ul>{d.medium.map(datum => { return <li className="Medium" key={datum}>{datum}</li>})}</ul>
                </div>: <></>
                }
            </div>
        </div>
    )
}
