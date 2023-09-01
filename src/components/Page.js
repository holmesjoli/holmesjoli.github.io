export default function Page({d}) {

    return(
        <div className="Page">
            <div className="Project-Summary">
                {/* <div className="Construction">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/d/d9/Under_construction_animated.gif" alt="Page under construction image"></img>
                </div> */}
                <h2 className="Project-Title">{d.title}</h2>
                <div className="Project-Brief">
                    <h3>brief</h3>
                </div>
                <div className="Project-Sketches">
                    <h3>sketches</h3>
                </div>
            </div>
            <div className="Project-Attributes">
            </div>
        </div>
    )
}
