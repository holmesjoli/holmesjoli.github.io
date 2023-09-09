import { Slideshow, MainImage } from "./Carousel"

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
                    <div className="Project-Design">
                        <h3>design process</h3>
                        {
                            d.sketches.length > 0  ? 
                            <div className="Project-Sketches">
                                <h4>sketches</h4>
                                <Slideshow data={d.sketches}/>
                            </div>: <></>
                        }
                        {
                            d.prototype.length > 0  ? 
                            <div className="Project-Prototype">
                                <h4>prototype</h4>
                                <Slideshow data={d.prototype}/>
                            </div>: <></>
                        }
                        {
                            d.final.length > 0  ? 
                            <div className="Project-Final">
                                <h4>final</h4>
                                <MainImage data={d.final.filter(e => e.size === "big")}/>
                                <Slideshow data={d.final.filter(e => e.size === "small")}/>
                            </div>:
                            <div className="Construction">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/d/d9/Under_construction_animated.gif" alt="Page under construction image"></img>
                            </div>
                        }
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