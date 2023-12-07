import React, { createElement } from "react";
import { content } from "../Content";

export default function Contact({}) {
	const { contact } = content;

	return (
		<section id="contact" className="bg-dark_primary text-white">
			<div className="md:container px-5 py-14">
				<h2 className="title !text-white" data-aos="fade-down">
					Contact
				</h2>
				<h4 className="subtitle" data-aos="fade-down">
					Get in touch!
				</h4>
				<br />
                <div className="flex gap-10 md:flex-row flex-col">
                    <div className="flex-1 flex flex-col gap-5">
                        {contact.links.map((content, i) => (
                            <div
                                key={i}
                                data-aos="fade-down"
                                data-aos-delay={i * 430}
                                className="flex items-center gap-2">
                                <h4 className="text-white">{createElement(content.icon)}</h4>
                                <a className="font-Poppins" href={content.link} target="_blank">
                                    {content.text}
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
			</div>
            <br/>
		</section>
	);
}
