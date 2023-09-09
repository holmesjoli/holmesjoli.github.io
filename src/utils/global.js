export let itemData = [
    {
        title: "Algorithmically Fair?", 
        page: "Algorithmically-Fair", 
        year: 2022, 
        mainImage: {url: "/assets/portfolio/algorithmically-fair/image1.jpg",
                 alt: "Three dimensional data visualization comparing black recidivism rates to white recidivism rates"},
        tags: ["#adobe-illustrator", "#acrylic", "#public-policy", "#data-art", "#data-physicalization", "#data-visualization", "#r", "#iiba-longlist-2023"],
        tools: ["Adobe Illustrator", "R", "Laser cutter"],
        design: ["Information design"],
        medium: ["Acrylic", "Radial LED Light Panel"],
        role: ["Data visualization designer", "Data analyst"],
        brief: [],
        data: [],
        methodology: [],
        summary: ["Algorithmically fair? is a data physicalization project that visualizations disparate rates of a commonly used recidivism algorithm in the United States. Through simple pie charts, the project compares how the error rates of the algorithm differ for Black and White defendants. The physical forms obstruct part of the visualizations; the audience must physically engage with the artifact to reveal the rates. The third dimension, the form's height, indicates the number of people affected by these differing rates. The use of light draws the audience’s attention to the error rate, highlighting the discrepancy between Black and White defendants, and asks the audience to think critically about what it means for an algorithm to be fair."],
        artistStatement: ["This work critiques the use of risk assessment tools in the criminal justice system by asking an audience to reflect on the impacts of the COMPAS recidivism algorithm by engaging with three-dimensional panopticon forms representing disparate impacts. Algorithmically Fair? was inspired by two models of surveillance — the capture model and the surveillance model.",
                            "The surveillance model is often invoked using the visual metaphor of the panopticon, designed by Jeremy Bentham. Bentham arranged the prison cells around a centralized guard tower in his architectural plans. An intermittent light reminds prisoners that they are being watched, even if no one is there. Bentham's radial architectural design inspired the radial coordinate system in this design.",
                            "Philip Agre's theoretical model of data capture systems motivated the informational content of this work. Agre theorizes that capturing and storing human activity in information systems encourages individuals to change their behavior and reorient toward the system. Given specific data inputs, the COMPAS recidivism algorithm takes data inputs of an individual defendant. It returns a risk score from 1-10, representing the defendant's likelihood of returning to the system. Although predictive algorithms such as COMPAS are known to have low overall predictive accuracy, these risk scores are used to inform decision-making, orienting judges and other decision-makers towards the system.",
                            "Algorithmically Fair? comments on the capture model by visualizing two standard measures of algorithmic fairness — the false positive rate and the false negative rate — using the actual and predictive outcomes from the model. The false positive rate is the probability of falsely rejecting the truth, simply triggering a false alarm. In contrast, the false negative rate is the failure to raise a valid alarm. However, in a criminal justice context, triggering a false alarm can result in additional sentencing time or setting a higher bail. Additionally, failing to raise a valid alarm results in future offenders going free. Although developers of COMPAS and proponents of criminal risk assessment tools have used other definitions of algorithmic accuracy to claim that the COMPAS recidivism algorithm is fair, this artifact challenges this notion.",
                            "The physical panopticon models obstruct the fairness visualizations; the audience must physically engage with the artifact components to reveal the rates. While the rates indicate the disparate impacts of the algorithm on Black and White defendants; however, rates do not inform readers about the number of people affected. I designed the panopticon models' height to indicate the number of affected people so that a reader can compare the multiple metrics simultaneously.",
                            "Culturally, red is of ten associated with words such as stop, warning, harm, and error. The incorrect predictions, in red, were also printed on translucent acrylic compared to the correct predictions, which were printed on black opaque acrylic.",
                            "Light is used in the piece metaphorically and aesthetically. Light plays an interesting role in this piece metaphorically. In Bentham's panopticon, the lighted guard tower encouraged self-policing behaviors. However, in Algorithmically Fair?, light draws the viewer's eye and highlights the frequency of algorithmic error. Additionally, the predominantly black form representing algorithmic inequity makes visual reference to a black box algorithm. Lighting this form from the inside out to elucidate viewers on algorithmic bias symbolically reverses the role of light plays in these panopticon forms."],
        designProcess: {
            sketches: {
                images: [
                    {url:"/assets/portfolio/algorithmically-fair/PXL_20221214_132923256.jpg",
                        alt: "Initial sketch conveying the idea of physical form that represents a database",
                        size: "small"},
                        {url:"/assets/portfolio/algorithmically-fair/PXL_20221214_132856202.jpg",
                        alt: "A second sketch conveying the idea of physical form that represents a database",
                        size: "small"},
                        {url:"/assets/portfolio/algorithmically-fair/PXL_20221213_220237602.jpg",
                        alt: "Initial sketch showing how a third dimension could be used to show the number of people",
                        size: "small"}]},
            prototype: {
                images: [{url: "/assets/portfolio/algorithmically-fair/PXL_20221214_133321902.jpg",
                        alt: "Initial prototype of layered pie charts",
                        size: "small"}, 
                        {url: "/assets/portfolio/algorithmically-fair/PXL_20221202_221919552.jpg",
                        alt: "Initial prototype of light inside a layered pie chart",
                        size: "small"}]},
            final: {
                images: [
                    // {url: "/assets/portfolio/algorithmically-fair/image1.jpg",
                    // alt: "Three dimensional data visualization comparing black recidivism rates to white recidivism rates",
                    // size: "big"},
                    {url: "/assets/portfolio/algorithmically-fair/PXL_20221207_173728791.PORTRAIT.jpg",
                    alt: "Birdseye view of the Algorithmically Fair?",
                    size: "small"}, 
                    {url: "/assets/portfolio/algorithmically-fair/PXL_20221207_173759492.PORTRAIT.jpg",
                    alt: "Close-up of one data visualization's physical form on the LED radial light",
                    size: "small"}]
                }
            }
    },
    // {title: "Banca Intesa Knowledge Network", 
    // page: "Banca Intesa Knowledge Network", 
    // year: 2022, 
    // mainImage: {url: "/assets/portfolio/banca-intesa-knowledge-network/analyze-by-area-domain-gender.png", 
    //             alt: "Image of network analysis across a knowledge network by area, domain, and gender"},
    // tags: ["#d3-js", "#pixi-js", "#react", "#data-visualization", "#interaction-design", "#python", "#iiba-longlist-2022"],
    // tools: ["D3.js", "Pixi.js", "React", "Python"],
    // design: ["Information design", "Interaction design"],
    // medium: [],
    // role: ["Data visualization designer", "Data analyst"],
    // brief: [],
    // summary: [],
    // data: [],
    // methodology: [],
    // artistStatement: [],
    // sketches: [],
    // prototype: [],
    // final: []
    // },
    // {title: "Billy", 
    // page: "Billy", 
    // year: 2022, 
    // mainImage: {
    //     url: "/assets/portfolio/billy/Images/HiFi-V2/Login (1).jpg",
    //     alt:"Image of login page for digitial wallet called Billy"}, 
    // tags: ["#interaction-design", "#user-interface", "#figma", "#user-experience", "#user-interaction"],
    // tools: ["Figma"],
    // design: [],
    // medium: [],
    // role: ["Interaction designer"],
    // brief: [],
    // summary: [],
    // data: [],
    // methodology: [],
    // artistStatement: [],
    // sketches: [],
    // prototype: [],
    // final: []
    // },
    {
        title: "Black Data", 
        page: "Black-Data", 
        year: 2020,
        mainImage: {
            url: "/assets/portfolio/black-data/20201122_142250.jpg", 
            alt:"Black cube with machine learning knitting pattern in rainbow yarn"}, 
        tags: ["#data-art", "#data-physicalization", "#ceramics", "#fiber", "#fine-art"],
        tools: [],
        design: [],
        medium: ["Yarn", "Beads", "Clay"],
        role: [],
        brief: [],
        summary: [],
        data: [],
        methodology: [],
        artistStatement: ["In Black Data, I play with the idea of transparency and reproducibility in machine learning algorithms. The juxtaposition of the black box in contrast to the white box is intended to make viewers question what a white box algorithm would look like and what the research process would entail. Machine learning algorithms are starting to be employed more regularly, especially in public policy settings, but frequently lack transparency and accountability.",
                            "The output of the black box is part of the Sky Knit pattern collection. The Sky Knit patterns were trained using a recurrent neural network — a black box machine learning algorithm. Sky Knit patterns are hard to follow and require a lot of improvisation, making them very challenging to reproduce. In contrast, the output of the white box algorithm is a simple pattern which can be found here. The white box algorithm lacks color and sparkle, but it's basic and straightforward."],
        designProcess: {
            final: {
                images: [{url: "/assets/portfolio/black-data/20201122_142017.jpg",
                        alt: "Black cube with machine learning knitting pattern in rainbow yarn",
                        size: "small"}, 
                    {url: "/assets/portfolio/black-data/20201122_142356.jpg",
                        alt: "Black cube with machine learning knitting pattern in rainbow yarn close up",
                        size: "small"}, 
                    {url: "/assets/portfolio/black-data/20201124_173636 edited.jpg",
                        alt: "White cube with knitting pattern in white yarn",
                        size: "small"}]}
                    }
    },
    // {title: "Banca Intesa Processes", 
    // page: "Banca-Intesa-Processes", 
    // year: "2023", 
    // mainImage: {
    //     url: "/assets/portfolio/banca-intesa-processes/circle-packing-full-screen.png", 
    //     alt: "A data visualization showing multiple levels of organizational hierarchy."}, 
    // tags: ["#d3-js", "#pixi-js", "#react", "#data-visualization", "#interaction-design", "#python", "#iiba-longlist-2023"],
    // tools: ["D3.js", "Pixi.js", "React", "Python"],
    // design: ["Information design", "Interaction design"],
    // medium: [],
    // role: ["Data visualization designer", "Project manager", "Data analyst"],
    // brief: [],
    // summary: [],
    // data: [],
    // methodology: [],
    // artistStatement: [],
    // sketches: [],
    // prototype: [],
    // final: []
    // },
    {
        title: "Meta", 
        year: 2015, 
        page: "Meta", 
        mainImage: {
            url: "/assets/portfolio/meta/keyboardhands3_slow.gif", 
            alt: "Typing out code with pink fingers"}, 
        tags: ["#data-art", "#data-visualization", "#r"],
        tools: ["R"],
        design: ["Information design"],
        medium: [],
        role: [],
        brief: [],
        summary: [],
        data: [],
        methodology: [],
        artistStatement: ["The installation pictured below explores the social construction of data and how data can be manipulated through code. The installation shows a snippet of the physical code used to extract RGB values from a corpus of Georgia O'Keefe paintings. I downloaded 60 images of famous O'Keefe paintings and used R to extract the RGB values of each pixel in each painting. I visualized the values as histograms for each painting. The histograms and GIF displayed below were installed at Wesleyan University's Quantitative Analysis Center, the physical space where I utilized the university's resources to learn and practice quantitative analysis. The GIF plays off of a common programming technique known as a loop."],
        designProcess: {
            final: {
                images: [{url: "/assets/portfolio/meta/keyboardhands3_slow.gif",
                    alt: "GIF of hands typing out code with physical code layered in the background",
                    size: "big"},
                    {url:"/assets/portfolio/meta/histograms.jpg",
                    alt: "Image of histogram installation",
                    size: "small"},
                    {url:"/assets/portfolio/meta/histogram_computer.jpg",
                    alt: "Image of additional histograms shown on computer screens",
                    size: "small"},
                    {url:"/assets/portfolio/meta/computer.jpg",
                    alt: "Computers at Wesleyan University's Quantitative Analysis Center",
                    size: "small"}]
                }
            }
    },
    // {title: "Visualizing Version Control", 
    // page: "Visual-Version-Control", 
    // year: 2021, 
    // mainImage: {
    //     url: "/assets/portfolio/visual-version-control/version-control-system.jpg", 
    //     alt:"Visualizing Version Control"}, 
    // tags: ["#graphic-design", "#information-design", "#system-design", "#adobe-illustrator"],
    // tools: ["Adobe Illustrator"],
    // design: ["Information design", "Graphic design"],
    // medium: [],
    // role: ["Information designer"],
    // brief: [],
    // summary: [],
    // data: [],
    // methodology: [],
    // artistStatement: [],
    // sketches: [],
    // prototype: [],
    // final: []
    // },
    // {title: "Drawings Collection", 
    // page: "Drawings-Collection", 
    // year: 2014, 
    // mainImage: {
    //     url: "/assets/portfolio/drawings/figure/20201115_164033.jpg", 
    //     alt:"Sleeping person in conte."}, 
    // tags: ["#collection", "#charcoal", "#conte", "#drawing", "#fine-art"],
    // tools: [],
    // design: [],
    // medium: ["Charcoal", "Conte", "Paper"],
    // role: ["Designer"],
    // brief: [],
    // summary: [],
    // data: [],
    // methodology: [],
    // artistStatement: [],
    // sketches: [],
    // prototype: [],
    // final: []
    // },
    // {title: "Bloom", 
    // page: "Bloom", 
    // year: 2022,
    // mainImage: {
    //     url: "/assets/portfolio/bloom/bloom-zoomed.png", 
    //     alt: "GIF showing the sequences of cherry blosssom blooms over time"}, 
    // tags: ["#d3-js", "#adobe-illustrator", "#graphic-design", "#r"],
    // tools: ["D3.js", "R"],
    // design: ["Information design"],
    // medium: [],
    // role: ["Data visualization designer"],
    // brief: [],
    // summary: [],
    // data: [],
    // methodology: [],
    // artistStatement: [],
    // sketches: [],
    // prototype: [],
    // final: []
    // },
    // {title: "Risky Code", 
    // page: "Risky-Code", 
    // year: 2023, 
    // mainImage: {
    //     url: "/assets/portfolio/risky-code/process/ErrorRates2.png", 
    //     alt: "Data visualization show different recidivism rates between Black and White defendants"}, 
    // tags: ["#information-design", "#interaction-design", "#d3-js", "#user-experience", "#data-visualization", "#react", "#r"],
    // tools: ["D3.js", "React", "R"],
    // design: ["Information design", "Interaction design"],
    // medium: [],
    // role: ["Data visualization designer", "Researcher"],
    // brief: [],
    // summary: [],
    // data: [],
    // methodology: [],
    // artistStatement: [],
    // sketches: [],
    // prototype: [],
    // final: []
    // },
    // {title: "Equitable Teams", 
    // page: "Equitable-Teams", 
    // year: 2022, 
    // mainImage: {
    //     url: "assets/portfolio/equitable-teams/team_strengths_zoom.svg", 
    //     alt: "Data Visualization showing the combined strengths of individuals"}, 
    // tags: ["#information-design", "#graphic-design", "#data-visualization", "#adobe-illustrator"],
    // design: ["Information Design", "Graphic design"],
    // tools: ["Adobe Illustrator"],
    // role: ["Data visualization designer"],
    // brief: ["Brainstorm the information about your peer's skills and preferences you would need to compose equitable teams. Collect data from the class. Format these requirements as a data schema, including variable names, data types, and validation. Working in pairs, use visualization to propose equitable committee membership. Create a visualization to argue for a set of teams that balance skills and preferences."],
    // summary: [],
    // data: [],
    // methodology: [],
    // artistStatement: [],
    // sketches: [],
    // prototype: [],
    // final: []
    // },
    // {title: "Ceramics Collection", 
    // page: "Ceramics-Collection", 
    // year: 2020, 
    // mainImage: {
    //     url: "/assets/portfolio/ceramics/20201028_074420.jpg", 
    //     alt: "Serving bowl in Spodumene and Turner White"
    // }, 
    // tags: ["#ceramics", "#collection", "#fine-art"],
    // tools: [],
    // design: [],
    // medium: ["Clay", "Glaze"],
    // role: [],
    // brief: [],
    // summary: [],
    // data: [],
    // methodology: [],
    // artistStatement: [],
    // sketches: [],
    // prototype: [],
    // final: []
    // },
    {
        title: "Migration is Natural", 
        page: "Migration-is-Natural",
        year: 2022, 
        mainImage: {
            url: "/assets/portfolio/migration-is-natural/path-to-citizenship-papua.jpg",
            alt:"Migration is Natural"}, 
        tags: ["#information-design", "#interaction-design", "#r", "#graphic-design", "#adobe-illustrator", "#d3-js", "#svelte", "#figma"],
        tools: ["R", "Adobe Illustrator", "D3.js", "Svelte", "Figma"],
        design: ["Information design", "Interaction design", "Graphic design"],
        medium: [],
        role: ["Data visualization designer", "Project manager", "Data analyst"],
        brief: [],
        summary: [
                    "Migration is Natural uses data from a global citizen database to create an interactive visualization that explores different countries citizenship paths.",
                    "It employs the visual metaphor of a butterfly to convey that migration is a natural phenomenon frequently witnessed in the natural world. The visual inspiration for the metaphor is from artist, organizater, and activist, Favianna Rodriguez, who created a series called 'Migration is Beautiful' in 2012.",
                    "The veins of the butterfly detail different paths a user could take to acquire migration after answering some simple questions such as, 'Are your parents citizens of the country you are interested in migrating to?', 'Were you born in the country you are interested in migrating to?', or 'Are you married?'"],
        data: ["This project combines data from two resources. The first is the global citizenship database maintained by the European University Institute. The database standardizes citizenship acquisition methods across 190 countries. The database identifies 28 ways through which migrants can obtain citizenship. It was last updated on January 1st, 2020. This data set was challenging to work with because the data are all categorical, which is often harder to visualize than numeric data."],
        methodology: [],
        artistStatement: [],
        designProcess: {
            research: {
                images: [
                {
                    url: "/assets/portfolio/migration-is-natural/moodboard.png",
                    alt: "Moodboard of different images used in the intial research phase of Migration is Natural",
                    size: "small"
                },
                {
                    url: "/assets/portfolio/migration-is-natural/2x/Inspiration1@2x-100.jpg",
                    alt: "A map showing the migratory patterns of birds",
                    size: "small"
                },
                {
                    url: "/assets/portfolio/migration-is-natural/2x/Inspiration2@2x-100.jpg",
                    alt: "A map showing the migratory patterns of birds",
                    size: "small"
                },
                {
                    url: "/assets/portfolio/migration-is-natural/2x/Inspiration3@2x-100.jpg",
                    alt: "A map showing the migratory patterns of whales",
                    size: "small"
                },
                {
                    url: "/assets/portfolio/migration-is-natural/2x/Inspiration4@2x-100.jpg",
                    alt: "An information visualization showing the different paths to the 2016 presidency",
                    size: "small"
                },
                {
                    url: "/assets/portfolio/migration-is-natural/2x/Inspiration5@2x-100.jpg",
                    alt: "An information visualization showing path flows",
                    size: "small"
                }
            ]},
            sketches: {
                images: [
                {
                    url: "/assets/portfolio/migration-is-natural/design-process-1.png",
                    alt: "Initial sketch showing underlying logic to the data",
                    size: "small"
                },
                {
                    url: "/assets/portfolio/migration-is-natural/design-process-2.png",
                    alt: "Initial sketch showing how a path could be formed from the data",
                    size: "small"
                },
                {
                    url: "/assets/portfolio/migration-is-natural/design-process-3.png",
                    alt: "Initial sketch adding more detail to potential data paths",
                    size: "small"
                }
            ]},
            prototype: {
                images: [
                {
                    url: "https://www.figma.com/proto/NwGNVHkgGHQXyLndwRY8d9/Design-studio-2?node-id=176%3A8&starting-point-node-id=176%3A8",
                    link: "https://www.figma.com/proto/NwGNVHkgGHQXyLndwRY8d9/Design-studio-2?node-id=176%3A8&starting-point-node-id=176%3A8",
                    alt: "The team used figma to prototype the application",
                    size: "big",
                    descr: []
                }
            ]},
            final: {
                images: [
                {
                    url: "https://joliholmes.com/team-migration/",
                    link: "https://joliholmes.com/team-migration/",
                    alt: "Interactive applications showing the initial map",
                    size: "big",
                    descr: ["D3.js was used to create interactive visualizations for the application."]
                }
            ]}
        }
    },
    // {title: "Public Policy Collection", 
    // page: "Public-Policy-Collection", 
    // year: 2020, 
    // mainImage: {
    //     url: "/assets/portfolio/public-policy-collection/harris county child care markets simple.PNG", 
    //     alt:"Map of Harris County, Texas child care deserts"}, 
    // tags: ["#data-visualization", "#interaction-design", "#r", "#public-policy", "#collection"],
    // tools: ["R"],
    // design: ["Information design", "Interaction design"],
    // medium: [],
    // role: ["Data visualization designer", "Project manager", "Data analyst"],
    // brief: ["Design an interactive visualization that shows child care deserts by census tract in Tarrant and Harris Country, Texas. Users should be able to visually assess geographic areas with a low supply of childcare compared to the demand for childcare. The target audience for this application is policy researchers."],
    // summary: [],
    // data: ["This dashboard combines data from various sources, including the Texas Child Care Licensing database, Texas Workforce Commission, and the Census."],
    // methodology: ["The deserts are constructed as a ratio between the total supply of child care seats from licensed providers to the total demand for those seats. We compute the analysis at the child care market level. An anchoring census tract and its neighboring tracts within a 3-mile radius define a child care market. Literature suggests that typical low-income families utilize child care within 3 miles of their home address. Research by the Texas Policy Lab supports this finding for families in Harris and Tarrant County.",
    //             "For more information on how estimates are computed, see the Documentation tab in the application."],
    // artistStatement: [],
    // sketches: [],
    // prototype: [],
    // final: [{url: "https://tplapps.rice.edu/shiny/texas-county-child-care-deserts-03",
    //         alt: "",
    //         size: "big"}]
    // },
    // {title: "Tutor Match", 
    // page: "Tutor-Match", 
    // year: 2022, 
    // mainImage: {
    // url: "/assets/portfolio/tutor-match/Images/Wireframe/20221213/Main2.jpg", 
    // alt:"Image of user interface design for homescreen of tutor match"}, 
    // tags: ["#interaction-design", "#user-interface", "#figma", "#user-experience", "#user-interaction"],
    // tools: ["Figma"],
    // design: ["Interaction design"],
    // medium: [],
    // role: ["Interaction designer"],
    // brief: [],
    // summary: [],
    // data: [],
    // methodology: [],
    // artistStatement: [],
    // sketches: [],
    // prototype: [],
    // final: []
    // },
    // {title: "Patient Clinician Interactions", 
    // page: "Patient-Clinician-Interactions", 
    // year: 2022, 
    // mainImage: {
    // url: "/assets/portfolio/healthcare-patient-clinician-interaction/system-zoomed.jpg", 
    // alt:"Image healthcare system clincian-patient hypothesized interactions"}, 
    // tags: ["#service-design", "#system-design", "#graphic-design", "#adobe-illustrator"],
    // tools: ["Adobe Illustrator"],
    // design: ["Service design", "System design", "Graphic design",],
    // medium: [],
    // role: ["Information designer", "Researcher"],
    // brief: [],
    // summary: [],
    // data: [],
    // methodology: [],
    // artistStatement: [],
    // sketches: [],
    // prototype: [],
    // final: []
    // }
    //     ,{title: "Flee", 
    //     page: "Flee", 
    //     year: 2022, 
    //     mainImage: {
    //     url: "/assets/portfolio/flee/", alt: ""},
    //     tags: ['#data-journalism', '#react', '#r', '#figma', '#adobe-illustrator', '#d3-js'],
    //     tools: ["R", "Adobe Illustrator", "D3.js"],
    //     design: [],
    //     medium: [],
    //     role: ["Data Visualization Designer"],
    //     brief: [],
    //     summary: [],
    //     data: [],
    //     methodology: [],
    //     artistStatement: [],
    //     sketches: [],
    //     prototype: [],
    //     final: []
    // }
];

export const designFilters = ["#data-art", "#data-physicalization", "#data-visualization", "#information-design",
"#interaction-design", "#graphic-design", "#system-design", "#service-design", "#user-experience", "#user-interaction" ];

export const mediumFilters = ["#acrylic", "#ceramics", "#charcoal", "#conte", "#fiber"];

export const toolFilters = ["#adobe-illustrator", "#d3-js", "#figma", "#python", "#r", "#react"];

export const areaFilters = ["#data-journalism", "#fine-art", "#map", "#public-policy" ];

export const awardFilters = ["#iiba-longlist-2023", "#iiba-longlist-2022"]

export const filters = awardFilters.concat(toolFilters.concat(designFilters.concat(mediumFilters)));
