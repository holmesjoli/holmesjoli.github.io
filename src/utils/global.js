export let itemData = [
    {title: "Algorithmically Fair?", page: "Algorithmically-Fair", year: 2022, src: "/assets/portfolio/algorithmically-fair/image1.jpg", alt: "Three dimensional data visualization comparing black recidivism rates to white recidivism rates", tags: ["#adobe-illustrator", "#acrylic", "#public-policy", "#data-art", "#data-physicalization", "#data-visualization", "#r"]},
    {title: "Banca Intesa Knowledge Network", page: "Billy", year: 2022, src: "/assets/portfolio/banca-intesa-knowledge-network/analyze-by-area-domain-gender.png", alt:"Image of network analysis across a knowledge network by area, domain, and gender", tags: ["#d3-js", "#pixi-js", "#react", "#data-visualization", "#interaction-design", "#python"]},
    {title: "Billy", page: "Billy", year: 2022, src: "/assets/portfolio/billy/Images/HiFi-V2/Login (1).jpg", alt:"Image of login page for digitial wallet called Billy", tags: ["#interaction-design", "#user-interface", "#figma", "#user-experience"]},
    {title: "Black Data", page: "Black-Data", year: 2020, src: "/assets/portfolio/black-data/20201122_142250.jpg", alt:"Black cube with machine learning knitting pattern in rainbow yarn", tags: ["#data-art", "#data-physicalization", "#ceramics", "#fiber", "#fine-art"]},
    {title: "Banca Intesa Processes", page: "Banca-Intesa-Processes", year: "2023", src: "/assets/portfolio/banca-intesa-processes/circle-packing-full-screen.png", alt: "A data visualization showing multiple levels of organizational hierarchy.", tags: ["#d3-js", "#pixi-js", "#react", "#data-visualization", "#interaction-design", "#python"]},
    {title: "Meta", year: 2015,  page: "Meta", src: "/assets/portfolio/meta/keyboardhands3_slow.gif", alt: "Typing out code with pink fingers", tags: ["#data-art", "#data-visualization", "#r"]},
    {title: "Visualizing Version Control",  page: "Visual-Version-Control", year: 2021, src: "/assets/portfolio/visual-version-control/version-control-system.jpg", alt:"Visualizing Version Control", tags: ["#graphic-design", "#information-design", "#system-design", "#adobe-illustrator"]},
    {title: "Drawings Collection", page: "Drawings", year: 2014, src: "/assets/portfolio/drawings/figure/20201115_164033.jpg", alt:"Sleeping person in conte.", tags: ["#collection", "#charcoal", "#conte", "#drawing", "#fine-art"]},
    {title: "Bloom", page: "Bloom", year: 2022, src: "/assets/portfolio/bloom/bloom-zoomed.png", alt: "GIF showing the sequences of cherry blosssom blooms over time", tags: ["#d3-js", "#adobe-illustrator", "#graphic-design", "#r"]},
    {title: "Risky Code", page: "Risky-Code", year: 2023, src: "/assets/portfolio/risky-code/process/ErrorRates2.png", alt: "Data visualization show different recidivism rates between Black and White defendants", tags: ["#information-design", "#interaction-design", "#d3-js", "#user-experience", "#data-visualization", "#react", "#r"]},
    {title: "Equitable Teams", page: "Equitable-Teams", year: 2022, src: "assets/portfolio/equitable-teams/team_strengths_zoom.svg", alt: "Data Visualization showing the combined strengths of individuals", tags: ["#information-design", "#graphic-design", "#data-visualization", "#adobe-illustrator"]},
    {title: "Ceramics Collection", page: "Ceramics", year: 2020, src: "/assets/portfolio/ceramics/20201028_074420.jpg", alt: "Serving bowl in Spodumene and Turner White", tags: ["#ceramics", "#collection", "#fine-art"]},
    {title: "Migration is Natural", page: "Migration-is-Natural", year: 2022, src: "/assets/portfolio/migration-is-natural/path-to-citizenship-papua.jpg",  alt:"Migration is Natural", tags: ["#information-design", "#interaction-design", "#r", "#graphic-design", "#adobe-illustrator", "#d3-js"]},
    {title: "Public Policy Collection", page: "Public-Policy-Collection", year: 2020, src: "/assets/portfolio/public-policy-collection/harris county child care markets simple.PNG", alt:"Map of Harris County, Texas child care deserts", tags: ["#data-visualization", "#interaction-design", "#r", "#public-policy", "#collection"]},
    {title: "Tutor Match", page: "Tutor-Match", year: 2022, src: "/assets/portfolio/tutor-match/Images/Wireframe/20221213/Main2.jpg", alt:"Image of user interface design for homescreen of tutor match", tags: ["#interaction-design", "#user-interface", "#figma",  "#user-experience"]},
    {title: "Patient Clinician Interactions", page: "Patient-Clinician-Interactions", year: 2022, src: "/assets/portfolio/healthcare-patient-clinician-interaction/system-zoomed.jpg", alt:"Image healthcare system clincian-patient hypothesized interactions", tags: ["#service-design", "#system-design", "#graphic-design", "#adobe-illustrator"]}
    // {title: "Flee", page: "Flee", year: 2022, src: "/assets/portfolio/flee/", tags: ['#data-journalism', '#react', '#r', '#figma', '#adboe-illustrator', '#d3-js']}
];

export const designFilters = [
"#data-physicalization", "#data-visualization", "#information-design",
"#interaction-design", "#graphic-design", "#system-design", "#service-design", "#user-experience", "#user-interaction" ];

export const mediumFilters = ["#acrylic", "#ceramics", "#charcoal", "#conte", "#fiber"];

export const toolFilters = ["#adobe-illustrator", "#d3-js", "#figma", "#python", "#r", "#react"];

export const areaFilters = ["#data-art", "#data-journalism", "#fine-art", "#map", "#public-policy" ];

export const filters = areaFilters.concat(toolFilters.concat(designFilters.concat(mediumFilters)));