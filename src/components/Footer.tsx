import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import React from "react";

export default function Footer() {
	return (
		<div
			className='flex flex-col text-center md:text-left gap-y-10 md:flex-row px-10 md:px-72 justify-between py-6 gap-x-10 w-full bg bg-kashmir-blue text-white'
			id='footer'
		>
			<div className='flex flex-row gap-x-10 justify-between w-full'>
				<div className="my-auto flex flex-col">
					<StaticImage src="../images/logo_old copy.png" alt="Momo Logo" className="text-white" />
					<span className='text-gray-300 text-sm m-auto -mt-4'>© {new Date().getFullYear()}</span>
				</div>

				<div className='flex flex-col lg:flex-row gap-x-10 text-sm my-auto'>
					<div className="hover:underline mb-2">
						<Link to='/'>Home</Link>
					</div>
					<div className="hover:underline mb-2">
						<Link to="/about">About</Link>
					</div>
					<div className="hover:underline mb-2">
						<Link to="/contact">Contact</Link>
					</div>
					<div className="hover:underline mb-2">
						<Link to="/terms">Terms & Conditions</Link>
					</div>
					<div className="hover:underline mb-2">
						<Link to="/privacy">Privacy Policy</Link>
					</div>
				</div>
			</div>
		</div>
	);
}
