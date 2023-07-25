/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable jsx-a11y/iframe-has-title */
/* eslint-disable jsx-a11y/alt-text */
import { React } from "react";
import { Col, Container, Row, Stack } from "react-bootstrap";
import { IconContext } from "react-icons";
import {
    IoArrowForwardOutline,
    IoCalendarOutline,
    IoLocationOutline,
    IoConstructOutline,
    IoMail,
    IoLogoGithub,
    IoLogoLinkedin,
} from "react-icons/io5";

const iconOptions = {
    size: "1.25em",
};

const dateOptions = {
    month: "short",
    year: "numeric",
};

const resumeLink = "files/resume.pdf";

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
        company: "Intuit",
        team: "TurboTax GraphQL team",
        title: "Incoming Software Engineer Intern",
        titleShort: "SWE Intern",
        description: "TurboTax GraphQL team",
        location: "Toronto, ON",
        start: new Date ("September 5, 2023"), 
        end: new Date ("December 22, 2023"), 
        logo: "logo_intuit.png", 
        logoScale: 0.95, 
        link: "https://www.intuit.com/ca/", 
        skills: "",
    },
    {
        company: "Trustwave",
        team: "Security information & event management",
        title: "Software Engineer Intern",
        titleShort: "SWE Intern",
        description: "Platform and Analytics team",
        location: "Chicago, IL",
        start: new Date("January 9, 2023"),
        end: new Date("April 28, 2023"),
        logo: "logo_trustwave.png",
        logoScale: 0.95,
        link: "https://www.trustwave.com/en-us/",
        skills: "Python, Go, AWS, PostgreSQL, Redis, Kafka, Elasticsearch, Jenkins"
    },
    {
        company: "Electro Source",
        title: "Software Developer Intern",
        titleShort: "SDE Intern",
        description: "API Integrations and Security team",
        location: "Toronto, ON",
        start: new Date("May 31, 2022"),
        end: new Date("August 19, 2022"),
        logo: "logo_electrosource.png",
        logoScale: 0.85,
        link: "https://electrosource.com/",
        skills: "MERN, Python, Django, TypeScript, REST APIs, Docker, Kubernetes"
    },
    {
        company: "Elekta",
        title: "Software Developer Intern",
        titleShort: "SDE Intern",
        description: "Medical Software team",
        location: "Sunnyvale, CA",
        start: new Date("September 7, 2021"),
        end: new Date("December 23, 2021"),
        logo: "logo_elekta.png",
        logoScale: 0.95,
        link: "https://www.elekta.com/",
        skills: "Java, Spring Boot, C++, MySQL, JavaScript, GraphQL, Azure"
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
            "React, Express, Reach Router, Spotify API, Styled Components",
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

const App = () => {
    return (
        <div className="App">
            <IconContext.Provider value={iconOptions}>
                <Container>
                    <Row>
                        <Col>
                            <div className="section section-header">
                                <div>
                                    <Stack direction="vertical" gap={4}>
                                        <Stack
                                            direction="horizontal"
                                            gap={3}
                                            className="header-images"
                                        >
                                            <div className="header-photo">
                                                <img
                                                    src={"imgs/self-linkedin.png"}
                                                    style={{
                                                        maxWidth: 1.25 * 100 + "%",
                                                        maxHeight: 1.25 * 100 + "%",
                                                    }}
                                                />
                                            </div>
                                            <div className="location-photo">
                                                <img src={"imgs/toronto.jpeg"} />
                                            </div>
                                        </Stack>
                                        <div>
                                            <h1>Rohan Minocha</h1>
                                            <h3>
                                                Junior Computer Science Student @ University of Waterloo
                                            </h3>
                                            <Stack direction="horizontal" gap={2}>
                                                <IoLocationOutline />
                                                <p>Toronto, ON, Canada</p>
                                            </Stack>
                                        </div>
                                        <Stack
                                            direction="horizontal"
                                            gap={3}
                                            className="header-links align-items-start"
                                        >
                                            {dataLinks.map((link, linkIndex) => (
                                                <a
                                                    href={link.link}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="header-link"
                                                    key={"header-link-" + linkIndex}
                                                    {...{ download: link.download }}
                                                >
                                                    <Stack
                                                        direction="horizontal"
                                                        className="header-links"
                                                    >
                                                        {link.icon}
                                                    </Stack>
                                                </a>
                                            ))}
                                        </Stack>
                                        <a
                                            href="mailto:mail@rminocha.com?subject=Join%20Our%20Team:%20Share%20Your%20Resume&body=Hey%20Rohan,%0D%0A%0D%0A[Your%20Message]%20Something%20like:%20Let%20me%20have%20a%20look%20at%20your%20resume%20:)%0D%0A%0D%0AThanks,%0D%0A[Your%20Name]"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="header-status-link"
                                        >
                                            <div class="status">
                                                <div class="status_light">
                                                    <div class="status_light_ring"></div>
                                                    <div class="status_light_led"></div>
                                                </div>
                                                <div class="status_message">
                                                    Seeking 2023/2024 Internship opportunities! Reach out for
                                                    my <b>Resume</b> :&#41;
                                                </div>
                                            </div>
                                        </a>
                                    </Stack>
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <hr />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <div className="mt-5 section section-experience">
                                <h2>Experience</h2>
                                {dataExperience.map((data, dataIndex) => (
                                    <div
                                        className="experience-card"
                                        key={"experience-card-" + dataIndex}
                                    >
                                        <Stack
                                            direction="horizontal"
                                            gap={4}
                                            className="align-items-start"
                                        >
                                            <div className="experience-logo">
                                                {data.logo && (
                                                    <img
                                                        src={"imgs/" + data.logo}
                                                        style={{
                                                            maxWidth:
                                                                (data.logoScale ? data.logoScale * 100 : 100) +
                                                                "%",
                                                            maxHeight:
                                                                (data.logoScale ? data.logoScale * 100 : 100) +
                                                                "%",
                                                        }}
                                                    />
                                                )}
                                            </div>
                                            <div className="experience-info">
                                                <a
                                                    className="company-link"
                                                    href={data.link}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                >
                                                    <Stack direction="horizontal" gap={2}>
                                                        <h3>
                                                            {Date.now() < data.start && "Incoming "}
                                                            {data.titleShort} @ {data.company}
                                                        </h3>
                                                        <IoArrowForwardOutline size={"1em"} />
                                                    </Stack>
                                                </a>
                                                {data.description && (
                                                    <p className="experience-description">
                                                        {data.description}
                                                    </p>
                                                )}
                                                <Stack direction="horizontal" gap={2} className="mt-2">
                                                    <IoCalendarOutline />
                                                    <p>
                                                        {data.start.toLocaleString("default", dateOptions)}{" "}
                                                        &ndash;{" "}
                                                        {data.end.toLocaleString("default", dateOptions)}
                                                    </p>
                                                </Stack>
                                                <Stack direction="horizontal" gap={2} className="mt-1">
                                                    <IoLocationOutline />
                                                    <p>
                                                        {data.location}
                                                        {data.remote && " (Remote)"}
                                                    </p>
                                                </Stack>
                                                {/* <Stack direction="horizontal" gap={2} className="mt-1">
                                                    <IoConstructOutline />
                                                    <p>{data.skills}</p>
                                                </Stack> */}
                                            </div>
                                        </Stack>
                                    </div>
                                ))}
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <div className="mt-5 section section-projects">
                                <h2>Projects</h2>
                                <div className="projects-text">
                                    <em>// some of my learnings, as projects //</em>
                                </div>
                                {dataProjects.map((data, dataIndex) => (
                                    <div
                                        className="project-card"
                                        key={"project-card-" + dataIndex}
                                    >
                                        <Stack
                                            direction="vertical"
                                            gap={5}
                                            className="align-items-start"
                                        >
                                            <div className="project-logo">
                                                <a
                                                    className="project-github-link align-items-center"
                                                    href={data.githubLink}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                >
                                                    {data.img && (
                                                        <img
                                                            className={data.rounded ? "roundedCorners" : ""}
                                                            src={"imgs/" + data.img}
                                                            style={{
                                                                maxWidth:
                                                                    (data.logoScale
                                                                        ? data.logoScale * 100
                                                                        : 100) + "%",
                                                                maxHeight:
                                                                    (data.logoScale
                                                                        ? data.logoScale * 100
                                                                        : 100) + "%",
                                                            }}
                                                        />
                                                    )}
                                                </a>
                                            </div>
                                            <div className="project-info">
                                                <Stack
                                                    direction="horizontal"
                                                    gap={2}
                                                    className="align-items-center"
                                                >
                                                    <a
                                                        className="project-link"
                                                        href={data.link}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                    >
                                                        <Stack
                                                            direction="horizontal"
                                                            gap={2}
                                                            className="align-items-center"
                                                        >
                                                            <h3>{data.project}</h3>
                                                            <IoArrowForwardOutline size={"1em"} />
                                                        </Stack>
                                                    </a>
                                                    <div className="align-items-center ms-auto">
                                                        <a
                                                            className="project-github-link align-items-center"
                                                            href={data.githubLink}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                        >
                                                            <Stack gap={1} className="align-items-center">
                                                                <IoLogoGithub />
                                                            </Stack>
                                                        </a>
                                                    </div>
                                                </Stack>

                                                {data.description && (
                                                    <p className="project-description">
                                                        {data.description}
                                                    </p>
                                                )}
                                                <Stack direction="horizontal" gap={2} className="mt-2">
                                                    <IoCalendarOutline />
                                                    <p>
                                                        {data.start.toLocaleString("default", dateOptions)}{" "}
                                                        &ndash;{" "}
                                                        {data.end.toLocaleString("default", dateOptions)}
                                                    </p>
                                                </Stack>
                                                <Stack direction="horizontal" gap={2} className="mt-1">
                                                    <IoConstructOutline />
                                                    <p>{data.skills}</p>
                                                </Stack>
                                            </div>
                                        </Stack>
                                    </div>
                                ))}
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <div className="mt-5 section section-education">
                                <h2>Education</h2>
                                <div className="education-info">
                                    <h3>
                                        {Date.now() < dataEducation.end && "Pursuing "}
                                        {dataEducation.degreeShort} @ {dataEducation.school}
                                    </h3>
                                    <Stack direction="horizontal" gap={2} className="mt-2">
                                        <IoCalendarOutline />
                                        <p>
                                            {dataEducation.start.toLocaleString(
                                                "default",
                                                dateOptions
                                            )}{" "}
                                            &ndash;{" "}
                                            {dataEducation.end.toLocaleString("default", dateOptions)}
                                        </p>
                                    </Stack>
                                    <Stack direction="horizontal" gap={2} className="mt-1">
                                        <IoLocationOutline />
                                        <p>{dataEducation.location}</p>
                                    </Stack>
                                </div>
                            </div>
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
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <div className="util-vspacing" />
                        </Col>
                    </Row>
                </Container>
            </IconContext.Provider>
        </div>
    );
};

export default App;
