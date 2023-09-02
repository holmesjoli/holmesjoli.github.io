import { Slideshow } from "./Carousel"

export default function Page({d}) {

    return(
        <div className="Page">
            <div className="Project-Main">
                {/* <div className="Construction">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/d/d9/Under_construction_animated.gif" alt="Page under construction image"></img>
                </div> */}
                <h2 className="Project-Title">{d.title}</h2>
                <div className="Project-Summary">
                    <div className="Project-Text ">
                        <div className="Project-Brief Text">{
                            d.brief !== ""  ? 
                                <div>
                                    <h3>brief</h3>
                                    <p>{d.brief}</p>
                                </div>: <></>
                            }
                        </div>
                        <div className="Project-Data">
                            {
                            d.data !== ""  ? 
                                <div>
                                    <h3>data</h3>
                                    <p>{d.data}</p>
                                </div>: <></>
                            }
                        </div>
                        <div className="Project-Artist-Statement">
                            {
                            d.artistStatement.length > 0  ? 
                                <div>
                                    <h3>artist statement</h3>
                                    {
                                        d.artistStatement.map((datum, i) => {
                                            return <p key={i}>{datum}</p>
                                        })
                                    }
                                </div>: <></>
                            }
                        </div>
                    </div>
                    <div className="Project-Design">
                        <div className="Project-Sketches">
                        {
                            d.sketches.length > 0  ? 
                            <div>
                                <h3>sketches</h3>
                                <Slideshow data={d.sketches}/>
                            </div>: <></>
                        }
                        </div>
                        {/* <div className="Project-Prototype">
                        {
                            d.prototype.length > 0  ? 
                            <div>
                                <h3>prototype</h3>
                                <Slideshow data={d.prototype}/>
                            </div>: <></>
                        }
                        </div> */}
                    </div>
                </div>               
            </div>
            <div className="Project-Attributes">
                <div className="Project-Role">
                    {
                    d.role.length > 0 ? 
                    <div>
                        <h3>role</h3>
                        <ul>
                        {d.role.map(datum => {
                            return <li className="Role" key={datum}>{datum}</li>
                        })}
                    </ul>
                    </div>
                    : <></>
                    }
                </div>
                <div className="Project-Tools">
                    {
                        d.tools.length > 0 ?
                        <div>
                            <h3>tools</h3>
                            <ul>{d.tools.map(datum => { return <li className="Tool" key={datum}>{datum}</li>})}</ul>
                        </div>: <></>
                    }
                </div>
            </div>
        </div>
    )
}
