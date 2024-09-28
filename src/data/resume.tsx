import { Icons } from "@/components/icons";
import { HomeIcon, NewspaperIcon, SquareTerminal } from "lucide-react";

export const DATA = {
	name: "Mohamed NACIRI TAOUFIK",
	initials: "Med",
	url: "https://mntcodes.com",
	location: "Casablanca, Morocco",
	locationLink: "https://www.google.com/maps/place/sanfrancisco",
	description:
		"I’m not just a Software Engineer—I’m a creator of digital experiences and a problem-solver at heart. ",
	summary:
		"In my journey, [I’ve designed real-time platforms that track maritime traffic globally](#work), created AI-driven tools to predict machinery breakdowns, and designed systems that optimize energy consumption for factories—all while enjoying some [entertaining projects along the way](https://marketplace.visualstudio.com/items?itemName=NaciriTaoufikMohamed.watermycode). Whether I’m working with Next.js, Java Spring, or leveraging the power of AI, my goal is always the same: deliver impact.",
	avatarUrl: "/me.png",
	skills: [
		"Javascript",
		"Typescript",
		"React",
		"Next.js",
		"React Native",
		"Node.js",
		"Postgres",
		"MongoDb",
		"GitHub Actions",
    "Gitlab",
		"Docker",
		"Kubernetes",
		"AWS",
		"Java",
		"Python"
	],
	navbar: [
		{ href: "/", icon: HomeIcon, label: "Home" },
		{
			href: "https://www.terminal.mntcodes.com",
			icon: SquareTerminal,
			label: "Terminal",
		},
		{
			href: "https://mntcode.substack.com/",
			icon: NewspaperIcon,
			label: "Blog",
		},
	],
	contact: {
		email: "naciritaoufikmed@gmail.com",
		tel: "+212637403791",
		social: {
			LinkedIn: {
				name: "LinkedIn",
				url: "https://www.linkedin.com/in/mednt/",
				icon: Icons.linkedin,

				navbar: true,
			},
			GitHub: {
				name: "GitHub",
				url: "https://github.com/MedNT",
				icon: Icons.github,

				navbar: true,
			},
      Whatsapp: {
				name: "GitHub",
				url: "https://wa.me/212637403791",
				icon: Icons.whatsapp,
				navbar: true,
			},
			X: {
				name: "X",
				url: "https://x.com/NaciriTaoufik",
				icon: Icons.x,

				navbar: true,
			},
			Youtube: {
				name: "Youtube",
				url: "https://www.youtube.com/@mntcode",
				icon: Icons.youtube,
				navbar: true,
			},
			email: {
				name: "Send Email",
				url: "mailto:naciritaoufikmed@gmail.com",
				icon: Icons.email,
				navbar: true,
			},
		},
	},

	work: [
		{
			company: "Build Connect",
			href: "#",
			badges: [],
			location: "Remote",
			title: "Chief Technology Officer",
			logoUrl: "/buildconnect.png",
			start: "Aug 2024",
			end: "Present (Remote)",
			description:
				"Currently leading the technical strategy and development of BuildConnect, a marketplace designed to connect architects, clients, and companies, enhancing collaboration and project management in the architecture industry.",
		},
		{
			company: "AI Digitals",
			badges: [],
			href: "#",
			location: "Remote",
			title: "Lead Developer",
			logoUrl: "/aidigitals.png",
			start: "Jun 2023",
			end: "Jun 2024 (Remote)",
			description:
				"Led the development of a series of mobile applications using React Native and Expo, focusing on delivering high-quality, cross-platform solutions that provide an engaging user experience.",
		},
		{
			company: "OCP Solutions",
			href: "https://www.ocpsolutions.ma/",
			badges: [],
			location: "Remote",
			title: "Frontend Developer",
			logoUrl: "/ocps.jpg",
			start: "Jan 2024",
			end: "May 2024 (Remote)",
			description:
				"Designed and built an intuitive, scalable platform for real-time energy monitoring and optimization, ensuring seamless data management for improved decision-making.",
		},
		{
			company: "Investing LLC",
			href: "#",
			badges: [],
			location: "San Jose, CA",
			title: "Full-Stack Developer",
			logoUrl: "/investingllc.jpg",
			start: "Feb 2023",
			end: "Dec 2023 (Remote)",
			description:
				"Leading the Development of an Investing Learning Academy Platform, an ultimate online learning platform designed specifically for absolute beginners in investing and trading.",
		},
		{
			company: "OCP Solutions",
			href: "https://www.ocpsolutions.ma/",
			badges: [],
			location: "Remote",
			title: "Frontend Developer",
			logoUrl: "/ocps.jpg",
			start: "Feb 2023",
			end: "Sep 2023 (Remote)",
			description:
				"- Led the front-end development for a real-time global maritime traffic tracking platform, successfully visualizing millions of data points, ensuring a highly interactive and user-friendly experience.",
		},
		{
			company: "Simplon.co",
			href: "https://simplon.co/",
			badges: [],
			location: "Remote",
			title: "Full-Stack Developer",
			logoUrl: "/simplon.jpg",
			start: "Feb 2022",
			end: "Aug 2022 (On-site)",
			description:
				"Designed and implemented multiple learning platforms using monolithic and microservices architecture, ensuring scalability and flexibility for future enhancements.",
		},
		{
			company: "Cadi Ayyad",
			href: "https://www.uca.ma/fr",
			badges: [],
			location: "On-site",
			title: "Practical Labs University Instructor",
			logoUrl: "/cadiayaad.png",
			start: "May 2021",
			end: "Feb 2023 (On-site)",
			description:
				"Instructed courses in Network Systems Administration using Linux and C programming, effectively managing practical labs with groups of up to 40 students. Developed engaging lab exercises that enhanced hands-on learning, allowing students to apply theoretical concepts in real-world scenarios.",
		},
		{
			company: "Cadi Ayyad",
			href: "https://www.uca.ma/fr",
			badges: [],
			location: "On-site",
			title: "Researcher",
			logoUrl: "/cadiayaad.png",
			start: "May 2021",
			end: "Feb 2023 (On-site)",
			description:
				"Developing a sophisticated typesetting engine for LaTeX to facilitate dynamic typesetting of Arabic text, addressing the unique challenges of Arabic script, such as character shaping and right-to-left layout.",
		},
		{
			company: "Evinsys",
			href: "https://li.me/",
			badges: [],
			location: "Remote",
			title: "Machine Learning Developer",
			logoUrl: "/evinsys.jpeg",
			start: "January 2018",
			end: "April 2018 (Remote)",
			description:
				"Developed a fully autonomous smart system leveraging IoT data to predict breakdowns in oil and gas pumps, preventing costly failures and reducing maintenance costs by 30%.",
		},
	],
	education: [
		{
			school: "Cadi Ayyad University",
			href: "https://www.uca.ma/fr",
			degree: "Phd in Computer Science",
			logoUrl: "/cadiayaad.png",
			start: "2021",
			end: "2023 (Paused)",
			badges: ["Closed"],
		},
		{
			school: "Moroccan School of Engineering Science",
			href: "https://emsi.ma/",
			degree: "Engineering Degree of Computer Science (SE&CS)",
			logoUrl: "/emsi.jpg",
			start: "2018",
			end: "2020",
		},
		{
			school: "Bachelor's Degree in Software Engineering",
			href: "https://wlu.ca",
			degree: "University of Technology of Essaouira",
			logoUrl: "/este.png",
			start: "2017",
			end: "2018",
		},
		{
			school: "University Diploma in Computer Science",
			href: "https://ibo.org",
			degree: "University of Technology of Safi",
			logoUrl: "/ests.jpg",
			start: "2014",
			end: "2016",
		},
	],
	projects: [
		{
			title: "VSCode Extention - WaterMyCode 💧",
			href: "https://marketplace.visualstudio.com/items?itemName=NaciriTaoufikMohamed.watermycode&ssr=false#review-details",
			dates: "Sep 2024 - Present",
			active: true,
			description:
				"a VSCode extension designed to help developers stay hydrated while coding! This extension reminds you to drink water at regular intervals, tracks your hydration level.",
			technologies: [
				"Node.js",
				"Javascript",
				"axios",
				"ESlint",
				"Prettier",
				"TailwindCSS",
				"Mocha",
			],
			links: [
				{
					type: "Website",
					href: "https://marketplace.visualstudio.com/items?itemName=NaciriTaoufikMohamed.watermycode&ssr=false#review-details",
					icon: <Icons.globe className="size-3" />,
				},
				{
					type: "Source",
					href: "https://github.com/MedNT/watermycode",
					icon: <Icons.github className="size-3" />,
				},
			],
			image: "",
			video: "/videos/waterMyCode.mp4",
		},
    {
			title: "Terminal Showcase 💻",
			href: "#",
			dates: "Aug 2024",
			active: true,
			description:
				"Terminal Showcase is a sleek, terminal-based portfolio designed for developers and tech enthusiasts. It allows users to navigate through projects and skills using simple commands, providing an interactive experience that highlights your expertise in a unique and engaging way.",
			technologies: [
				"Typescript",
				"Next.js",
				"TailwindCSS",
        "ChakraUI"
			],
			links: [
				{
					type: "Website",
					href: "https://www.terminal.mntcodes.com",
					icon: <Icons.globe className="size-3" />,
				},
				{
					type: "Source",
					href: "#",
					icon: <Icons.github className="size-3" />,
				},
			],
			image: "",
			video: "/videos/terminal-portfolio.mp4",
		},
		{
			title: "AI Maritime Traffic Tracking 🚢",
			href: "#",
			dates: "Feb 2023 - September 2023",
			active: true,
			description:
				"Led the front-end development for a real-time global maritime traffic tracking platform, successfully visualizing millions of data points, ensuring a highly interactive and user-friendly experience.",
			technologies: [
				"Typescript",
				"Next.js",
				"TailwindCSS",
        "MaterialUI",
				"NextAuth",
				"Formik",
				"Yup",
				"ReactQuery",
				"ReactLeaflet",
				"Recharts",
				"Jest",
				"Cypress"
			],
			links: [
				{
					type: "Website",
					href: "#",
					icon: <Icons.globe className="size-3" />,
				},
				{
					type: "Source",
					href: "#",
					icon: <Icons.github className="size-3" />,
				},
			],
			image: "",
			video: "/videos/alab-demo.mp4",
		},
		{
			title: "AI-Driven Mobile Apps 📲",
			href: "#",
			dates: "Jun 2023 - June 2024",
			active: true,
			description:
				"Led the development of a series of mobile applications using React Native and Expo, focusing on delivering high-quality, cross-platform solutions that provide an engaging user experience.",
			technologies: [
				"React Native",
				"Expo",
				"TailwindCSS",
        "NativeBase",
				"Redux",
				"React Navigation",
				"Axios",
				"ReactQuery",
				"Jest",
				"OpenAI"
			],
			links: [
				{
					type: "Website",
					href: "#",
					icon: <Icons.globe className="size-3" />,
				},
				{
					type: "Source",
					href: "#",
					icon: <Icons.github className="size-3" />,
				},
			],
			image: "",
			video: "/videos/ai-mobile-apps.mp4",
		},
		{
			title: "AI-Driven MC Analytics 📊",
			href: "#",
			dates: "Apr 2023 - September 2023",
			active: true,
			description:
				"Led the front-end development for a real-time analytics platform to monitor machine performance, achieving a 25% optimization in factory operations through predictive capabilities.",
			technologies: [
				"Typescript",
				"Next.js",
				"TailwindCSS",
        "MaterialUI",
				"NextAuth",
				"Formik",
				"Yup",
				"ReactQuery",
				"Recharts",
				"Jest",
				"Cypress"
			],
			links: [
				{
					type: "Website",
					href: "#",
					icon: <Icons.globe className="size-3" />,
				},
				{
					type: "Source",
					href: "#",
					icon: <Icons.github className="size-3" />,
				},
			],
			image: "",
			video: "/videos/mc-analytics.mp4",
		},
		{
			title: "InstaGaze 🤳 - Instagram Gesture Control with AI",
			href: "#",
			dates: "Jan 2020 - March 2020",
			active: true,
			description:
				"AI-powered app that lets you control Instagram with facial gestures. Scroll with your eyes, pause with a gaze, and like posts with a smile for a hands-free, intuitive browsing experience.",
			technologies: [
				"Python",
				"OpenCV",
				"TensorFlow",
				"Keras",
				"Jupyter Lab",
				"Deep Learning",
        "Computer Vision"
			],
			links: [
			],
			image: "",
			video: "videos/ai-insta.mp4",
		},
    {
			title: "Vanisher 🕵️‍♂️ - The Ultimate Camera Cloaking App",
			href: "#",
			dates: "April 2020 - Jully 2020",
			active: true,
			description:
				"AI-powered app that lets you control Instagram with facial gestures. Scroll with your eyes, pause with a gaze, and like posts with a smile for a hands-free, intuitive browsing experience.",
			technologies: [
				"Python",
				"OpenCV",
				"TensorFlow",
				"Keras",
				"Jupyter Lab",
				"Deep Learning",
        "Computer Vision",
        "Image Processing"
			],
			links: [
			],
			image: "",
			video: "videos/harry-potter-blanket.mp4",
		},
	],
  articles: [
    {
			title: "Binary Search Trees: The Knights of Data Kingdom - Part 2",
			href: "https://mntcode.substack.com/p/binary-search-trees-coding",
			dates: "Sep 28, 2024",
			active: true,
			description:
				"Part 8 of data structures series. This is the first in a miniseries (3-5 articles) where we'll take a deep dive into Binary Search Trees (BSTs). In this article, we’ll focus on the theory behind BST.",
			technologies: [
				"Problem Solving",
				"Data Structures",
				"Binary Search Tree",
				"Interviews",
				"JavaScript",
        "Coding"
			],
			links: [
				{
					type: "Website",
					href: "https://mntcode.substack.com/p/binary-search-trees-coding",
					icon: <Icons.globe className="size-3" />,
				}
			],
			image: "/blog/bst2.jpg",
			video: "",
		},
    {
			title: "Binary Search Trees: The Knights of Data Kingdom - Part 1",
			href: "https://mntcode.substack.com/p/binary-search-trees",
			dates: "Sep 28, 2024",
			active: true,
			description:
				"Part 9 of data structures series. Let’s build a Binary Search Tree 🌳 in JavaScript from scratch!",
			technologies: [
				"Problem Solving",
				"Data Structures",
				"Binary Search Tree",
				"Interviews",
				"JavaScript",
        "Theory"
			],
			links: [
				{
					type: "Website",
					href: "https://mntcode.substack.com/p/binary-search-trees",
					icon: <Icons.globe className="size-3" />,
				}
			],
			image: "/blog/bst.jpg",
			video: "",
		},
    {
			title: "Welcome to the Treehouse🌳: A Beginner’s Guide to Tree Data Structures",
			href: "https://mntcode.substack.com/p/welcome-to-the-treehouse-a-beginners",
			dates: "Sep 28, 2024",
			active: true,
			description:
				"Part 7 of data structures series.",
			technologies: [
				"Problem Solving",
				"Data Structures",
				"Trees",
				"Interviews",
				"JavaScript"
			],
			links: [
				{
					type: "Website",
					href: "https://mntcode.substack.com/p/welcome-to-the-treehouse-a-beginners",
					icon: <Icons.globe className="size-3" />,
				}
			],
			image: "/blog/tree.jpg",
			video: "",
		},
    {
			title: "HashMaps Unlocked 🔓: A Beginner's Adventure Through Key-Value Land!",
			href: "https://mntcode.substack.com/p/hashmaps-unlocked",
			dates: "Sep 28, 2024",
			active: true,
			description:
				"Part 6 of data structures series.",
			technologies: [
				"Problem Solving",
				"Data Structures",
				"HashTable",
				"Interviews",
				"JavaScript",
			],
			links: [
				{
					type: "Website",
					href: "https://mntcode.substack.com/p/hashmaps-unlocked",
					icon: <Icons.globe className="size-3" />,
				}
			],
			image: "/blog/hashmap.jpg",
			video: "",
		},
    {
			title: "Queue⏳: The Only Line You’ll Want to Stand In!",
			href: "https://mntcode.substack.com/p/queue-data-structure",
			dates: "Sep 28, 2024",
			active: true,
			description:
				"Part 5 of data structures series.",
			technologies: [
				"Problem Solving",
				"Data Structures",
				"Queues",
				"Interviews",
				"JavaScript",
        "Algorithmics"
			],
			links: [
				{
					type: "Website",
					href: "https://mntcode.substack.com/p/queue-data-structure",
					icon: <Icons.globe className="size-3" />,
				}
			],
			image: "/blog/queue.jpg",
			video: "",
		},
  ],
	hackathons: [
		// {
		// 	title: "Hack Western 5",
		// 	dates: "November 23rd - 25th, 2018",
		// 	location: "London, Ontario",
		// 	description:
		// 		"Developed a mobile application which delivered bedtime stories to children using augmented reality.",
		// 	image: "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-western.png",
		// 	mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
		// 	links: [],
		// }
	],
} as const;