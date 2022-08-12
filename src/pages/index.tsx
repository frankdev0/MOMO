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

            {/* Hero */}
            <section className="pb-96 font-poppins">
                <div className="flex flex-col static h-96">
                    <div className='relative'>
                        <div className="z-0 w-screen absolute">
                            <StaticImage
                                src='../images/landing.png'
                                alt='Hero image'
                                // width={450}
                                // height={800}
                                className='w-fit max-h-[740px]'
                            />
                        </div>
                    </div>

                    <div className="relative my-auto ml-10">
                        <div className='flex flex-col absolute w-1/3 gap-y-4'>
                            <div className="text-3xl font-light">Loan Up to</div>
                            <div className="text-7xl mb-2">5 Million Naira</div>

                            <div className="text-base">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis pellentesque
                                pharetra volutpat feugiat tempor facilisis lectus. Cras turpis ornare a
                                ultricies diam porttitor mattis bibendum pellentesque. Fermentum, vitae in nunc
                            </div>

                            <div className="w-full flex -mt-14">
                                <div className='flex flex-row gap-x-2'>
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
                    </div>
                </div>
            </section>


            <div className='flex flex-col-reverse md:flex-row md:pl-0 gap-x-6 md:mt-10' id='twophones1'>

                <div className='flex flex-row px-20 mt-20'>
                    <div className="md:hidden">
                        <StaticImage
                            src='../images/iPhone 11 Pro.png'
                            alt='iPhone1'
                            // width={550}
                            className='w-[246px] h-[502px]'
                        />
                    </div>

                    <div className='md:hidden mt-6'>
                        <StaticImage
                            src='../images/iPhone 1 Pro.png'
                            alt='iPhone2'
                        // width={500}
                        // className='w-[183px] h-[374px]'
                        />
                    </div>
                </div>



                <div className="hidden md:block">
                    <StaticImage
                        src='../images/iPhone 11 Pro.png'
                        alt='iPhone1'
                        // width={550}
                        className='w-[246px] h-[502px]'
                    />
                </div>

                <div className='hidden md:block mt-28 ml-6'>
                    <StaticImage
                        src='../images/iPhone 1 Pro.png'
                        alt='iPhone2'
                        // width={500}
                        className='w-[183px] h-[374px]'
                    />
                </div>

                <div className='flex flex-col gap-y-2 md:ml-10 mt-10 px-8 text-center md:text-left md:pr-40'>
                    <div className='capitalize text-3xl font-medium'>
                        With Momo you can quickly sort out urgent bills
                    </div>
                    <div className='text-justify mt-2 text-[#808080]'>
                        Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem
                        ipsum losem ipsum lorem ipsum lorem ipsum lorem ipsum
                        lorem ipusm lorem ipsum
                    </div>
                </div>

                <div className='relative'>
                    <StaticImage
                        src='../images/redstar.png'
                        alt=''
                        width={110}
                        className="mr-20"
                    />
                </div>
            </div>


            <div className='flex flex-col md:px-40 lg:px-40 py-20 px-6'>
                <div className='capitalize text-kashmir-blue text-3xl font-medium pb-2'>
                    Benefits of using the Momo Credit App
                </div>

                <div className='grid grid-cols-1 md:grid-cols-3 mt-6 gap-x-6'>
                    <div className='flex flex-col gap-y-4'>
                        <div className='my-auto'>
                            <StaticImage
                                src='../images/icon_1.svg'
                                alt=''
                                width={45}
                            />
                        </div>

                        <div className='flex flex-col gap-y-2'>
                            <div className='text-2xl text-kashmir-blue font-semibold'>
                                No Hidden Charges
                            </div>
                            <div className="text-[#808080]">
                                Lorem ipsum lorem ipsum lorem ipsum lorem ipsum
                                lorem ipsum losem ipsum lorem ipsum lorem ipsum
                                lorem ipsum lorem ipusm lorem ipsum
                            </div>
                        </div>
                    </div>

                    <div className='flex flex-col gap-y-4'>
                        <div className='my-auto'>
                            <StaticImage
                                src='../images/icon_2.svg'
                                alt=''
                                width={45}
                            />
                        </div>

                        <div className='flex flex-col gap-y-2'>
                            <div className='text-2xl text-kashmir-blue font-semibold'>
                                Secure and Safe
                            </div>
                            <div className="text-[#808080]">
                                Lorem ipsum lorem ipsum lorem ipsum lorem ipsum
                                lorem ipsum losem ipsum lorem ipsum lorem ipsum
                                lorem ipsum lorem ipusm lorem ipsum
                            </div>
                        </div>
                    </div>

                    <div className='flex flex-col gap-y-4'>
                        <div className='my-auto'>
                            <StaticImage
                                src='../images/icon_4.svg'
                                alt=''
                                width={45}
                            />
                        </div>

                        <div className='flex flex-col gap-y-2'>
                            <div className='text-2xl text-kashmir-blue font-semibold'>
                                Flexible Terms
                            </div>
                            <div className="text-[#808080]">
                                Lorem ipsum lorem ipsum lorem ipsum lorem ipsum
                                lorem ipsum losem ipsum lorem ipsum lorem ipsum
                                lorem ipsum lorem ipusm lorem ipsum
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div
                className='flex flex-col md:flex-row w-full mt-10 justify-center md:h-[600px] h-[850px]'
                id='urgent2k'
            >
                <div className='flex flex-row justify-center w-full mx-auto'>
                    <div className='px-10 md:px-0 my-2' id="bounce">
                        <StaticImage
                            src='../images/backed_phone.png'
                            alt=''
                            // width={1000}
                        />
                    </div>

                    <div className='flex flex-col gap-y-4 md:ml-20 p-10 md:text-left text-center w-1/2'>
                        <div className='text-3xl md:text-3xl capitalize font-medium'>
                            Say Goodbye to Urgent 2K
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
            </div>

            <div
				className='flex flex-col py-28 px-6 md:px-60 gap-y-6 text-center'
				id='testimonial'
			>
				<div className='text-3xl font-bold'>What our customers say</div>

				{/* <div className="w-2/3 mx-auto mt-4"></div> */}
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
						<Testimonial />
					</div>

					<div className=''>
						<Testimonial />
					</div>
				</Carousel>
			</div>

            <Footer />
        </main >
    );
}
