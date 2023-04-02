import { StaticImage } from "gatsby-plugin-image";
import React from "react";

export default function Testimonial({ name, text }) {
	return (
		<div className="z-[10000]">
			<div className="mb-4">
				We offer loans to small businesses, E-commerce Merchant,
				Students and POS agents
			</div>

			<div className="overflow-hidden">
				<StaticImage src='../images/avatar.png' alt='Testimonial 1' className="w-20 h-20 rounded-full" />
			</div>

			<div>{name}</div>

			<div className='text-kashmir-blue md:w-1/2 mx-auto mt-4 relative'>
				<div className="absolute top-0 left-0">
					<StaticImage src='../images/quote_up.png' alt='' />
				</div>

				<div className="lg:p-10">
					{text}
				</div>

				<div className="absolute right-0 bottom-0">
					<StaticImage src='../images/quote_down.png' alt='' />
				</div>
			</div>
		</div>
	);
}
