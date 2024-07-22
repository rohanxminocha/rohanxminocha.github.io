import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { IconContext } from "react-icons";
import {
    IoMail,
    IoLogoGithub,
    IoLogoLinkedin,
} from "react-icons/io5";

import Header from "./components/Header";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Education from "./components/Education";
import EmojiRain from "./components/EmojiRain";
import Console from "./components/Console";
import { isEasterEggTime } from "./utils/timeUtils";
import "./App.css";

console.warn = () => { };
console.error = () => { };

const iconOptions = {
    size: "1.25em",
};

const dateOptions = {
    month: "short",
    year: "numeric",
};

const dataLinks = [
    {
        text: "Email",
        link: "mailto:mail@rminocha.com",
        icon: <IoMail />,
    },
    {
        text: "LinkedIn",
        link: "https://linkedin.com/in/rohanminocha",
        icon: <IoLogoLinkedin />,
    },
    {
        text: "GitHub",
        link: "https://github.com/rohanxminocha",
        icon: <IoLogoGithub />,
    },
];

const dataExperience = [
    {
        company: "Wealthsimple",
        team: "Data Platform",
        title: "Software Engineer Intern",
        titleShort: "SWE Intern",
        description: "Data Platform",
        location: "Toronto, ON",
        start: new Date("May 6, 2024"),
        end: new Date("August 29, 2024"),
        logo: "logo_wealthsimple.png",
        logoScale: 0.95,
        link: "https://www.wealthsimple.com/",
        skills: "Python, Airflow, AWS (Redshift, S3, RDS, ECR), SQL, Terraform",
    },
    {
        company: "Intuit",
        team: "GraphQL API Management Platform",
        title: "Software Engineer Intern",
        titleShort: "SWE Intern",
        description: "GraphQL API Management Platform",
        location: "Mountain View, CA",
        start: new Date("September 5, 2023"),
        end: new Date("April 26, 2024"),
        logo: "logo_intuit.png",
        logoScale: 0.95,
        link: "https://www.intuit.com/",
        skills: "Python, Java, TypeScript, Groovy, Kafka, Apollo, GraphQL, Beam, Docker, Kubernetes, Jenkins, Splunk, Argo, AWS",
    },
    {
        company: "Waterloo Data Science Club",
        team: "Web Development",
        title: "Back End Developer",
        titleShort: "Back End Dev",
        description: "Web Development",
        location: "Waterloo, ON",
        start: new Date("September 5, 2023"),
        end: new Date("December 22, 2023"),
        logo: "logo_uwdsc.png",
        logoScale: 0.95,
        link: "https://www.uwdatascience.ca/",
        skills: "Next.js, Tailwind CSS, Firebase",
    },
    {
        company: "Trustwave",
        team: "Platform and Analytics",
        title: "Software Engineer Intern",
        titleShort: "SWE Intern",
        description: "Platform and Analytics",
        location: "Chicago, IL",
        start: new Date("January 9, 2023"),
        end: new Date("April 28, 2023"),
        logo: "logo_trustwave.png",
        logoScale: 0.95,
        link: "https://www.trustwave.com/",
        skills: "Python, Go, React, Flask, Kafka, Elasticsearch, Datadog, AWS, Prometheus, Grafana",
    },
    {
        company: "Electro Source",
        team: "API Integrations and Security",
        title: "Software Developer Intern",
        titleShort: "SDE Intern",
        description: "API Integrations and Security",
        location: "Toronto, ON",
        start: new Date("May 31, 2022"),
        end: new Date("August 19, 2022"),
        logo: "logo_electrosource.png",
        logoScale: 0.85,
        link: "https://electrosource.com/",
        skills: "Node.js, React, Spark, Hadoop, Jest, Redis, PostgreSQL, Docker, Kubernetes",
    },
    {
        company: "Elekta",
        team: "Medical Software",
        title: "Software Developer Intern",
        titleShort: "SDE Intern",
        description: "Medical Software",
        location: "Sunnyvale, CA",
        start: new Date("September 7, 2021"),
        end: new Date("December 23, 2021"),
        logo: "logo_elekta.png",
        logoScale: 0.95,
        link: "https://www.elekta.com/",
        skills: "Java, C++, Spring Boot, GraphQL, REST, MySQL",
    },
];

const dataProjects = [
    {
        project: "UWPath",
        start: new Date("May 1, 2022"),
        end: new Date("December 23, 2023"),
        link: "https://uwpath.com/",
        githubLink: "https://github.com/UW-Path",
        skills: "Python, Django, JavaScript, Vue.js, Docker, PostgreSQL, Firebase",
        description:
            "A degree planner for students at the University of Waterloo, it scrapes the data from the Academic Calendar and displays the data according to the academic plans.",
        img: "uwpath.png",
        logoScale: 1.5,
    },
    {
        project: "Spotify Profile",
        start: new Date("Apr 1, 2023"),
        end: new Date("May 23, 2023"),
        link: "https://spotify-profile.herokuapp.com/",
        githubLink: "https://github.com/rohanxminocha/spotify-profile",
        skills:
            "React, Express, Chart.js, Reach Router, Spotify API, Styled Components",
        description:
            "A web app for visualizing personalized Spotify data. View your top artists, top tracks, recently played tracks, and detailed audio information about each track. Create and save new playlists of recommended tracks based on your existing playlists and more.",
        img: "spotify-profile.png",
        rounded: true,
        logoScale: 1.5,
    },
    {
        project: "EmotionLens",
        start: new Date("Jan 1, 2023"),
        end: new Date("Feb 23, 2023"),
        link: "https://github.com/rohanxminocha/EmotionLens",
        githubLink: "https://github.com/rohanxminocha/EmotionLens",
        skills: "Python, OpenCV, Keras, NumPy, Flask, TensorFlow, Jupyter Notebook",
        description:
            "A full-stack Python application built with Keras, Numpy, and deployed in Flask that recognizes facial expressions from a webcam or video using a trained neural network.",
        img: "emotionlens.png",
        rounded: true,
        logoScale: 1.5,
    },
    {
        project: "Personal Website v1",
        start: new Date("May 1, 2022"),
        end: new Date("December 23, 2023"),
        link: "https://github.com/rohanxminocha/personal-website-v1",
        githubLink: "https://github.com/rohanxminocha/personal-website-v1",
        skills: "JavaScript, Jekyll, HTML, CSS, jQuery",
        description:
            "The first iteration of my personal website built a year ago to showcase my skills and experiences.",
        img: "personal-website-v1.png",
        logoScale: 1.5,
    },
];

const dataEducation = {
    school: "University of Waterloo",
    degree: "Bachelor of Computer Science, Honours, Co-op",
    degreeShort: "B.C.S. Computer Science",
    location: "Waterloo, ON",
    start: new Date("September 1, 2020"),
    end: new Date("April 30, 2025"),
};

const App = () => {
    const showEasterEgg = isEasterEggTime();

    return (
        <div className="App">
            <Console />
            <IconContext.Provider value={iconOptions}>
                <Container>
                    <Row>
                        <Col>
                            <Header dataLinks={dataLinks} />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <hr />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Experience dataExperience={dataExperience} dateOptions={dateOptions} />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Projects dataProjects={dataProjects} dateOptions={dateOptions} />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Education dataEducation={dataEducation} dateOptions={dateOptions} />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <div className="util-vspacing" />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <div className="util-vspacing" />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <hr />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <div className="util-vspacing" />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <div className="d-flex justify-content-center section-footer">
                                <p>&copy; Rohan Minocha, {new Date().getFullYear()}</p>
                            </div>
                            <div className="d-flex justify-content-center section-footer-question">
                                <p>{showEasterEgg ? 'Guess you found the easter eggs, or did you❓🤔' : 'Can you find the easter eggs❓'}</p>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <div className="util-vspacing" />
                        </Col>
                    </Row>
                </Container>
                {showEasterEgg && <EmojiRain />}
            </IconContext.Provider>
        </div>
    );

};

export default App;
