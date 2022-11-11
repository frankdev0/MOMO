import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import { Carousel } from "react-responsive-carousel";
import { Navbar, Footer, Testimonial } from "../components";

export default function About({ location }) {
    return (
        <main className='w-full h-screen flex flex-col font-raleway'>
            <title>MoMo's Services</title>

            <Navbar path={location.pathname} />

            {/* Hero */}
            <div className="px-10 md:mt-20">
                <div className="h-[400px] md:h-[500px] w-full px-10 md:px-20">
                    <div className='flex flex-col md:flex-row justify-center gap-x-52'>
                        <div className='flex flex-col my-6 md:my-24 gap-y-4'>
                            <div className="text-center md:text-left text-3xl md:text-4xl lg:text-6xl capitalize font-semibold drop-shadow-md">What makes</div>
                            <div className="text-center md:text-left text-3xl md:text-4xl lg:text-6xl capitalize font-semibold drop-shadow-md">Momo stand out</div>


                        </div>

                        <div className="my-6">
                            <StaticImage src="../images/moneybag.png" alt="" width={500} />
                        </div>
                    </div>


                </div>
            </div>

            <div className="w-full px-10">
                <div className='grid grid-cols-1 md:grid-cols-3 mx-auto w-full gap-x-10 gap-y-6'>
                    <div className='flex flex-col gap-y-2'>
                        <div className="text-xl text-kashmir-blue-600">No Hidden Charges</div>
                        <div className="">Lorem ipsum lorem ipsum lorem ipsum lorem
                            ipsum lorem ipsum losem ipsum lorem ipsum
                            lorem ipsum lorem ipsum lorem ipusm lorem ipsum</div>
                    </div>

                    <div className='flex flex-col gap-y-2'>
                        <div className="text-xl text-kashmir-blue-600">Flexible Terms</div>
                        <div className="">Lorem ipsum lorem ipsum lorem ipsum lorem
                            ipsum lorem ipsum losem ipsum lorem ipsum
                            lorem ipsum lorem ipsum lorem ipusm lorem ipsum</div>
                    </div>

                    <div className='flex flex-col gap-y-2'>
                        <div className="text-xl text-kashmir-blue-600">Secure and Safe</div>
                        <div className="">Lorem ipsum lorem ipsum lorem ipsum lorem
                            ipsum lorem ipsum losem ipsum lorem ipsum
                            lorem ipsum lorem ipsum lorem ipusm lorem ipsum</div>
                    </div>
                </div>
            </div>

            <div className="my-20">
                <div className='flex flex-col bg-[#F4F8FD] h-[1100px] w-full md:h-[600px] relative py-16 px-10 md:px-48'>
                    <div className="text-center text-6xl font-bold mb-10">Our Team</div>
                    <div className='grid grid-cols-1 md:grid-cols-3 mx-auto w-full gap-x-10 gap-y-6'>
                        <div className='flex flex-col gap-y-4 text-center mx-auto md:mx-0'>
                            <div className="w-[250px] h-[200px] xl:w-[350px] lg:h-[300px] bg-gray-400 mx-auto"></div>
                            <div>Patrick Ihenayo</div>
                            <div>Founder</div>
                        </div>

                        <div className='flex flex-col gap-y-4 text-center mx-auto md:mx-0'>
                            <div className="w-[250px] h-[200px] xl:w-[350px] lg:h-[300px] bg-gray-400 mx-auto"></div>
                            <div>Patrick Ihenayo</div>
                            <div>Co-Founder</div>
                        </div>

                        <div className='flex flex-col gap-y-4 text-center mx-auto md:mx-0'>
                            <div className="w-[250px] h-[200px] xl:w-[350px] lg:h-[300px] bg-gray-400 mx-auto"></div>
                            <div>Patrick Ihenayo</div>
                            <div>Manager</div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='flex flex-col md:flex-row justify-between md:px-16 px-10 py-6 md:py-16 gap-y-20' id="about_pattern">
                <div className="flex-1 my-auto">
                    <StaticImage src="../images/loan_steps.png" alt="" />
                </div>

                <div className='flex my-auto flex-1 flex-col capitalize text-2xl md:text-4xl text-center font-semibold leading-tight'>
                    <div>Start Lending Money</div>
                    <div>to Sort Out Important Bills</div>
                </div>

                <div className="flex-1 my-auto">
                    <StaticImage src="../images/spender.png" alt="" />
                </div>
            </div>

            <Footer />
        </main>
    );
}
