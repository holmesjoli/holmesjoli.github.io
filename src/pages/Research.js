import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

const data = [ { title: "patient decision-making in the context of a healthcare system",
                 subtitle: "relating systems thinking and design (rsd) symposium 2023",
                 src: "/assets/design-research/spheres of influence.jpg",
                 alt: "",
                 p: "In this paper, the authors present a system map of influences on patient decision-making, and discuss the impact of those influences upon several cases drawn from autoethnographic investigation.",
                 year: 2023
                },
                {title: "how do we deliberate about our health?",
                 subtitle: "relating systems thinking and design (rsd) symposium 2022",
                 src: "/assets/design-research/bodily_systems.jpg",
                 href: "https://rsdsymposium.org/how-do-we-deliberate-about-our-health-an-investigation-into-the-decision-aid-as-a-service-system-inflection-point/",
                 alt: "",
                 p: "Patients' medical decision-making represents a critical inflection point within healthcare systems. This research summarizes the findings about where deliberation support is currently in use and could be expanded using data from a decision aid library.",
                 year: 2022
                },
                {title: "identification of best practices for county-level data reporting on covid-19 dashboards",
                 subtitle: "texas public health association (tpha) 2021",
                 href: "/assets/design-research/presentation.html",
                 src: "/assets/design-research/tpha_bar.png",
                 p: "The lack of a centralized public health response at the advent of the COVID-19 pandemic led many states and counties to develop different metrics to convey the current state of COVID-19 disease prevelance and control. This research summarized epidemological metric dashboard development best practices.",
                 year: 2021
                },
                {title: "polygraphs",
                 subtitle: "2022",
                 href: "https://nu-center-for-design.github.io/Polygraphs_2022/",
                 src: "/assets/design-research/polygraphs.png",
                 p: "This research uses network visualization comparison to visualizes the Zollman Effect (2007) which visualized the simulated role of social networks in the development of correct and incorrect beliefs.",
                 year: 2022
                },
                {title: "intesa san paolo knowledge network",
                 subtitle: "2022",
                 href: "https://nu-center-for-design.github.io/DataViz_Elearning_phase-3/",
                 src: "/assets/design-research/knowledge-network.png",
                 p: "This research uses network visualization to show the distribution of knowledge and skills within the Intesa San Paolo Financial Institution.",
                 year: 2022
                },
                {title: "intesa san paolo processes",
                 subtitle: "2023",
                 href: "https://nu-center-for-design.github.io/banca-process/",
                 src: "/assets/design-research/circle-packing.png",
                 p: "This research uses circle packing and network visualization to show how risks are distributed across the Intesa San Paolo Financial Institution.",
                 year: 2023
                }]

function ResearchItem({d}) {
    return(
        <div className="Research-Item">
            {d.href ? <a href={d.href} target="_blank" rel="noreferrer"><h3 className="Item-Title">{d.title}</h3></a> : <h3 className="Item-Title">{d.title}</h3>}
            {d.subtitle? <h4 className="Item-Year">{d.subtitle}</h4> : <></>}
            {d.p? <p>{d.p}</p>: <></>}
            {d.src? <img className="Item-Image" src={d.src} alt={d.alt} />: <></>}
        </div>
    )
}

export default function Research() {

    return(
        <div className="Main">
            <Navigation />
            <div className="Research-Item-Container">
                {
                    data.sort((a, b) => b.year - a.year).map((d, i) => {
                        return <ResearchItem d={d} key={i}/>
                    })
                }
            </div>
            <Footer />
        </div>
    );
}
