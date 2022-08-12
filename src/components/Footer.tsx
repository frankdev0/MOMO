import React from "react";

export default function Footer() {
	return (
		<div
			className='flex flex-col text-center md:text-left gap-y-10 md:flex-row md:px-72 justify-between py-16 gap-x-10 w-full bg bg-kashmir-blue text-white'
			id='footer'
		>
			<div className='flex flex-col'>
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
			</div>
		</div>
	);
}
