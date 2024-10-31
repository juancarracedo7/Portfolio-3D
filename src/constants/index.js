import { openbusiness, zara } from "../assets/images";
import {
    contact,
    css,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    motion,
    mui,
    nextjs,
    nodejs,
    react,
    redux,
    sass,
    snapgram,
    tailwindcss,
    typescript
} from "../assets/icons";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: motion,
        name: "Motion",
        type: "Animation",
    },
    {
        imageUrl: mui,
        name: "Material-UI",
        type: "Frontend",
    },
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: redux,
        name: "Redux",
        type: "State Management",
    },
    {
        imageUrl: sass,
        name: "Sass",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    }
];

export const experiences = [
    {
        title: "Full Stack Developer",
        company_name: "OpenBusiness",
        icon: openbusiness,
        iconBg: "#ffffff",
        date: "Mayo 2022 - Mayo 2023",
        points: [
            "Trabajo Full-Time, utilizando las tecnologías mas modernas.",
            "Refactorizando una vieja aplicación, modernizándola, utilizando Typescript y Next.js.",
            "Generando nuevas funcionalidades solicitadas por el cliente y solucionando bugs antiguos.",
            "Trabajando con la metodología scrum, con un equipo liderado por el Project Manager.",
            "Utilizando jira para organizar los sprints y tareas diarias",
            "CI/CD con github actions, y deploy en la nube Digital Ocean",
            "Utilización de Aws amplify y Docker",
            "Aplicaciones Bancarias, Backoffice y Retail"
        ],
    },
    {
        title: "Frontend Developer",
        company_name: "Zara.com (Gupo Inditex)",
        icon: zara,
        iconBg: "#ffffff",
        date: "Mayo 2023 - Octubre 2024",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/YourGitHubUsername',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/YourLinkedInUsername',
    }
];

export const projects = [
    {
        iconUrl: snapgram,
        theme: 'btn-back-blue',
        name: 'Zara',
        description: 'Trabaje como frontend developer, ecommerce',
        link: 'https://www.zara.com/',
    },
    {
        iconUrl: snapgram,
        theme: 'btn-back-blue',
        name: 'Dividenz',
        description: 'Trabaje como frontend developer, aplicacion real state',
        link: 'https://dividenz.com/es',
    },
    {
        iconUrl: snapgram,
        theme: 'btn-back-blue',
        name: 'Vision Retail',
        description: 'Trabaje como fullstack developer, aplicacion retail',
        link: 'https://www.visionretail.io/',
    },
    {
        iconUrl: snapgram,
        theme: 'btn-back-blue',
        name: 'Buscador de Criptomonedas',
        description: 'App realizada con React Native, para la busqueda de las diferentes criptomonedas y sus valores',
        link: 'https://github.com/juancarracedo7/CoinFinder-Crypto-React-Native',
    },
    {
        iconUrl: snapgram,
        theme: 'btn-back-blue',
        name: 'Con de la aplicacion de Disney',
        description: 'Clon de la aplicacion de Disney utilizando next.js',
        link: 'https://github.com/juancarracedo7/Disney-Clone',
    },
    {
        iconUrl: snapgram,
        theme: 'btn-back-blue',
        name: 'Animatch',
        description: 'Aplicacion utilizada para el matcheo de animales',
        link: 'https://github.com/juancarracedo7/Animatch',
    },
    {
        iconUrl: snapgram,
        theme: 'btn-back-blue',
        name: 'Podcast App',
        description: 'Aplicacion consumiendo api de podcast, con reproductor',
        link: 'https://github.com/juancarracedo7/podcast-app',
    },
    {
        iconUrl: snapgram,
        theme: 'btn-back-blue',
        name: 'TODO',
        description: 'Aplicacion TODO realizada con typescript',
        link: 'https://github.com/adrianhajdin/project_ai_summarizer',
    },
    {
        iconUrl: snapgram,
        theme: 'btn-back-blue',
        name: 'TA-TE-TI',
        description: 'Juego de TA-TE-TI',
        link: 'https://github.com/juancarracedo7/ta-te-ti',
    }
];