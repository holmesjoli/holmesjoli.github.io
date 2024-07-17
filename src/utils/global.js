export let itemData = [
    {title: "Voting Access Monitor",
     page: "Voting-Access-Monitor",
     client: {name: "Center for New Data", link: "https://www.newdata.org/"},
     links: [{url: "https://www.figma.com/proto/ZRGxAHYOsZAK0eu4va8yuF/VAM-Design?node-id=1511-52218&t=rhc8ILCeHvvALer8-0&scaling=scale-down&page-id=0%3A1&starting-point-node-id=1511%3A52218", text: "Explore the prototype"}],
     year: 2024,
     iiba: [{year: 2023, longlist: false}, {year: 2022, longlist: false}],
     mainImage: {url: "Ohio_Tooltip.png",
                 alt: "A data visualization of the State of Georgia and how polling locations have changed over the last several years."},
     tags: ["#react", "#leaflet-js", "#d3-js", "#data-visualization", "#r", "#figma", "#user-experience ", "#interface-design", "#typescript"],
     tools: ["D3.js", "Leaflet.js", "React", "R", "Figma"],
     design: ["Data Visualization", "Interaction design", "UI/UX Design" ],
     role: ["Data visualization designer", "Data visualization developer", "UI/UX designer", "Data analyst"],
     designProcess: [{name: 'summary', 
                      descr: ["Voting Access Monitor (VAM) is an interactive map designed to assist voting equity advocates in better understanding trends in polling location closures across priority states. VAM was co-designed with the Center for New Data's partners, Legal Defense Fund, Fair Fight Action, and Campaign Legal Center over the course of several months.",
                              "As the lead designer on the project, I sketched, worked with Figma to prototype visualizations, and used design methods (e.g., user interviews, card sorting, cognitive walkthrough, and stakeholder mapping) to reveal insights when interfacing with clients that have guided the design and implementation of the prototype and final product.",
                              "As a developer on the project, I worked with JavaScript libraries React, D3, and Leaflet. I frequently referenced interface heuristics (e.g., visibility of system status, error prevention, etc.) and information visualization heuristics (e.g., details on-demand) to design an interface that is both sophisticated and user-friendly."],
                    videos: [
                        {url: "InteractionDemo.mp4"}
                    ] },
                     {name: 'user research', 
                     descr: ["Throughout the design process we engaged in card sorting, stakeholder mapping, user interview, and cognitive walkthroughs.",
                             "During the development of VAM, the team at the Center for New Data met with potential users approximately every few weeks to show them progress on the web application and get their feedback. During these sessions, the Center for New Data conducted a user interview and cognitive walkthrough.",
                             "Using user-centered design techniques such as the cognitive walkthrough allowed us to discover that certain functionalities, such as moving up a geographic level were not intuitive or easily discoverable to our users.",
                             "Additionally, conducting frequent user interviews allowed us to be able to priorize the design and development of certain features over others. For example, our users suggested that they would like to be able to identify census tracts that met certain thresholds. Using this insight from  our interviews I designed and developed a custom feature to allow our users achieve this task."], 
                     images: [
                        {
                            url: "DesignResearch1.png",
                            alt: "Synthesis of stakeholder research. After initial user interviews I grouped stakeholders into three groups to help the team prioritize features."
                        },
                        {
                            url: "DesignResearch3.png",
                            alt: "Moodboard of different images used in the intial research phase"
                        },
                        {
                            url: "DesignResearch2.png",
                            alt: "Outcome of a card sorting activity"
                        }
                    ]},
                    {name: 'sketching', 
                    descr: ['I always start by sketching on paper. Sketching on paper has the potential to invite conversation from co-designers such as users, stakeholders, and other team members.'], 
                    images: [
                        {
                            url: "Sketch1.png",
                            alt: "Sketch of isolating and ranking different geographies"
                        },
                        {
                            url: "Sketch2.png",
                            alt: "Sketch of ranking a set of geographies across a variety of variables"
                        }
                    ]},
                    {name: 'data', 
                     descr: ["Designing for a complex, interactive data visualization such as VAM necessitates the development of a database to support this type of visualization. Working with our data engineer, product manager, and partners, I designed the table schemas for the project.",
                             "I also researched data availablity for our data engineer. My previous experience working in public policy and data analytics familiarized me with common publically available data sources such as the American Community Survey and TIGER shape files from the US Census Bureau. I used this knowledge to help guide the data engineer in the development of the database."],
                    images: [{
                        url: "DatabaseDesign.png",
                        alt: "Relational table schema I designed for VAM. The two tables shown in this image integrate shape file geometries with other variables at a geographic level.",
                    }]},
                    {name: 'prototyping', 
                     descr: ["Prototyping was mostly done in Figma with initial visualizations created in R and then imported into Figma as SVGs.",
                             "As both a designer and frontend developer on the project there were weeks where I worked mostly in Figma to design work and then there were weeks where I worked mostly in code. Initially, before VAM entered the development phase, I used Figma was a great tool to communicate with the rest of the team and get feedback on the design from the Center for New Data's partners.",
                             "After VAM entered development, I continued to use Figma to mock-up how users would interact with new features. We would show these mock-ups to partners and get feedback on the design before implementing the feature in code.",
                             "Additionally, I used Figma to create a design system for the project. I created a typographic system, color system, and components and variants that utilized these systems to create a consistent visual language across the application."],  
                     images: [
                        {
                            url: "VisualSystem1.png",
                            alt: "The image shows two types of components, a radio group, and a checkbox group. Four different versions, selected vs. non-selected and enabled vs. disabled start to create a component system."
                        },
                        {
                            url: "VisualSystem2.png",
                            alt: "The image to shows the iterative process of designing a slider component."
                        }
                    ]},
                    {name: 'interaction research',
                     descr: ["I designed specific components in Figma like the components used in Material UI as that was the base library I used to code interactions between the components and the visualization.",
                             "I also engaged in user interface research when we learned that it was challenging for several of our users to navigate back to the main view. During this research step, I researched how other mapping software handled a similar interaction and then proposed both short- and long-term changes to the visualization. As a both a designer and developer, I'm uniquely positioned to be able to assist in the overall planning of a project because I can propose design and development timelines."],
                     images: [
                        {
                            url: "UXResearch.png",
                            alt: "Proposed changes to a user interaction after receiving feedback from users about how to reset the view. I assembled a short slide deck on how other applications had navigated similar circumstances and the interaction solutions that they employed."
                        }
                    ]}
                ]
    },
    {title: "Vaultbreakers",
     page: "Vaultbreakers",
     client: {name: "Valentino Mori", link: "https://www.valentinomori.com/"},
     year: 2024,
     iiba: [{year: 2023, longlist: false}, {year: 2022, longlist: false}],
     role: ["Information designer"],
     design: ["Information design", "Graphic design", "Game design"],
     tools: ["Illustrator", "Indesign"],
     tags: ["#illustrator", "#indesign", "#information-design", "#graphic-design", "#game-design"],
     mainImage: {
        url: "Assets_Backstab card.png",
        alt: "Vaultbreakers Backstab card. The card shows a character with a knife in their hand and a player can use this card to backstab opponents."
     },
    designProcess: [{
        name: "summary", 
        descr: ["As I consultant on Vaultbreakers, I worked with the game designer to create a series of cards that would be used in the game. The game is a cooperative-competitive card game where players work together to break into a vault and steal the loot inside. The game is designed to be played by 2-4 players and takes about 45 minutes to play.",
                "I generated sketches for how the information could be displayed on the cards, suggested typographic changes to make the cards readable and consistent, gave feedback on color choices, in addition to creating several components for the printed game."],
        images: [{url: "Assets_Vaultbreakers Example Cards.png",
                  alt: "Vaultbreakers Backstab card. The card shows a character with a knife in their hand and a player can use this card to backstab opponents."}]
    },
    {
        name: "information architecture",
        descr: ["One of my first steps as a consultant on the project was to present multiple ways of displaying the information on the cards. The game designer knew that he would be hiring an illustrator for card, so white boxes represent those spaces."],
        images: [{url: "sketch.png",
                  alt: "Image shows an initial possible layout for the card."},
                  {url: "sketch2.png",
                  alt: "Image shows an initial possible layout for the card."},
                  {url: "sketch3.png",
                  alt: "Image shows an initial possible layout for the card."},
                  {url: "sketch4.png",
                  alt: "Image shows an initial possible layout for the card."},
                  {url: "sketch5.png",
                  alt: "Image shows an initial possible layout for the card."}
                ]
        },
        {name: "visual language",
         descr: ["I worked with the game designer to develop a consistent visual language for the game. I worked with the game designer and illustrator to create the color palette for the game",
                 "Throughout the design process, I am always aware of accessibility. The cards are designed to have a high contrast between the text and background so that they are easily readable and the type is set at a point size of 10."],
         images: [{url: "Assets_VBColorPalette.png",
                   alt: "Color palette for the game Vaultbreakers."}]},
        {name: "iteration",
         descr: ["I worked with the game designer to iterate on the information architecture of the cards and develop a consistent visual language for the game.",
                 "When play testing the game revealed that it would be helpful for users to be able to distinguish between two types of action cards, I suggested different ways of visually differentiating the cards.",
                 "The first card design with the exclamation point icon is the final design. I suggested that the game designer use the first design because I feared that the border changes would be too subtle and players would still have a hard time visually differentiating between the two types of actions."],
         images: [{url: "Assets_Iterations of Surprise Actions.png",
                   alt: "Three versions of a 'Suprise Action' card."}]
        },
        {name: "instructional design",
         descr: ["The final deliverable that I produced for this project is the Vaultbreakers instruction manual. I created additional assets for the manual in Illustrator and used Indesign to develop the page spreads.",
                "While designing the instructions, I discovered the typeface used on the cards, CC Marian Churchill, was only available in uppercase. While uppercase works well for short and simple passages, such as on cards, it is much hard to read in blocks of text that are commonly present in instruction manuals.",
                "I tested and selected a new typeface, Josefin Sans, size 10, for the body text of the instruction manual. The headers are set in CC Marian Churchill to extend the visual language of the cards to the instruction manual."],
         images: [{url: "VaultBreakersInstructions4.png",
                   alt: "Page four of the instruction manual for Vaultbreakers."}]
        }
    ]
    },
    {title: "High Ground Design Conversations",
     page: "High-Ground-Design-Conversations",
     client: {name: "High Ground Design Conversations Conference", link: "https://highgrounddesignconversations.com"},
     links: [{url: "https://highgrounddesignconversations.com", text: "Explore the website"}],
     year: 2024,
     mainImage: {url: "mainImage.png",
               alt: "The landing page for the High Ground Design Conversations Conference."},
     tags: ["#react", "#javascript", "#web-design", "#web-development"],
     tools: ["React", "Material-UI"],
     design: ["Web Design", "UI Design"],
     designProcess: [{name: 'summary', 
                    descr: ["The High Ground Design Conversations conference contracted me to digitize their conference materials.", 
                            "Using paper handouts from previous years, I translated the printed documents to a digital experience. Careful attention was paid to the typography and visually hierarchy as many of the attendees are graphic designers by trade.",
                            "I chose to build the website from scratch instead of using a website template builder to preserve the visual identity the conference had used in the past. The website was developed using React and Material-UI.",
                            "Data were stored in created a simple database in Googlesheets to store the conference schedule and speaker information. This simple and lightweight solutions makes updates fast and effortless."],
                    images: [
                      {
                          url: "mainImage.png",
                          alt: "The landing page for the High Ground Design Conversations Conference."
                      }]
                  }
              ]
    },
    {
        title: "Algorithmically Fair?", 
        page: "Algorithmically-Fair", 
        year: 2022,
        mainImage: {url: "image1.jpg",
                    alt: "Three dimensional data visualization comparing black recidivism rates to white recidivism rates"},
        tags: ["#illustrator", "#acrylic", "#public-policy",  "#r", "#data-art", "#data-physicalization", "#data-visualization"],
        tools: ["Adobe Illustrator", "R", "Laser cutter"],
        design: ["Information design"],
        medium: ["Acrylic", "Radial LED Light Panel"],
        role: ["Data visualization designer", "Data analyst"],
        summary: ["Algorithmically fair? is a data physicalization project that visualizations disparate rates of a commonly used recidivism algorithm in the United States. Through simple pie charts, the project compares how the error rates of the algorithm differ for Black and White defendants. The physical forms obstruct part of the visualizations; the audience must physically engage with the artifact to reveal the rates. The third dimension, the form's height, indicates the number of people affected by these differing rates. The use of light draws the audience’s attention to the error rate, highlighting the discrepancy between Black and White defendants, and asks the audience to think critically about what it means for an algorithm to be fair."],
        iiba: [{year: 2023, longlist: true}, {year: 2022, longlist: false}],
        designProcess: [
            {name: 'artist statement', 
            descr: ["This work critiques the use of risk assessment tools in the criminal justice system by asking an audience to reflect on the impacts of the COMPAS recidivism algorithm by engaging with three-dimensional panopticon forms representing disparate impacts. Algorithmically Fair? was inspired by two models of surveillance — the capture model and the surveillance model.",
            "The surveillance model is often invoked using the visual metaphor of the panopticon, designed by Jeremy Bentham. Bentham arranged the prison cells around a centralized guard tower in his architectural plans. An intermittent light reminds prisoners that they are being watched, even if no one is there. Bentham's radial architectural design inspired the radial coordinate system in this design.",
            // "Philip Agre's theoretical model of data capture systems motivated the informational content of this work. Agre theorizes that capturing and storing human activity in information systems encourages individuals to change their behavior and reorient toward the system. Given specific data inputs, the COMPAS recidivism algorithm takes data inputs of an individual defendant. It returns a risk score from 1-10, representing the defendant's likelihood of returning to the system. Although predictive algorithms such as COMPAS are known to have low overall predictive accuracy, these risk scores are used to inform decision-making, orienting judges and other decision-makers towards the system.",
            // "Algorithmically Fair? comments on the capture model by visualizing two standard measures of algorithmic fairness — the false positive rate and the false negative rate — using the actual and predictive outcomes from the model. The false positive rate is the probability of falsely rejecting the truth, simply triggering a false alarm. In contrast, the false negative rate is the failure to raise a valid alarm. However, in a criminal justice context, triggering a false alarm can result in additional sentencing time or setting a higher bail. Additionally, failing to raise a valid alarm results in future offenders going free. Although developers of COMPAS and proponents of criminal risk assessment tools have used other definitions of algorithmic accuracy to claim that the COMPAS recidivism algorithm is fair, this artifact challenges this notion.",
            // "The physical panopticon models obstruct the fairness visualizations; the audience must physically engage with the artifact components to reveal the rates. While the rates indicate the disparate impacts of the algorithm on Black and White defendants; however, rates do not inform readers about the number of people affected. I designed the panopticon models' height to indicate the number of affected people so that a reader can compare the multiple metrics simultaneously.",
            // "Culturally, red is of ten associated with words such as stop, warning, harm, and error. The incorrect predictions, in red, were also printed on translucent acrylic compared to the correct predictions, which were printed on black opaque acrylic.",
            // "Light is used in the piece metaphorically and aesthetically. Light plays an interesting role in this piece metaphorically. In Bentham's panopticon, the lighted guard tower encouraged self-policing behaviors. However, in Algorithmically Fair?, light draws the viewer's eye and highlights the frequency of algorithmic error. Additionally, the predominantly black form representing algorithmic inequity makes visual reference to a black box algorithm. Lighting this form from the inside out to elucidate viewers on algorithmic bias symbolically reverses the role of light plays in these panopticon forms."
            ],
            images: [{url: "image1.jpg",
                      alt: "Three dimensional data visualization comparing black recidivism rates to white recidivism rates"}]},
            {name: 'sketching', 
            descr: ["I started by sketching out some initial ideas and design for a physical data visualization. I was interested in play with a cylindrical form because the form is representative in nature of both a database and Bentham's panopticon."],
            images: [
                {url:"PXL_20221214_132923256.jpg",
                    alt: "Initial sketch conveying the idea of physical form that represents a database",
                    },
                    {url:"PXL_20221214_132856202.jpg",
                    alt: "A second sketch conveying the idea of physical form that represents a database",
                   },
                    {url:"PXL_20221213_220237602.jpg",
                    alt: "Initial sketch showing how a third dimension could be used to show the number of people",
                   }]},
            {name: 'prototyping', 
                descr: ["Next, I processed and normalized the data in R and started some initial prototype of cylindrical laser cut forms that could be stacked."], 
            images:  [{url: "PXL_20221214_133321902.jpg",
                       alt: "Initial prototype of layered pie charts",
                       }, 
                       {url: "PXL_20221202_221919552.jpg",
                        alt: "Initial prototype of light inside a layered pie chart",
                       }]},
            {name: 'final', descr: [],
            images: [
                // {url: "image1.jpg",
                // alt: "Three dimensional data visualization comparing black recidivism rates to white recidivism rates",
                // size: "big"},
                {url: "PXL_20221207_173728791.PORTRAIT.jpg",
                alt: "Birdseye view of the Algorithmically Fair?",
                }, 
                {url: "PXL_20221207_173759492.PORTRAIT.jpg",
                alt: "Close-up of one data visualization's physical form on the LED radial light",
                }]}
            ]
    },
    {title: "Intesa SanPaolo Knowledge Network", 
     page: "Intesa-SanPaolo-Knowledge-Network", 
     client: {name: "Instesa SanPaolo", link: "https://www.intesasanpaolo.com/"},
     year: 2022, 
     iiba: [{year: 2023, longlist: false}, {year: 2022, longlist: true}],
     mainImage: {url: "analyze-by-area-domain-gender.png", 
                alt: "Image of network analysis across a knowledge network by area, domain, and gender"},
     tags: ["#d3-js", "#pixi-js", "#react", "#data-visualization", "#interface-design", "#interaction-design", "#python", "#user-interaction"],
     tools: ["D3.js", "Pixi.js", "React", "Python"],
     design: ["Information design", "Interaction design"],
     role: ["Data visualization designer", "Data visualization developer", "Data analyst"],
     designProcess: [{name: "Summary",
                      descr: ["The Knowledge Networks iteractive visualization was a product created Intesa SanPaolo to help the bank better understand how different knowledge proficiencies were distributed among their employees.",
                             "The team designed and developed three pages to help the Intesa team better understand knowledge proficiencies and distributions: Explore, Analyze, and Simulate.",
                             "The Explore page allows users to group by different categories and filter to get a better sense of demographic distributions.",
                             "The Analyze page allows users to visualize employees in relation to their skill proficiency area.",
                             "The Simulate page allows users to simulate a scenario, such as a merger or acquisition, where Intesa SanPaolo's employee base expands. The user can select what distribution of age and gender they wish to simulate."],
                      videos: [{
                        url: "ClusterByFeature.mp4", alt: "A video showing how the user can cluster by different attributes and the circle packing diagram updates."}]},
                    {name: "Wireframing",
                     descr: ["Before starting development, the team created wireframes for each of the different pages. This low-fi wireframe shows how the interface will divided into different regions with specific features and functionalities.",
                            "Like many other interfaces, a navigational bar across the top allows users to navigate between pages. A query panel on the left-side allows users to be able to filter by specific characteristics and identify specific areas of the visualization. Controls for the visualization are in the lower-right hand corner of the interface and a draggable View By panel is located on the right-hand side of the page."],
                      images: [{url: "InterfaceSketch.png", alt: "Wireframe of the Explore page."}]},
                    {name: 'Heuristic evaluation', 
                     descr: ["Towards the end of the project, one of the design methods I frequently engage in is heuristic evaluation. Heuristic evaluation is an informal usability test often performed by the design-development team. Heuristics are often referred to as 'rules of thumb' or best practices.",
                             "Design researchers have suggested many different heuristics and heuristic sets. Two heuristics that I frequently use in interface design are 'visibility system status' and 'match between the system and the real world.'",
                             "Data visualization researchers have suggested additional heuristics that are specific to information design such as 'accessible color palettes.'"], 
                     images: [{url: "heuristic_evaluation.png", alt: "An image showing data entry of a participant's heuristic evaluation."}]},
                    {name: "Final design", descr: ["The first video on this page shows some of the different features on the Analyze page. First, a user selectes a specific knowledge area that they are interested in exploring.",
                                                   "Once a user selects a domain, all the employees that have knowledge within the domain are shown. These employees can be filtered by region, position, age group, gender, and skill.",
                                                   "The visualization shows the distribution of employee knowledge on a likert scale between one and five. Users can then view other attributes about the employee."], videos: [{
                        url: "AnalyzePage.mp4", alt: ""
                    }]}]
    // brief: [],
    // summary: [],
    // data: [],
    // methodology: [],
    // artistStatement: [],
    // sketches: [],
    // prototype: [],
    // final: []
    },
    // {title: "Billy", 
    // page: "Billy", 
    // year: 2022, 
    // mainImage: {
    //     url: "/assets/portfolio/billy/Images/HiFi-V2/Login (1).jpg",
    //     alt:"Image of login page for digitial wallet called Billy"}, 
    // tags: ["#interaction-design", "#user-interface", "#figma", "#user-experience", "#user-interaction"],
    // tools: ["Figma"],
    // design: [],
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
        page: "Black-Data", 
        title: "Black Data", 
        year: 2020,
        mainImage: {
            url: "20201122_142250.jpg", 
            alt:"Black cube with machine learning knitting pattern in rainbow yarn"}, 
        tags: ["#data-art", "#data-physicalization", "#ceramics", "#fiber", "#fine-art"],
        iiba: [{year: 2023, longlist: false}, {year: 2022, longlist: false}],
        medium: ["Yarn", "Beads", "Clay"],
            designProcess: [{
            name: "artist statement", 
            descr: ["In Black Data, I play with the idea of transparency and reproducibility in machine learning algorithms. The juxtaposition of the black box in contrast to the white box is intended to make viewers question what a white box algorithm would look like and what the research process would entail. Machine learning algorithms are starting to be employed more regularly, especially in public policy settings, but frequently lack transparency and accountability.",
                    "The output of the black box is part of the Sky Knit pattern collection. The Sky Knit patterns were trained using a recurrent neural network — a black box machine learning algorithm. Sky Knit patterns are hard to follow and require a lot of improvisation, making them very challenging to reproduce. In contrast, the output of the white box algorithm is a simple pattern which can be found here. The white box algorithm lacks color and sparkle, but it's basic and straightforward."],
            images: [{url: "20201122_142017.jpg",
                alt: "Black cube with machine learning knitting pattern in rainbow yarn"}, 
            {url: "20201122_142356.jpg",
                alt: "Black cube with machine learning knitting pattern in rainbow yarn close up"}, 
            {url: "20201124_173636 edited.jpg",
                alt: "White cube with knitting pattern in white yarn"}]
        }]          
    },
    {
        title: "Intesa SanPaolo Processes Map", 
        page: "Intesa-SanPaolo-Processes-Map", 
        client: {name: "Banca Intesa SanPaolo", link: "https://www.intesasanpaolo.com/"},
        year: 2024,
        iiba: [{year: 2023, longlist: true}, {year: 2022, longlist: false}], 
        // links: [{url: "https://nu-center-for-design.github.io/banca-process/", text: "Explore the application"}],
        mainImage: {
            url: "circle-packing-full-screen.png", 
            alt: "A data visualization showing multiple levels of organizational hierarchy."}, 
        tags: ["#d3-js", "#pixi-js", "#react", "#data-visualization", "#interaction-design", "#interface-design", "#python", "#javascript"],
        tools: ["D3.js", "Pixi.js", "React", "Python"],
        design: ["Information design", "Interaction design"],
        role: ["Data visualization designer", "Data visualization developer", "Project manager", "Data engineer"],
        designProcess: [
            {name: 'summary', 
             descr: ["Processes Map is an exploratory business analytics application that allows the organization to explore and audit risk management data to understand and manage data complexity. The application affords users a visual understanding of how risk is distributed across organizational structures and how activities are distributed among different actors at the company. Additionally, users can identify activities and associated risks without appropriate controls and develop plans to redistribute workflows.",
                     "The power behind the design of this application is its minimal interface design that facilitates user interaction. A query status pane allows users to filter, zoom, and highlight specific attributes of the visualizations. Additionally, navigational controls create a visualization-first user experience by hiding all non-visualization components on the screen.",
                     "This app enables the user to explore and audit risk management data at the enterprise level, through different views to understand and manage the complexity. The application equips users to understand the distribution of risk across the company, understand the links between activities, actors, and organizational structure, identify risks without adequate controls, and develop plans to redistribute workloads.",
                    //  "The Banca Intesa Processes application was developed over the course of three months with a team of five members. The application was developed using the React framework. Static visualization was designed in Illustrator and Raw Graphs.io. Finally, D3.js and Pixi.js were used to create interactive visualizations for the application."
                ],
            videos: [
                {url: "circlepackingInteraction.mp4"}
                ]
            },
            {name: 'visual research',
             descr: ["The Banca Intesa Processes application was developed over the course of three months with a team of five members. The first step was researching and presenting different visual forms to a client user group.",
                    "The team considered other interfaces that relied on forms that show hierarchies within the data such as a treemap."],
             images: [
                      {url: "visual-research2.jpg",
                       alt: "Divine Comedy: https://divinecomedy.digital/#/eng/viz"},
                      {url: "visual-research1.jpg",
                       alt: "Show your stripes: https://showyourstripes.info/s/globe/"},
                      {url: "visual-research3.jpg",
                       alt: "Luciano Baldessari: http://baldessari.densitydesign.org/persone/"}]
            },
            {name: 'static sketching',
             descr: ["The team sketched out different ideas for the on paper and digitally. The team relied on RawGraphs.io to create digital data sketches."],
             images: [{url: "sketch1.jpg",
                       alt: "A sketch of a dendrogram showing hierarchies within the data."},
                      {url: "sketch2.jpg",
                       alt: "Connections between an actor, the applications the use, and the activities they are in charge of"},
                      {url: "sketch3.jpg",
                       alt: "A sketch of a circle packing diagram showing hierarchy."},
                      {url: "sketch4.jpg",
                       alt: "Network showing connections between actors and activities."
                }]},
            {name: 'data',
             descr: ['The data were stored in an Excel spreadsheet. Each sheet in the Excel document represented a table that was related to other tables in the spreadsheet. The team was not given a data dictionary or documentation, making it challenging to interpret relationships between the tables.',
                    'One of the ways that the team at the Center for Design navigated this challenge was creating diagrams (e.g., ERD) to be able to visually communicate how we were interpreting the relationships.',
                    'Once the data structure was understood, I cleaned the data in Python and exported the data as a JSON object.'],
             images: [{url: "Data Model.jpg",
                        alt: "A Entity-Relationship Diagram (ERD) shows show the Center for Design's interpretation of the relationships between variables in tables."},
                        {url: "data_modeling.jpg",
                        alt: "A diagram communicating different interpretations of the data relationships to help clarify the correct relationship."}]
            },
            {name: 'interactive sketching', 
             descr: ['We used Observable notebooks to imagine how a user might interact with a visualization. Using Observable allowed the team to be able to demonstrate several user interactions to our client and get feedback on the usablity and form without investing a large amount of time in the development process.'],
             videos: [{url: "sketchinginteractionsobservable.mp4",
                       alt: "An Observable notebook showing a sketch of a potential visualization for the application."}]}
            ],
            // final: {
            //     images: [
            //         {url: "circle-packing-full-view.png",
            //         alt: "Circle packing diagram in that shows nested level of data hierarchies",
            //         size: "small"
            //         },
            //         {url: "circle-packing-zoomed-in.png",
            //         alt: "A zoomed in version of the circle packing diagram showing the zoom and tooltip capabilities of the application",
            //         size: "small"
            //         },
            //         {url: "circle-packing-activities-identified.png",
            //         alt: "A zoomed in version of the circle packing diagram showing a feature that allows the user to identify specific data attributes",
            //         size: "small"
            //         },
            //         {url: "network-full-screen.png",
            //         alt: "A network visualization showing organizational connections between actors, activities, risks and controls",
            //         size: "small"
            //         },
            //         {url: "network-freeze-feature.png",
            //         alt: "A network visualization shows how the user can 'freeze' portions of the network and be able to use the tooltip to interact with other parts",
            //         size: "small"
            //         },
            //         {url: "network-additional-features-shown.png",
            //         alt: "Additional features such as the ability to change risk type are shown in this visualization",
            //         size: "small"
            //         }
            //     ]
            // }
    },
    {
        title: "Meta", 
        year: 2015, 
        page: "Meta", 
        mainImage: {
            url: "keyboardhands3_slow.gif", 
            alt: "Typing out code with pink fingers"}, 
        tags: ["#data-art", "#data-visualization", "#r"],
        tools: ["#r"],
        design: ["Data visualization"],
        designProcess: [{name: 'artist statement', 
                         descr: ["The installation pictured below explores the social construction of data and how data can be manipulated through code. The installation shows a snippet of the physical code used to extract RGB values from a corpus of Georgia O'Keefe paintings. I downloaded 60 images of famous O'Keefe paintings and used R to extract the RGB values of each pixel in each painting. I visualized the values as histograms for each painting. The histograms and GIF displayed below were installed at Wesleyan University's Quantitative Analysis Center, the physical space where I utilized the university's resources to learn and practice quantitative analysis. The GIF plays off of a common programming technique known as a loop."],
                         images: [{url: "keyboardhands3_slow.gif",
                                    alt: "GIF of hands typing out code with physical code layered in the background"},
                                    {url:"histograms.jpg",
                                    alt: "Image of histogram installation"},
                                    {url:"histogram_computer.jpg",
                                    alt: "Image of additional histograms shown on computer screens"},
                                    {url:"computer.jpg",
                                    alt: "Computers at Wesleyan University's Quantitative Analysis Center"}]
        }]
    },
    {   
        title: "Visualizing Version Control", 
        page: "Visualizing-Version-Control", 
        year: 2021, 
        links: [{
            url: "Visual Version Control.pdf", text: "Link to PDF"
        }],
        mainImage: {
            url: "version-control-system.jpg", 
            alt:"Visualizing Version Control"}, 
        tags: ["#graphic-design", "#information-design", "#system-design", "#illustrator"],
        tools: ["#illustrator"],
        design: ["Information design", "Graphic design"],
        role: ["Information designer"],
        designProcess: [
            {name: "summary", 
             descr: ["Version control for code is a handy tool, but it can be challenging to get started. This visualization aims to help new users of code version control understand the steps involved in the version control cycle."],
             images: [{
                    url: "final_design.jpg",
                    alt: ""}]
            }
        ]
    },
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
    // tags: ["#d3-js", "#illustrator", "#graphic-design", "#r"],
    // tools: ["D3.js", "R"],
    // design: ["Information design"],
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
    // {
    //     title: "Equitable Teams", 
    //     page: "Equitable-Teams", 
    //     year: 2022, 
    //     links: [
    //         {url: "assets/portfolio/equitable-teams/team_strengths.pdf", text: "Link to PDF"}
    //     ],
    //     mainImage: {
    //         url: "assets/portfolio/equitable-teams/team_strengths_zoom.svg", 
    //         alt: "Data Visualization showing the combined strengths of individuals"}, 
    //     tags: ["#information-design", "#graphic-design", "#data-visualization", "#r", "#illustrator"],
    //     design: ["Information Design", "Graphic design"],
    //     tools: ["Adobe Illustrator", "R"],
    //     role: ["Data visualization designer"],
    //     summary: ["The goal of this project was to use data visualization to assess how students could be partnered to create equitable teams.",
    //               "Students were asked to self-assess their skills from using a scale of beginner to advanced across six dimensions: programming, data, graphic design, interaction design, storytelling, and leadership and management skills.",
    //               "The final design is based off of the form known as a radar chart. However, the charts show overlap between the students across the six dimensions. The larger the form is in the radar chart, the more skilled the student pair is. The visualization is designed to show pairs where students combined competencies area the strongest team rather than students which may have overlapping compentencies."],
    //     designProcess: {
    //         summary: ["The equitable teams project was developed over the course of two weeks. The main tools used to create the visualization were R and Adobe Illustrator. R was used to generate the initial forms, which were then edited and modified in Adobe Illustrator."],
    //         sketches: {
    //             images: [{
    //                 url: "assets/portfolio/equitable-teams/design-process-1.png",
    //                 alt: "Sketch showing initial design of visualization",
    //                 size: "small"
    //             },
    //             {
    //                 url: "assets/portfolio/equitable-teams/design-process-2.png",
    //                 alt: "Sketch showing initial design of visualization",
    //                 size: "small"
    //             }
    //             ]
    //         },
    //         prototype: {
    //             images: [
    //                 {
    //                     url: "assets/portfolio/equitable-teams/1x/Artboard 1-100.jpg",
    //                     alt: "Initial visualization created in R",
    //                     size: "small"
    //                 },
    //                 {
    //                     url: "assets/portfolio/equitable-teams/1x/Artboard 2-100.jpg",
    //                     alt: "Reducing the information so it is less overwhelming to the user",
    //                     size: "small"
    //                 },
    //                 {
    //                     url: "assets/portfolio/equitable-teams/1x/Artboard 3-100.jpg",
    //                     alt: "Testing how individuals could overlap to create new forms",
    //                     size: "small"
    //                 },
    //                 {
    //                     url: "assets/portfolio/equitable-teams/1x/Artboard 6-100.jpg",
    //                     alt: "Testing how individuals could overlap to create new forms",
    //                     size: "small"
    //                 },
    //                 {
    //                     url: "assets/portfolio/equitable-teams/1x/Artboard 7-100.jpg",
    //                     alt: "Testing how individuals could overlap to create new forms",
    //                     size: "small"
    //                 },
    //                 {
    //                     url: "assets/portfolio/equitable-teams/1x/Artboard 14-100.jpg",
    //                     alt: "Testing how individuals could overlap with solid forms to show collective strengths",
    //                     size: "small"
    //                 }
    //             ]
    //         },
    //         final: {
    //             images: [{
    //                 url: "assets/portfolio/equitable-teams/team_strengths_zoom.svg", 
    //                 // alt: "Data Visualization showing the combined strengths of individuals",
    //                 size: "big"}]
    //         }
    //     }
    // },
    // {title: "Ceramics Collection", 
    // page: "Ceramics-Collection", 
    // year: 2020, 
    // mainImage: {
    //     url: "/assets/portfolio/ceramics/20201028_074420.jpg", 
    //     alt: "Serving bowl in Spodumene and Turner White"
    // }, 
    // tags: ["#ceramics", "#collection", "#fine-art"],
    // medium: ["Clay", "Glaze"],
    // summary: [],
    // artistStatement: [],
    // sketches: [],
    // prototype: [],
    // final: []
    // },
    // {
    //     title: "Visual Ramblings",
    //     page: "Visual-Ramblings",
    //     client: {name: "Roanoke Rambler", link: "https://www.roanokerambler.com/"},
    //     year: 2023, 
    //     mainImage: {
    //         url: "/assets/portfolio/visual-ramblings/Incarceration/1_race_incarceration@2x-100.jpg",
    //         alt: "Incarceration by neighborhood"
    //     },
    //     tags: ["#data-journalism", "#r", "#mapping", "#data-visualization", "#illustrator"],
    //     tools: ["R", "Adobe Illustrator"],
    //     design: ["Data visualization", "Data journalism"],
    //     role: ["Data visualization designer"],
    //     summary: ["Visual Ramblings is a collection of data visualizations designed for the Roanoke Rambler, an independent, investigative, literary magazine in Roanoke, Virginia. The visualizations focus on a variety of topics to support across politics and policy.", "In some cases, the data were provided by the editory of the Rambler, but in others the data were sourced from a variety of reputable sources. After the data were identified, the statistical software R was used to create the initial visual form and it was edited in and edited in Adobe Illustrator."],
    //     collection: [{descr: "incarceration in roanoke city", 
    //                   images: [{url: "/assets/portfolio/visual-ramblings/Incarceration/1_race_incarceration@2x-100.jpg", 
    //                             alt: "Map of Roanoke, Virginia showing incarceration rates",
    //                             caption: ""},
    //                             {url: "/assets/portfolio/visual-ramblings/Incarceration/2a_race_incarceration_highlight@2x-100.jpg", 
    //                             alt: "Map of Roanoke, Virginia showing incarceration rates",
    //                             caption: ""}
    //                         ]},
    //                 {descr: "state senate race", images: [{url: "/assets/portfolio/visual-ramblings/State Senate Race 2023/Version 1.png", alt: "", caption: "Visualization version 1"},
    //                                                       {url: "/assets/portfolio/visual-ramblings/State Senate Race 2023/Version 2.png", alt: "", caption: "Visualization version 2"},
    //                                                       {url: "/assets/portfolio/visual-ramblings/State Senate Race 2023/Version 3.png", alt: "", caption: "Visualization version 3"},
    //                                                       {url: "/assets/portfolio/visual-ramblings/State Senate Race 2023/Version 4.png", alt: "", caption: "Visualization version 4"}]}
    //                 ]
    // },
    {
        title: "Migration is Natural", 
        page: "Migration-Is-Natural",
        year: 2022, 
        iiba: [{year: 2023, longlist: false}, {year: 2022, longlist: false}],
        links: [{url: "https://joliholmes.com/team-migration/", text: "Explore the application"},
                {url: "https://www.figma.com/proto/NwGNVHkgGHQXyLndwRY8d9/Design-studio-2?node-id=176%3A8&starting-point-node-id=176%3A8", text: "Explore the prototype"}],
        mainImage: {
            url: "path-to-citizenship-papua.jpg",
            alt:"Migration is Natural"}, 
        tags: ["#information-design", "#interaction-design", "#r", "#figma", "#illustrator", "#d3-js", "#svelte", "#typescript"],
        tools: ["R", "Adobe Illustrator", "D3.js", "Svelte", "Figma"],
        design: ["Information design", "Interaction design", "Graphic design"],
        role: ["Data visualization designer", "Project manager", "Data analyst"],
        summary: [
                    "Migration is Natural uses data from a global citizen database to create an interactive visualization that explores different countries citizenship paths.",
                    "It employs the visual metaphor of a butterfly to convey that migration is a natural phenomenon frequently witnessed in the natural world. The visual inspiration for the metaphor is from artist, organizater, and activist, Favianna Rodriguez, who created a series called 'Migration is Beautiful' in 2012.",
                    "The veins of the butterfly detail different paths a user could take to acquire migration after answering some simple questions such as, 'Are your parents citizens of the country you are interested in migrating to?', 'Were you born in the country you are interested in migrating to?', or 'Are you married?'"],
        data: ["This project combines data from two resources. The first is the global citizenship database maintained by the European University Institute. The database standardizes citizenship acquisition methods across 190 countries. The database identifies 28 ways through which migrants can obtain citizenship. It was last updated on January 1st, 2020. This data set was challenging to work with because the data are all categorical, which is often harder to visualize than numeric data."],
        designProcess: [{name: "summary", 
                        descr: ["The team developed the final application over the course of the next several weeks. The application was developed using the Svelte framework. Static visualization was designed in Illustrator and dynamic visualization was design in Figma. Finally, D3.js was used to create interactive visualizations for the application.",
                                ],
                        images: [{url: "path-to-citizenship-papua.jpg",
                                  alt:"Migration is Natural"}]
                        },
                        {name: "design research", descr: [], images: [
                            {
                                url: "moodboard.png",
                                alt: "Moodboard of different images used in the intial research phase of Migration is Natural"
                            },
                            {
                                url: "2x/Inspiration1@2x-100.jpg",
                                alt: "A map showing the migratory patterns of birds"
                            },
                            {
                                url: "2x/Inspiration2@2x-100.jpg",
                                alt: "A map showing the migratory patterns of birds"
                            },
                            {
                                url: "2x/Inspiration3@2x-100.jpg",
                                alt: "A map showing the migratory patterns of whales"
                            },
                            {
                                url: "2x/Inspiration4@2x-100.jpg",
                                alt: "An information visualization showing the different paths to the 2016 presidency"
                            },
                            {
                                url: "2x/Inspiration5@2x-100.jpg",
                                alt: "An information visualization showing path flows"
                            }
                        ]},
                        {name: "sketching", descr: [], images: [
                            {
                                url: "design-process-1.png",
                                alt: "Initial sketch showing underlying logic to the data"
                            },
                            {
                                url: "design-process-2.png",
                                alt: "Initial sketch showing how a path could be formed from the data"
                            },
                            {
                                url: "design-process-3.png",
                                alt: "Initial sketch adding more detail to potential data paths"
                            }
                        ] },
                        {name: "prototyping", descr: [], images: [
                            {
                                url: "design-process-4.png",
                                alt: ""},
                            {
                                url: "design-process-5.png",
                                alt: ""},
                            {
                                url: "design-process-6.png",
                                alt: ""},
                            {
                                url: "design-process-7.png",
                                alt: ""},
                            {
                                url: "design-process-8.png",
                                alt: ""},
                            {
                                url: "https://www.figma.com/proto/NwGNVHkgGHQXyLndwRY8d9/Design-studio-2?node-id=176%3A8&starting-point-node-id=176%3A8",
                                link: "https://www.figma.com/proto/NwGNVHkgGHQXyLndwRY8d9/Design-studio-2?node-id=176%3A8&starting-point-node-id=176%3A8",
                                alt: "The team used figma to prototype the application"
                            }
                    ] },
                    {name: "development", descr: [], images: [
                        {
                            url: "https://joliholmes.com/team-migration/",
                            link: "https://joliholmes.com/team-migration/",
                            alt: "Interactive applications showing the initial map"
                        }] }
                    ]
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
    // role: ["Interaction designer"],
    // brief: [],
    // summary: [],
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
    // tags: ["#service-design", "#system-design", "#graphic-design", "#illustrator"],
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
    //     tags: ['#data-journalism', '#react', '#r', '#figma', '#illustrator', '#d3-js'],
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

export const designFilters = ["#data-art", "#data-journalism", "#data-physicalization", "#data-visualization", "#information-design",
"#interaction-design", "#interface-design", "#game-design", "#graphic-design", "#user-experience", "#user-interaction" , "#web-design", "#web-development"];

export const mediumFilters = ["#acrylic", "#ceramics", "#charcoal", "#conte", "#fiber"];

export const toolFilters = ["#d3-js", "#figma", "#illustrator", "#indesign", "#javascript", "#leaflet-js", "#pixi-js", "#python", "#r", "#react", "#svelte", "#typescript"];

export const areaFilters = ["#data-journalism", "#fine-art", "#map", "#public-policy" ];

export const roleFilters = [...new Set(itemData.map(d => d.role).flat())];

export const filters = toolFilters.concat(designFilters.concat(mediumFilters));

export const introTransition = 3500;