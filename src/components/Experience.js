/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { Stack } from "react-bootstrap";
import { IoArrowForwardOutline, IoCalendarOutline, IoLocationOutline } from "react-icons/io5";
import { isEasterEggTime } from "../utils/timeUtils";

const teams = {
    "Data Platform": "📊 Data Platform",
    "GraphQL API Management Platform": "🚀 GraphQL API Management Platform",
    "Web Development": "👨🏻‍💻 Web Development",
    "Platform and Analytics": "🔐 Platform and Analytics",
    "API Integrations and Security": "👾 API Integrations and Security",
    "Medical Software": "🏥 Medical Software",
};

const Experience = ({ dataExperience, dateOptions }) => {
    const showEasterEgg = isEasterEggTime();

    return (
        <div className="mt-5 section section-experience">
            <h2>Experience</h2>
            {dataExperience.map((data, dataIndex) => (
                <div className="experience-card" key={"experience-card-" + dataIndex}>
                    <Stack direction="horizontal" gap={4} className="align-items-start">
                        <div className="experience-logo">
                            {data.logo && (
                                <img
                                    src={"imgs/" + data.logo}
                                    style={{
                                        maxWidth: `${data.logoScale ? data.logoScale * 100 : 100}%`,
                                        maxHeight: `${data.logoScale ? data.logoScale * 100 : 100}%`,
                                    }}
                                />
                            )}
                        </div>
                        <div className="experience-info">
                            <a className="company-link" href={data.link} target="_blank" rel="noopener noreferrer">
                                <Stack direction="horizontal" gap={2}>
                                    <h3>
                                        {Date.now() < data.start && "Incoming "}
                                        {data.titleShort} @ {data.company}
                                    </h3>
                                    <IoArrowForwardOutline size={"1em"} />
                                </Stack>
                            </a>
                            {data.description && <p className="experience-description">{showEasterEgg ? teams[data.team] : data.description}</p>}
                            <Stack direction="horizontal" gap={2} className="mt-2">
                                <IoCalendarOutline />
                                <p>
                                    {data.start.toLocaleString("default", dateOptions)} &ndash;{" "}
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
                        </div>
                    </Stack>
                </div>
            ))}
        </div>
    );
};

export default Experience;
