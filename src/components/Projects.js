/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/jsx-no-comment-textnodes */
import React from "react";
import { Stack } from "react-bootstrap";
import { IoArrowForwardOutline, IoCalendarOutline, IoConstructOutline, IoLogoGithub } from "react-icons/io5";

const Projects = ({ dataProjects, dateOptions }) => {
    return (
        <div className="mt-5 section section-projects">
            <h2>Projects</h2>
            <div className="projects-text"><em>// some of my learnings, as projects //</em></div>
            {dataProjects.map((data, dataIndex) => (
                <div className="project-card" key={"project-card-" + dataIndex}>
                    <Stack direction="vertical" gap={5} className="align-items-start">
                        <div className="project-logo">
                            <a className="project-github-link align-items-center" href={data.githubLink} target="_blank" rel="noopener noreferrer">
                                {data.img && (
                                    <img
                                        className={data.rounded ? "roundedCorners" : ""}
                                        src={"imgs/" + data.img}
                                        style={{
                                            maxWidth: `${data.logoScale ? data.logoScale * 100 : 100}%`,
                                            maxHeight: `${data.logoScale ? data.logoScale * 100 : 100}%`,
                                        }}
                                    />
                                )}
                            </a>
                        </div>
                        <div className="project-info">
                            <Stack direction="horizontal" gap={2} className="align-items-center">
                                <a className="project-link" href={data.link} target="_blank" rel="noopener noreferrer">
                                    <Stack direction="horizontal" gap={2} className="align-items-center">
                                        <h3>{data.project}</h3>
                                        <IoArrowForwardOutline size={"1em"} />
                                    </Stack>
                                </a>
                                <div className="align-items-center ms-auto">
                                    <a className="project-github-link align-items-center" href={data.githubLink} target="_blank" rel="noopener noreferrer">
                                        <Stack gap={1} className="align-items-center">
                                            <IoLogoGithub />
                                        </Stack>
                                    </a>
                                </div>
                            </Stack>
                            {data.description && <p className="project-description">{data.description}</p>}
                            <Stack direction="horizontal" gap={2} className="mt-2">
                                <IoCalendarOutline />
                                <p>{data.start.toLocaleString("default", dateOptions)} &ndash; {data.end.toLocaleString("default", dateOptions)}</p>
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
    );
};

export default Projects;
