import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { content } from "../Content";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper";

export default function Projects({}) {
	const { projects } = content;

	return (
		<section id="projects" className="min-h-fit bg-bg_light_primary">
			<div className="md-container px-5 py-14">
				<h2 className="title" data-aos="fade-down">
					Projects
				</h2>
				<h4 className="subtitle" data-aos="fade-down">
					Fun things I'm working on
				</h4>
			</div>
			<br />

			<div className="flex items-center lg:flex-row flex-col-reverse gap-5">
                <img
                    src={projects.image}
                    alt="..."
                    data-aos="fade-right"
                    className="max-w-[45vw] min-w-[22rem]"
                />
                <Swiper
					pagination={{
						clickable: true,
					}}
					data-aos="fade-left"
					spaceBetween={20}
					modules={[Pagination]}
					className="rounded-3xl pb-16 max-w-xs drop-shadow-primary self-start">
					{projects.projects.map((content, i) => (
						<SwiperSlide
							key={i}
							className="bg-white rounded-3xl p-5 border-b-8 border-[#FAF9FD] h-fit">
							<img src={content.image} alt="..." />
							<div className="flex flex-col gap-1 mt-2">
								<h5 className="font-bold font-Poppins">{content.name}</h5>
                                <h6>{content.description}</h6>
								{
                                    content.link ? (<button 
                                        className="font-bold text-gray self-end"
                                        onClick={() => window.location = content.link}>
                                        Check it out!
                                    </button>) : null
                                }
							</div>
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</section>
	);
}
