import authorImage from '../assets/KellyMonterey.jpg';
import foofix from '../assets/foofixsquare.png';
import weather from '../assets/weatherdashboard.png';
import hamburger from '../assets/hamburgerapp.png';
import roots from '../assets/rootsimage.png';
import techtalk from '../assets/Tech-Talk.png';
import resume from '../assets/KKWEBDEVRESUME.pdf';
import google from '../assets/googlebs.png';




export default {
    
    name: "Kelly Kim",

    //Contact Email
    contactEmail: "kellykim408@gmail.com",

    // Landing Page Name
    landingPageName: "KELLY KIM",

    // Landing Page Paragraph
    landingPagePara:
        "I'm a Full-Stack web developer. Let's get started on creating your masterpiece.",

    // Landing Page Image 
    landingPageImage: authorImage,

    // my portfolio links to github and deployed links
    projects: [
        {
            id: 1, 
            title: "Project One: Food Fix", 
            imageSrc: foofix,
            url: "https://kellykim831.github.io/FoodFix/",
            githublink: "https://github.com/kellykim831/FoodFix"
            
        },
        {
            id: 2, 
            title: "Dashboard Repository",
            imageSrc: weather,
            url: "https://kellykim831.github.io/weather_dashboard/",
            githublink: "https://github.com/kellykim831/weather_dashboard"
        },
        {
            id: 3, 
            title: "Hamburger Repository",
            imageSrc: hamburger,
            url: "https://shrouded-stream-56897.herokuapp.com/",
            githublink: "https://github.com/kellykim831/Burger"
        },
        {
            id: 4, 
            title: "Project Two: Roots Repository",
            imageSrc: roots,
            url: "https://mysterious-headland-00710.herokuapp.com/",
            githublink: "https://github.com/kellykim831/roots-a-social-garden"
        },
        {
            id: 5, 
            title: "Google Book Search - Mern",
            imageSrc: google,
            url: "https://calm-journey-29608.herokuapp.com/",
            githublink: "https://github.com/kellykim831/google-book-search-mern"
        },
        {
            id: 6, 
            title: "Project Three: Tech-Talk",
            imageSrc: techtalk,
            url: "https://evening-stream-73947.herokuapp.com/",
            githublink: "https://github.com/kellykim831/tech-talk"
        }
    ],

    // Contact Section
    contactPara:
        "Check out my personal links below! ",
    social: [
        {
            name: "LinkedIn",
            url: "https://www.linkedin.com/in/realtorkellykim/"
        },
        {
            name: "Github",
            url: "https://github.com/kellykim831"
        },
        {
            name: "Facebook",
            url: "https://www.facebook.com/kimkelz/"
        },
        {
            name: "Resume",
            url: resume
        }
    ],

    // About Page
    aboutTitle: "Responsive web design means making your customers happy. ",
    aboutPara: "I was born and raised in beautiful Monterey Bay. In 2006, I moved down to southern California where I attended San Diego State University. After graduating with a B.S in Hospitality and Tourism Management, I moved to Los Angeles to pursue my career in the fashion industry where I specialized in sales and marketing. After the Covid-19 pandemic hit, I decided to completely shift gears and change my career into the thriving tech industry. I am currently enrolled in a Full-Stack Web Development coding boot camp through UC Berkeley's Extension program. With my background, I am excited to announce that I will be carrying over these same qualities and principles into the tech field. I've always had a natural desire to service my clients and I'm known for providing great customer service, being in consistent communication, having strong attention to detail and ensuring a positive experience for all of my clients. With my professionalism, integrity and loyalty always coming first, I am devoted to taking the time to listen and learn about my clients needs, wants and desires. I will take the time necessary to help you achieve your goals and I'll do my very best as a web developer."
};