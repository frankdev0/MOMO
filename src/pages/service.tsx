import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import { Carousel } from "react-responsive-carousel";
import { Navbar, Footer, Testimonial } from "../components";

export default function Service({ location }) {
	return (
		<main className='w-full h-screen flex flex-col overflow-x-hidden font-raleway'>
			<title>About Momo</title>

			<Navbar path={location.pathname} />

			{/* Hero */}
			<div className="md:px-10 my-10 md:my-20 font-poppins">
				<div className="bg-gradient-to-br from-[#FCEAEB] overflow-hidden via-[#E4E5E9] to-[#BCD7FC] h-[700px] md:h-[500px] w-full px-10 md:px-20">
					<div className='flex md:flex-row flex-col-reverse'>
						<div className='flex flex-col md:my-24 my-4 gap-y-4'>
							<div className="text-3xl md:text-6xl text-kashmir-blue capitalize font-bold drop-shadow-md">Loan Up To 5 million naira</div>
							<div className="text-xl md:text-3xl text-kashmir-blue capitalize font-semibold drop-shadow-md">With the Momo Credit App</div>
							<div className="my-2 md:w-2/3">Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
								losem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipusm lorem ipsum lorem ipsum</div>

							<div className='flex flex-row gap-x-2 -mt-8'>
								<div>
									<StaticImage
										src='../images/app.svg'
										alt='Apple Logo'
										width={180}
									/>
								</div>

								<div className='my-auto'>
									<StaticImage
										src='../images/google-play-badge.png'
										alt='Apple Logo'
										width={200}
									/>
								</div>
							</div>
						</div>

						<div className="hidden md:block md:my-6">
							<StaticImage src="../images/service_phones.png" alt="" width={500} />
						</div>

						<div className="md:hidden mx-auto my-10">
							<StaticImage src="../images/service_phones.png" alt="" width={250} />
						</div>
					</div>


				</div>
			</div>

			<div>
				<div className='flex flex-col bg-[#F4F8FD] h-[980px] md:h-[750px] relative md:py-14 py-10 md:px-48 px-10 overflow-hidden'>
					<div className="absolute right-0 top-[33%]" id="side_ball">
						<StaticImage src="../images/zero_circles.svg" alt="" />
					</div>

					<div className='flex flex-col md:flex-row justify-left md:gap-x-20 z-20'>
						<div className='flex flex-col gap-y-2 md:w-1/3'>
							<div className="text-5xl capitalize font-bold">Zero Interest</div>
							<div className="text-5xl capitalize font-bold">on First Loan</div>

							<div className="mt-4">Lorem ipsum lorem ipsum lorem ipsum lorem
								ipsum lorem ipsum losem ipsum lorem ipsum
								lorem ipsum lorem ipsum lorem ipusm lorem ipsum.</div>
						</div>

						<div className='flex flex-row'>

							<div className='flex flex-col gap-y-4 font-extralight text-xl text-justify'>
								<div className="font-normal">An example of a Momo</div>
								<div className="font-normal -mt-4">loan calculation scheme</div>
								<div>Borrow ₦100,000 on first loan</div>
								<div>Interest (total cost of the loan): ₦0,000 (0% rate)</div>
								<div>Total amount payable: ₦100,000</div>
							</div>

							<div id="top_ball">
								<StaticImage src="../images/small_circle_safe.svg" alt="" />
							</div>
						</div>


					</div>

					<div className='flex flex-col md:flex-row my-10 md:my-20 justify-center gap-x-20' id="safe">
						<div className="w-2/3 md:w-auto mx-auto md:mx-0 mb-6 md:mb-0">
							<StaticImage src="../images/safe.png" alt="" />
						</div>

						<div className='flex flex-col md:w-1/3 gap-y-6 my-auto mx-auto md:mx-0 text-center md:text-left'>
							<div className="text-3xl md:text-5xl font-semibold">Secure and Safe</div>
							<div className="">Lorem ipsum lorem ipsum lorem ipsum lorem
								ipsum lorem ipsum losem ipsum lorem ipsum
								lorem ipsum lorem ipsum lorem ipusm lorem ipsum.</div>
						</div>
					</div>
				</div>
			</div>

			<div className='flex flex-col-reverse md:flex-row md:pl-64 gap-x-6 md:my-20 px-10 md:px-36 py-10' id='twophones1'>
				<div className="hidden md:block">
					<StaticImage
						src='../images/service_iPhone_1.png'
						alt='iPhone1'
						width={550}
					/>
				</div>

				<div className='mt-14 hidden md:block'>
					<StaticImage
						src='../images/service_iPhone_2.png'
						alt='iPhone2'
						width={500}
					/>
				</div>

				<div className='flex flex-row md:hidden'>
					<div className="">
						<StaticImage
							src='../images/service_iPhone_1.png'
							alt='iPhone1'
							width={250}
						/>
					</div>

					<div className='mt-14 '>
						<StaticImage
							src='../images/service_iPhone_2.png'
							alt='iPhone2'
							width={200}
						/>
					</div>
				</div>

				<div className='flex flex-col gap-y-2 md:ml-10 md:mt-60 px-8'>
					<div className='capitalize text-2xl w-full'>
						With Momo you can quickly sort out urgent bills
					</div>
					<div className='text-justify mt-2'>
						Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem
						ipsum losem ipsum lorem ipsum lorem ipsum lorem ipsum
						lorem ipusm lorem ipsum
					</div>

					<div className='flex flex-row gap-x-2 -mt-8'>
						<div>
							<StaticImage
								src='../images/app.svg'
								alt='Apple Logo'
								width={180}
							/>
						</div>

						<div className='my-auto'>
							<StaticImage
								src='../images/google-play-badge.png'
								alt='Apple Logo'
								width={200}
							/>
						</div>
					</div>
				</div>


			</div>

			<Footer />
		</main>
	);
}
