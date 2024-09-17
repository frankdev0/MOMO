import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import { useMediaQuery } from "react-responsive";
import { Carousel } from "react-responsive-carousel";
import { Navbar, Footer, Testimonial } from "../components";

export default function Home({ location }) {
	const isDesktopOrLaptop = useMediaQuery({ minWidth: 1224 })
	const isBigScreen = useMediaQuery({ minWidth: 1824 })
	const isTabletOrMobile = useMediaQuery({ maxWidth: 1224 })
	const isPortrait = useMediaQuery({ orientation: 'portrait' })
	const isRetina = useMediaQuery({ minResolution: '2dppx' })
	return (
		<main className='w-full h-screen flex flex-col overflow-x-hidden font-raleway'>
			<title>Momo Home</title>

			<Navbar path={location.pathname} />

	
			<div
				className='md:flex flex-col md:flex-row mx-auto md:justify-evenly text-kashmir-blue w-full z-10 md:pl-72  pt-40 hidden'
				id='home_hero'
			>
				<div className='md:ml-76 md:py-48 md:px-32 px-10 mx-auto flex'>
					<div className='flex flex-col gap-y-2 -mt-40 w-full'>
						<div className='font-semibold text-2xl md:-ml-40'>
							Loan Up To
						</div>
						<div className='text-4xl md:text-8xl font-bold text-kashmir-blue-600 mx-auto'>
							5 Million Naira
						</div>
						<div className='text-3xl ml-10 text-center'>
							With the Momo Credit App
						</div>
					</div>
				</div>

				<div className='mt-10 md:mt-40 w-2/3 mx-auto md:w-auto md:mx-0'>
					<StaticImage
						src='../images/hero.png'
						alt='Hero image'
						width={450}
					/>
				</div>

				<div className="text-center md:hidden px-20">
					Lorem ipsum lorem ipsum lorem ipsum loreipsum lorem ipsum losem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipusm
				</div>

			</div>

			{/* Mobile Hero */}
			<div
				className='flex flex-col md:flex-row mx-auto md:justify-evenly text-kashmir-blue w-full z-10 md:pl-72  pt-40 md:hidden'
				id='home_hero_mobile'
			>
				<div className='md:ml-76 md:py-48 md:px-40 px-10'>
					<div className='flex flex-col gap-y-4 -mt-10'>
						<div className='font-semibold text-2xl md:-ml-40'>
							Loan Up To
						</div>
						<div className='text-4xl md:text-8xl font-bold text-kashmir-blue-600 '>
							5 Million Naira
						</div>
						<div className='text-3xl ml-10 text-center'>
							With the Momo Credit App
						</div>
					</div>
				</div>

				<div className='mt-10 md:mt-80 w-2/3 mx-auto md:w-auto md:mx-0'>
					<StaticImage
						src='../images/hero.svg'
						alt='Hero image'
						width={450}
					/>
				</div>

				<div className="text-center md:hidden px-20">
					Lorem ipsum lorem ipsum lorem ipsum loreipsum lorem ipsum losem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipusm
				</div>

				<div className="w-full flex px-20">
					<div className='flex flex-row gap-x-2 mx-auto'>
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

			<div className='flex flex-col-reverse  md:flex-row md:pl-0 gap-x-6 md:mt-10' id='twophones1'>

				<div className='flex flex-row px-20 mt-20'>
					<div className="md:hidden">
						<StaticImage
							src='../images/iPhone_demo.png'
							alt='iPhone1'
						// width={550}
						/>
					</div>

					<div className='md:hidden mt-6'>
						<StaticImage
							src='../images/iPhone_demo_2.png'
							alt='iPhone2'
						// width={500}
						/>
					</div>
				</div>



				<div className="hidden md:block">
					<StaticImage
						src='../images/iPhone_demo.png'
						alt='iPhone1'
						width={550}
					/>
				</div>

				<div className='hidden md:block mt-14'>
					<StaticImage
						src='../images/iPhone_demo_2.png'
						alt='iPhone2'
						width={500}
					/>
				</div>

				<div className='flex flex-col gap-y-2 md:ml-10 mt-10 md:mt-60 px-8 text-center md:text-left md:pr-40'>
					<div className='capitalize text-3xl md:text-5xl w-full'>
						With Momo you can quickly sort out urgent bills
					</div>
					<div className='text-justify mt-2'>
						Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem
						ipsum losem ipsum lorem ipsum lorem ipsum lorem ipsum
						lorem ipusm lorem ipsum
					</div>
				</div>

				{/* <div className='relative'>
					<StaticImage
						src='../images/ellipse.svg'
						alt=''
						width={900}
					/>
				</div> */}
			</div>

			<div
				className='flex flex-col md:flex-row bg-kashmir-blue w-full mt-20 text-white justify-center md:h-[600px] h-[850px]'
				id='urgent2k'
			>
				<div className='flex flex-row md:ml-20'>
					<div className='flex flex-col md:p-40 gap-y-4 md:ml-20 p-10 md:text-left text-center'>
						<div className='text-3xl md:text-5xl capitalize font-semibold'>
							Goodbye to Urgent 2K
						</div>
						<div className='md:w-2/3'>
							Lorem ipsum lorem ipsum lorem ipsum lorem ipsum
							lorem ipsum losem ipsum lorem ipsum lorem ipsum
							lorem ipsum lorem ipusm lorem ipsum lorem ipsum
							lorem ispus
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

				<div className='px-10 md:px-0 md:mr-28 my-2' id="bounce">
					<StaticImage
						src='../images/grouped_phones.png'
						alt=''
						width={1000}
					/>
				</div>
			</div>

			<div className='flex flex-col md:px-40 lg:px-60 py-20 px-6' id='benefits'>
				<div className='capitalize text-kashmir-blue text-3xl text-center font-bold'>
					Benefits of using the Momo Credit App
				</div>

				<div className='grid grid-cols-1 md:grid-cols-2 mx-auto mt-6'>
					<div className='flex flex-row p-8 gap-x-6'>
						<div className='my-auto'>
							<StaticImage
								src='../images/icon_1.svg'
								alt=''
								width={100}
							/>
						</div>

						<div className='flex flex-col gap-y-4'>
							<div className='text-2xl text-kashmir-blue font-semibold'>
								No Hidden Charges
							</div>
							<div>
								Lorem ipsum lorem ipsum lorem ipsum lorem ipsum
								lorem ipsum losem ipsum lorem ipsum lorem ipsum
								lorem ipsum lorem ipusm lorem ipsum
							</div>
						</div>
					</div>

					<div className='flex flex-row p-8 gap-x-6'>
						<div className='my-auto'>
							<StaticImage
								src='../images/icon_2.svg'
								alt=''
								width={100}
							/>
						</div>

						<div className='flex flex-col gap-y-4'>
							<div className='text-2xl text-kashmir-blue font-semibold'>
								Secure and Safe
							</div>
							<div>
								Lorem ipsum lorem ipsum lorem ipsum lorem ipsum
								lorem ipsum losem ipsum lorem ipsum lorem ipsum
								lorem ipsum lorem ipusm lorem ipsum
							</div>
						</div>
					</div>

					<div className='flex flex-row p-8 gap-x-6'>
						<div className='my-auto'>
							<StaticImage
								src='../images/icon_3.svg'
								alt=''
								width={100}
							/>
						</div>

						<div className='flex flex-col gap-y-4'>
							<div className='text-2xl text-kashmir-blue font-semibold'>
								Apply In Minutes
							</div>
							<div>
								Lorem ipsum lorem ipsum lorem ipsum lorem ipsum
								lorem ipsum losem ipsum lorem ipsum lorem ipsum
								lorem ipsum lorem ipusm lorem ipsum
							</div>
						</div>
					</div>

					<div className='flex flex-row p-8 gap-x-6'>
						<div className='my-auto'>
							<StaticImage
								src='../images/icon_4.svg'
								alt=''
								width={100}
							/>
						</div>

						<div className='flex flex-col gap-y-4'>
							<div className='text-2xl text-kashmir-blue font-semibold'>
								Flexible Terms
							</div>
							<div>
								Lorem ipsum lorem ipsum lorem ipsum lorem ipsum
								lorem ipsum losem ipsum lorem ipsum lorem ipsum
								lorem ipsum lorem ipusm lorem ipsum
							</div>
						</div>
					</div>
				</div>
			</div>

			<div
				className='flex flex-col py-32 px-6 md:px-60 gap-y-6 text-center'
				id='testimonial'
			>
				<div className='text-3xl font-bold'>What our customers say</div>

				<Carousel
					autoPlay
					infiniteLoop
					interval={2000}
					swipeable
					showStatus={false}
				// showArrows
				// showIndicators
				>
					<div className=''>
						{/* <Testimonial /> */}
					</div>

					<div className=''>
						{/* <Testimonial /> */}
					</div>
				</Carousel>
			</div>

			<Footer />
		</main>
	);
}
