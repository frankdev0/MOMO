import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import { Carousel } from "react-responsive-carousel";
import { Navbar, Footer, Testimonial } from "../components";

export default function About({ location }) {
    return (
        <main className='w-full h-screen flex flex-col font-poppins'>
            <title>Momo's Services</title>

            <Navbar path={location.pathname} />

            {/* Hero */}
            <div
                className='flex flex-col md:flex-row w-full mt-20 justify-center'
            >
                <div className='flex flex-row md:ml-20'>
                    <div className='flex flex-col gap-y-4 md:ml-20  mt-10 md:text-left text-center'>
                        <div className='text-3xl md:text-4xl capitalize'>
                            What Makes Momo Stand Out
                        </div>
                        <div className='text-[#808080]'>
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
                        width={800}
                    />
                </div>
            </div>

            <div className="h-auto">
                <div className='flex flex-row text-white w-full pb- gap-x-40 -mt-52 overflow-hidden' id='about_download'>
                    <div className='flex flex-col gap-6 my-auto py-40 px-20'>
                        <div className='flex flex-row'>
                            <div className='text-3xl capitalize w-2/3'>
                                What Motivate Users to Download Our Mobile App
                            </div>

                            <div>
                                <StaticImage src='../images/white_star.svg' alt='' />
                            </div>
                        </div>

                        <div className="text-justify w-2/3">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Facilisis pellentesque pharetra volutpat feugiat tempor
                        </div>

                        <div className="mt-8">
                            <StaticImage
                                alt={""}
                                // width={750}
                                src={"../images/momoloannew.jpg"}
                                className="rounded-md w-[20rem] lg:w-[45rem] lg:h-[15rem] xl:h-[30rem]"
                            />
                        </div>
                    </div>

                    <div className='flex flex-col gap-y-6 mt-[35rem]'>
                        <div className='flex flex-row gap-10'>
                            <div>
                                <StaticImage src="../images/moneybag.svg" alt="" />
                            </div>
                            <div>Flexible Terms</div>
                        </div>

                        <div className='flex flex-row gap-10'>
                            <div>
                                <StaticImage src="../images/cash.svg" alt="" />
                            </div>
                            <div>No Hidden Charges</div>
                        </div>

                        <div className='flex flex-row gap-10'>
                            <div>
                                <StaticImage src="../images/secure.svg" alt="" />
                            </div>
                            <div>Secure and Safe</div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='flex flex-col gap-y-4'>
                <div className="text-4xl text-center">Explore Loan Offers for Different Purpose</div>

                <div className='flex flex-row w-full text-white'>
                    <div className="relative text-center">
                        <StaticImage src="../images/momoimage.e copy.png" alt="" className="max-h-[338px]" />
                        <div className="absolute font-bold top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">Car Loans</div>
                    </div>

                    <div className="relative text-center">
                        <StaticImage src="../images/imagein.png" alt="" className="max-h-[338px]" />
                        <div className="absolute font-bold top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">Education Loans</div>
                    </div>

                    <div className="relative text-center">
                        <StaticImage src="../images/momoina.png" alt="" className="max-h-[338px]" />
                        <div className="absolute font-bold top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">Business Loans</div>
                    </div>

                </div>
            </div>

            {/* <div className='flex flex-col text-center my-20 gap-y-6 relative'>
                <div className="absolute right-60">
                    <StaticImage src='../images/redstar.png' alt='' />
                </div>
                <div className="font-medium text-3xl">Our Team</div>
                <div className="text-[#727272]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Facilisis pellentesque pharetra volutpat feugiat tempor
                </div>

                <div className='flex flex-row justify-center gap-x-20 mt-4'>
                    <div className='flex flex-col gap-y-2'>
                        <div>
                            <StaticImage src="../images/about_1.png" alt="" />
                        </div>

                        <div className="text-xl font-medium text-kashmir-blue">Jane Liam</div>
                        <div className="text-[#808080]">Founder</div>
                    </div>

                    <div className='flex flex-col gap-y-2'>
                        <div>
                            <StaticImage src="../images/about_3.png" alt="" />
                        </div>

                        <div className="text-xl font-medium text-kashmir-blue">Patrick Ihenayo</div>
                        <div className="text-[#808080]">Manager</div>
                    </div>

                    <div className='flex flex-col gap-y-2'>
                        <div>
                            <StaticImage src="../images/about_2.png" alt="" />
                        </div>

                        <div className="text-xl font-medium text-kashmir-blue">Nneka Peter</div>
                        <div className="text-[#808080]">Co-Founder</div>
                    </div>
                </div>

            </div> */}

            <div className='flex flex-row mx-auto gap-x-10 my-28 px-20 relative'>
                <div className='flex flex-col gap-y-4'>
                    <div className="text-3xl font-medium w-4/5">
                        Start Lending Money
                        to Sort Out Important Bills
                    </div>

                    <div className="text-[#727272]">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Facilisis pellentesque pharetra volutpat feugiat tempor
                    </div>


                    <div className='flex flex-row gap-x-2 -mt-12'>
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

                <div className="">
                    <StaticImage src='../images/momoimage.jpg' alt='' width={900} className="rounded-lg" />
                </div>

                <div className="absolute bottom-10">
                    <StaticImage src='../images/redstar.png' alt='' />
                </div>
            </div>

            <Footer />
        </main>
    );
}
