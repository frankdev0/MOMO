import { StaticImage } from "gatsby-plugin-image";
import React from "react";

export default function Testimonial() {
	return (
		<div className="z-[10000]">
			<div className="mb-4">
				We offer loans to small businesses, E-commerce Merchant,
				Students and POS agents
			</div>

			<div>
				<StaticImage src='../images/test_1.png' alt='Testimonial 1' />
			</div>

			<div>Olayinka Adebayo</div>

			<div className='text-kashmir-blue md:w-1/2 mx-auto mt-4 relative'>
				<div className="absolute top-0 left-0">
					<StaticImage src='../images/quote_up.png' alt='' />
				</div>

				<div className="p-10">
					Lorem ipsum lorem ipsum lorem ipsum lorem lorem ipsum lorem
					ipsim lorem ips ilorem ipsum losem ipsum lorem ipsum lorem ipsum
					lorem ipsum loeoe lorem ipsum lorem ipsum lorem ipusm lorem
					ipsum heoeo hispkm lorem ipsum Lorem ipsum lorem ipsum lorem
					ipsum lorem ipsum lorem ipsim lorem ips
				</div>

				<div className="absolute right-0 bottom-0">
					<StaticImage src='../images/quote_down.png' alt='' />
				</div>
			</div>
		</div>
	);
}
