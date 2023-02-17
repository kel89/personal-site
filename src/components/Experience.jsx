import React from "react";
import { BiJoystickButton } from "react-icons/bi";
import { content } from "../Content";

export default function Experience({}) {
	let { experience } = content;

	return (
		<section id="experience">
			<div className="md:container px-5 py-14">
				<h2 className="title" data-aos="fade-down">
					Experience
				</h2>
				<h4 className="subtitle" data-aos="fade-down">
					Work History
				</h4>
				<br />
				<div className="flex gap-5 justify-between flex-wrap group">
					{experience.map((job, i) => (
						<div
							key={i}
							data-aos="fade-up"
							data-aos-delay={i * 600}
							className="min-w-[20rem]  max-w-[30rem] duration-300 cursor-pointer border-2 border-slate-200 rounded-xl text-center bg-bg_light_primary p-6 flex-1 
              hover:!blur-none">
							<div className='flex justify-between mb-2'>
                                <img src={job.logo} alt="..." className="w-10" />
                                <div className='text-right'>
                                    <p className='font-bold'>{job.company}</p>
                                    <p className='text-xs'>{job.companyDescription}</p>
                                </div>
                            </div>
                            <div className='flex justify-between mb-2'>
                                <p className='text-sm text-left'>{job.title}</p>
                                <p className='text-xs italic text-right'>{job.dates}</p>
                            </div>
                            <ul className='text-left list-disc'>
                                {job.tasks.map((x,i) => <li key={i}>{x}</li>)}
                            </ul>

						</div>
					))}
				</div>
			</div>
		</section>
	);
}
