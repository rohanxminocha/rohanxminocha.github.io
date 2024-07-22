/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { Stack } from "react-bootstrap";
import { IoLocationOutline } from "react-icons/io5";
import { isEasterEggTime } from "../utils/timeUtils";

const Header = ({ dataLinks }) => {
    const showEasterEgg = isEasterEggTime();
    const nameWithEmoji = showEasterEgg ? "Rohan Minocha 🤑" : "Rohan Minocha";

    return (
        <div className="section section-header">
            <div>
                <Stack direction="vertical" gap={4}>
                    <Stack direction="horizontal" gap={3} className="header-images">
                        <div className="header-photo">
                            <img src={"imgs/self-linkedin.png"} style={{ maxWidth: "125%", maxHeight: "125%" }} />
                        </div>
                        <div className="location-photo">
                            <img src={"imgs/toronto.jpeg"} />
                        </div>
                    </Stack>
                    <div>
                        <h1>{nameWithEmoji}</h1>
                        <h3>Senior Computer Science Student @ University of Waterloo</h3>
                        <Stack direction="horizontal" gap={2}>
                            <IoLocationOutline />
                            <p>Toronto, ON, Canada</p>
                        </Stack>
                    </div>
                    <Stack direction="horizontal" gap={3} className="header-links align-items-start">
                        {dataLinks.map((link, linkIndex) => (
                            <a
                                href={link.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="header-link"
                                key={"header-link-" + linkIndex}
                                {...{ download: link.download }}
                            >
                                <Stack direction="horizontal" className="header-links">
                                    {link.icon}
                                </Stack>
                            </a>
                        ))}
                    </Stack>
                    <a
                        href="mailto:mail@rminocha.com?subject=Sike:%20An%20Offer%20for%20Rohan!&amp;body=Hey%20Rohan,%0D%0A%0D%0ASo,%20I%20clicked%20this%20link%20thinking%20I'd%20ask%20for%20your%20resume,%20but%20plot%20twist:%20I%20actually%20want%20to%20give%20you%20a%20job%20offer!%20Surprise!%20🎉%0D%0A%0D%0AI%20stumbled%20upon%20your%20profile%20and%20wow,%20am%20I%20impressed!%20We're%20on%20the%20lookout%20for%20someone%20with%20your%20talents%20and%20skills,%20and%20I%20think%20you%20could%20be%20the%20perfect%20fit%20for%20a%20super%20exciting%20role%20we%20have.%0D%0A%0D%0ALet's%20flip%20the%20script%20-%20instead%20of%20you%20trying%20to%20impress%20us%20with%20your%20resume,%20how%20about%20we%20try%20to%20impress%20you%20with%20an%20offer?%20If%20you're%20up%20for%20it,%20I'd%20love%20to%20share%20more%20details%20and%20see%20if%20we%20can%20make%20some%20magic%20happen.%0D%0A%0D%0AThanks%20for%20being%20awesome,%0D%0A[Your%20Name]%0D%0A[Your%20Title]%20at%20[Your%20Organization]"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="header-status-link"
                    >
                        <div className="status">
                            <div className="status_light">
                                <div className="status_light_ring"></div>
                                <div className="status_light_led"></div>
                            </div>
                            <div className="status_message">
                                Seeking 2025 SWE New Grad opportunities! Reach out for my <b>Resume</b> :)
                            </div>
                        </div>
                    </a>
                </Stack>
            </div>
        </div>
    );
};

export default Header;
