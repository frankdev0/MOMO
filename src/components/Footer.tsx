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
				<div className="my-auto">
					<StaticImage src="../images/logo_old copy.png" alt="Momo Logo" className="text-white" />
				</div>

				<div className='flex flex-row gap-x-10 text-lg my-auto'>
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
			{/* <div className='flex flex-col'>
				<div className='text-xl mb-2'>Homefast</div>
				<div>About Us</div>
				<div>Loan Offers</div>
				<div>Corporate Materials</div>
				<div>Interest Breakdown</div>
				<div>Human Resources</div>
				<div>Sitemap</div>
			</div>

			<div className='flex flex-col'>
				<div className='text-xl mb-2'>Our Services</div>
				<div>Our Special Services</div>
				<div>Verification</div>
				<div>Legal Procedure</div>
				<div>Projects</div>
				<div>Loans</div>
				<div>Repayment</div>
			</div>

			<div className='flex flex-col'>
				<div className='text-xl mb-2'>Other</div>
				<div>Terms of Use</div>
				<div>Operation Guide</div>
				<div>Cookie Policy</div>
				<div>About Protection of Personal Data</div>
				<div>Explicit Consent Text</div>
				<div>Contact</div>
			</div> */}
		</div>
	);
}
