import React from "react";
import { Stack } from "react-bootstrap";
import { IoCalendarOutline, IoLocationOutline } from "react-icons/io5";

const Education = ({ dataEducation, dateOptions }) => {
    return (
        <div className="mt-5 section section-education">
            <h2>Education</h2>
            <div className="education-info">
                <h3>{Date.now() < dataEducation.end && "Pursuing "}{dataEducation.degreeShort} @ {dataEducation.school}</h3>
                <Stack direction="horizontal" gap={2} className="mt-2">
                    <IoCalendarOutline />
                    <p>{dataEducation.start.toLocaleString("default", dateOptions)} &ndash; {dataEducation.end.toLocaleString("default", dateOptions)}</p>
                </Stack>
                <Stack direction="horizontal" gap={2} className="mt-1">
                    <IoLocationOutline />
                    <p>{dataEducation.location}</p>
                </Stack>
            </div>
        </div>
    );
};

export default Education;
