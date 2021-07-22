export const portfolioData = {
	firstName: "Michael",
	middleName: "Ehijele",
	lastName: "Agbonyeme",
	aboutMe: [`I was born in Nigeria, but was blessed to move around alot growing up which diversified my personality, allow me to be 
	open-minded to different communities. I am a hard-worker, self-motivated, and a seeker of knowledge.`],
	clients: ["Zimtac LTD.", "NATIV", "Nengai Safaris", "Knack Enterprises"],
	likes: ["I enjoy working with people to complete a task.", 
	"I enjoy watching shows that teach about different cultures through their language, and their customs", 
	"I enjoy finding solutions to problems more than writing code",
	"I enjoy listening to Alan Watts, and self-growth podcasts",
	],
	age: 21,
	born: "Lagos, Nigeria",
	countries: ["U.S.A", "Dubai", "Tanzania", "Nigeria", "Canada", "Amsterdam", "Oman", "Kenya", "Rwanda"],
	languages: ["Javascript", "ReactJS", "NodeJS/ExpressJS", "Python", "Java", "C#"],
	projects: [
		{
			id: 1, 
			projectName: "Activity Journal",
			about: "A simple web application that allows users to track/update/create/edit/delete their activities.",
			tools: ["ReactJs", "CSS", "React-Router-Dom"],
			functionality: ["Initialization of data with useEffect",
			"Creates a new item, giving it it's own ID, then pushing all data to initial state",
			"Filtering data, and rendering complete/incomplete items to it's own page",
			"Colored items for complete/incomplete items",
			"Edit item by ID, changing it's status, title, activity, and due date",
			"Pushes history route page from react-router-dom",
			"Display activity with search bar filtering activities by query letter",
			"Displays new additional data by color"],
			comment: `This project was a great project to make. It's stateless, and does not store any data within any storages or databases. I did have some troubles
			trying to filter data, and render it back to the screen initially, but i figured it our with the help of my algorithmic skills. I also learnt more about 
			react-router-dom history, filtering data by search query letter, and much more.`,
			projectUrl: "https://github.com/MichaelKwanzaa/activity-journal",
			photoUrls: ["/activityJournal/0.jpg","/activityJournal/1.jpg","/activityJournal/2.jpg","/activityJournal/3.jpg","/activityJournal/4.jpg","/activityJournal/5.jpg",
			"/activityJournal/6.jpg","/activityJournal/7.jpg","/activityJournal/8.jpg","/activityJournal/9.jpg","/activityJournal/10.jpg",],
			status: true,
		},
		{
			id: 2,
			projectName: "Movie Api",
			about: "A simple API call to TMDB, to display movies along with their ratings, description, and popularity.",
			tools: ["ReactJs", "CSS", "React-Router-Dom", "TMDB API", "Environment Variables", "EmailJs", "Popup"],
			functionality: ["Utilization of TMDB API to display movies",
			"EmailJS to send client contact information straight to my email",
			"Movie element popup, to display more information about each movie onClick"],
			comment: `One of my earlier projects in which i used the TMDB movie api to make a get request and render their movie data. 
			This project shows my utilization of API calls, and understanding of some documentation from EmailJS`,
			projectUrl: "https://github.com/MichaelKwanzaa/movie-database",
			photoUrls: ["/movieDatabase/0.jpg", "/movieDatabase/1.jpg", "/movieDatabase/2.jpg", "/movieDatabase/3.jpg", "/movieDatabase/4.jpg", "/movieDatabase/5.jpg"],
			status: true,
		},
		{
			id: 3,
			projectName: "Invoice Generator",
			about: "An application that allows you to generate a pdf invoice for your business.",
			tools: ["ReactJs", "CSS", "NodeJS", "ExpressJS", "PdfKit", "Axios", "File-Saver"],
			functionality: ["Add more than one item to invoice",
							"Delete item from invoice",
							"Add tax to item",
							"Calculation of subtotal and subtotal with tax",
							"Generate pdf, and allow downloading"],
			comment: `This was one of my earlier projects that gave me more knowledge on front end development, and the 
			creation of my own API to post requests, and get back information from my own server. It was an eye opener, and 
			was needed for my development.`,
			projectUrl: "https://github.com/MichaelKwanzaa/invoiceMaker",
			photoUrls: ["/invoiceGenerator/0.jpg", "/invoiceGenerator/1.jpg", "/invoiceGenerator/2.jpg"] ,
			completed: true,
		},
		{
			id: 4,
			projectName: "Administrator Panel",
			about: "A simple design of an administator panel that can be used for future projects to display a client's business information.",
			tools: ["ReactJs", "CSS", "Material-UI", "ReCharts", "React-Router-Dom"],
			functionality: ["Displays administrators customers", "Displays Revenue & costs per month", "Allows customer/product data to be filtered",
							"Edit/Create/Delete customer/product", "Send email from administrator panel"],
			comment: `This was a nice project to help me begin designing backend applications. 
            I began understanding CORS more, and using more user made components to display values from
            DB.`,
			projectUrl: "https://github.com/MichaelKwanzaa/admin-panel",
			photoUrls: ["/adminPanel/0.jpg", "/adminPanel/1.jpg", "/adminPanel/2.jpg", "/adminPanel/3.jpg",
			"/adminPanel/4.jpg", "/adminPanel/5.jpg", "/adminPanel/6.jpg", "/adminPanel/7.jpg", "/adminPanel/8.jpg",
			"/adminPanel/9.jpg"],
			completed: false,
		},
		{
			id: 5,
			projectName: "Portfolio 1",
			about: "My first portfolio website, made last year to display simpler projects that i worked on at the time",
			tools: ["ReactJs", "SASS", "Node-Sass", "GSAP", "AOS", "React-Scroll", "React-Typed"],
			functionality: ["Displays projects created", "Shows component transitions"],
			comment: `This was one of my first larger projects, that gave me a better understanding to the
            react component programming and rendering. It was also where i first understood and learnt more about
            GSAP, and other npm packages to render information`,
			projectUrl: "https://michaelkwanzaa.netlify.app/",
			photoUrls: ["/portfolioMichael/0.jpg", "/portfolioMichael/1.jpg", "/portfolioMichael/2.jpg", "/portfolioMichael/3.jpg", 
			"/portfolioMichael/4.jpg", "/portfolioMichael/5.jpg", "/portfolioMichael/6.jpg"],
			status: true,
		},
		{
			id: 6,
			projectName: "Alkebulan Connect",
			about: "Frontend and backend implemented together to make a social media website with a login, signup, home page and profile page. ",
			tools: ["ReactJs", "CSS", "Material-UI", "Axios", "React-Router-Dom", "Timeago.js", "NodeJS", "ExpressJS", 
			"Bcrypt", "Dotenv", "CORS", "Helmet", "Morgan", "MongoDB", "Nodemon"],
            functionality: ["Like button system (Frontend/Backend)", "Follow a friend system (Frontend/Backend)"],
			comment: `This was a tutorial based project, which used more npm packages that helped me understand
            more about CORS, context based information, sending information to database, and rendering back that information
            on the frontend with design. It truly helped me understand the two worlds of frontend and backend development, and
            designing front end components to your own liking. I am more than able to explain this project from the backend
			to the frontend.`,
			projectUrl: "",
			photoUrls: ["/alkebulanConnect/0.jpg", "/alkebulanConnect/1.jpg", "/alkebulanConnect/2.jpg", "/alkebulanConnect/3.jpg",
			"/alkebulanConnect/4.jpg"],
			status: false,
		},
		{
			id: 7,
			projectName: "Loco Locations",
			about: "A review application that allows users to give any review for any location, specifically Nigeria",
			tools: ["ReactJs", "CSS", "Material-UI", "Axios", "Timeago.js", "NodeJS", "ExpressJS", "Nodemon", "Bcrypt",
			"MongoDB", "Dotenv", "CORS"],
			functionality: ["Allows users to add a location review and send it to database",
							"Saves location in database, and displays it when users return back to the website",
							"Allows likes for each location",
							"encrypts passwords and stores in DB",
							"Login system"],
			comment: `This was another tutorial based program that gave me more visual examples on frontend and backend 
			development. With some of my own customizations, and instructions from the tutorial, I am fully aware and able
			to explain to explain this project from the backend to the frontend.`,
			projectUrl: "",
			photoUrls: ["/locoLocations/0.jpg", "/locoLocations/1.jpg", "/locoLocations/2.jpg", "/locoLocations/3.jpg",
			"/locoLocations/4.jpg", "/locoLocations/5.jpg", "/locoLocations/6.jpg"],
			status: true,
		},
		{
			id: 8,
			projectName: "Recipe Application V2",
			about: "An simple application that searches for a recipe based on your search input",
			tools: ["ReactJS", "CSS", "Edamam API"],
			functionality: ["Displays data from Edamam API",
							"Allows search value to filter Edamam API and return values"],
			comment: `This was yet another project that expanded my knowledge of API calling, and 
			designing my frontend to display whatever i want to display`,
			projectUrl: "https://github.com/MichaelKwanzaa/recipe-app",
			photoUrls: ["/recipeApp/0.jpg", "/recipeApp/1.jpg", "/recipeApp/2.jpg", "/recipeApp/3.jpg",
			"/recipeApp/4.jpg", "/recipeApp/5.jpg"],
			status: true,
		},
		{
			id: 10,
			projectName: "Michael Portfolio V2",
			about: "Portfolio ",
			tools: ["ReactJS", "React-Router-Dom", "GSAP", "React-Scroll", "Material-UI", "EmailJS-Com", "Swiper"],
			functionality: ["Generates random quotations, on refresh & on click",
							"Displays created all information from data.js",
							"Smooth scrolling to components", 
							"404 Page",
							"Contant form sent directly to email"],
			comment: `This was my second version of my portfolio. As much as i am proud of all of my other projects because 
			I know better than anyone how my knowledge of Javascript, algorithms, node packages, Typescript, CSS, styled-components, etc. 
			have all improved as a result, I am very proud of this project, and ready for the learning and life opportunities
			waiting ahead.`,
			projectUrl: "",
			photoUrls: ["/portfolioMichaelV2/0.jpg", "/portfolioMichaelV2/1.jpg", "/portfolioMichaelV2/2.jpg", 
			"/portfolioMichaelV2/3.jpg", "/portfolioMichaelV2/4.jpg", "/portfolioMichaelV2/5.jpg", "/portfolioMichaelV2/6.jpg", ],
			status: true,
		},
		{
			id: 11,
			projectName: "Change Colors",
			about: "A simple JS project that generates random colors, and allows you to save them.",
			tools: ["HTML5", "CSS3", "JS"],
			functionality: ["Generate a random color",
							"Save color in a pallette"],
			comment: `This was one of my earlier vanilla Javascript projects. 
			This was one of the first projects that helped me understand the power of Javascript`,
			projectUrl: "https://github.com/MichaelKwanzaa/change-and-save-color",
			photoUrls: ["/colorChange/0.jpg", "/colorChange/1.jpg", "/colorChange/2.jpg", "/colorChange/3.jpg"],
			status: true,
		}
	]
}

export const quoteGen = {
	quotesArray : [
	{
		quotes: ["Life exists only at this very moment, and in this moment it is infinite and eternal, for the present moment is infinitely small; before we can measure it, it has gone, and yet it exists forever",
				"We cannot be more sensitive to pleasure without being more sensitive to pain",
				"The only way to make sense out of change is to plunge into it, move with it, and join the dance.",
				"To have faith is to trust yourself to the water. When you swim you don’t grab hold of the water, because if you do you will sink and drown. Instead you relax, and float.",
				"There is always something taboo, something repressed, un-admitted, or just glimpsed quickly out of the corner of one’s eye because a direct look is too unsettling. Taboos lie within taboos, like the skin of an onion.",
				"Try to imagine what it will be like to go to sleep and never wake up… now try to imagine what it was like to wake up having never gone to sleep.",
				"The sense of wrong is simply failure to see where something fits into a pattern, to be confused as to the hierarchical level upon which an event belongs.",
				"You didn’t come into this world. You came out of it, like a wave from the ocean. You are not a stranger here.",
				"The more we struggle for life (as pleasure), the more we are actually killing what we love.",
				"Everyone has love, but it can only come out when he is convinced of the impossibility and the frustration of trying to love himself.",
				"What you are basically, deep, deep down, far, far in, is simply the fabric and structure of existence itself.",
				"Your body does not eliminate poisons by knowing their names. To try to control fear or depression or boredom by calling them names is to resort to superstition of trust in curses and invocations. It is so easy to see why this does not work. Obviously, we try to know, name, and define fear in order to make it “objective,” that is, separate from “I.",
				"Total situations are, therefore, patterns in time as much as patterns in space."
			],
		author: "Alan Watts"
	}, 
	{
		quotes: ["Fear is freedom! Subjugation is liberation! Contradiction is truth! Those are the facts of this world! And you will all surrender to them, you pigs in human clothing!"],
		author: "Satsuki Kiryuuin"
	},
	{
		quotes: ["Thinking you’re no-good and worthless is the worst thing you can do"],
		author: "Nobito"
	},
	{
		quotes: ["Don’t give up, there’s no shame in falling down! True shame is to not stand up again!"],
		author: "Shintaro Midorima"
	},
	{
		quotes: ["Those Who Do Not Understand True Pain Can Never Understand True Peace."],
		author: "Nagato Uzimaki"
	}
	]
};