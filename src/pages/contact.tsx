import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import { Carousel } from "react-responsive-carousel";
import { Navbar, Footer, Testimonial } from "../components";

export default function About({ location }) {
    return (
        <main className='w-full h-screen flex flex-col font-poppins'>
            <title>Contact MoMo</title>

            <Navbar path={location.pathname} />

            {/* Hero */}
            <div className="flex">
                <div className="flex flex-col lg:flex-row relative mb-40 md:mb-72 lg:mb-2.5 h-[100vh] 2xl:h-[1170px] w-full">
                    <div className="absolute">
                        <StaticImage src="../images/touch.png" alt="" className="z-[-100] h-screen md:h-auto w-screen" />
                    </div>

                    <div className='flex flex-col gap-y-2 px-10 md:px-0 md:pl-20 mt-10 md:mt-40 z-50'>
                        <div className="text-[#111111] font-medium text-3xl">Get In Touch</div>
                        <div className="text-[#686868] md:w-1/2">
                            Turn to our experts to perform comprehensive, multi-stage testing and auditing of your software solutions.
                        </div>

                        <div className='flex flex-row gap-x-4 my-2 text-[#686868]'>
                            <div className="my-auto">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                    <path fillRule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clipRule="evenodd" />
                                </svg>
                            </div>

                            <div>+234 {"("}802{")"} 123 4569</div>
                        </div>

                        <div className='flex flex-row gap-x-4 my-2 text-[#686868]'>
                            <div className="my-auto">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                    <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM8.547 4.505a8.25 8.25 0 1011.672 8.214l-.46-.46a2.252 2.252 0 01-.422-.586l-1.08-2.16a.414.414 0 00-.663-.107.827.827 0 01-.812.21l-1.273-.363a.89.89 0 00-.738 1.595l.587.39c.59.395.674 1.23.172 1.732l-.2.2c-.211.212-.33.498-.33.796v.41c0 .409-.11.809-.32 1.158l-1.315 2.191a2.11 2.11 0 01-1.81 1.025 1.055 1.055 0 01-1.055-1.055v-1.172c0-.92-.56-1.747-1.414-2.089l-.654-.261a2.25 2.25 0 01-1.384-2.46l.007-.042a2.25 2.25 0 01.29-.787l.09-.15a2.25 2.25 0 012.37-1.048l1.178.236a1.125 1.125 0 001.302-.795l.208-.73a1.125 1.125 0 00-.578-1.315l-.665-.332-.091.091a2.25 2.25 0 01-1.591.659h-.18c-.249 0-.487.1-.662.274a.931.931 0 01-1.458-1.137l1.279-2.132z" clipRule="evenodd" />
                                </svg>
                            </div>

                            <div>
                                PLOT 22, Jubilation Betel Estate, Lokogoma, Abuja
                            </div>
                        </div>

                        <div className='flex flex-row gap-x-10 mt-4'>
                            <div>
                                <StaticImage src="../images/fb.svg" alt="" />
                            </div>

                            <div>
                                <StaticImage src="../images/ig.svg" alt="" />
                            </div>

                            <div>
                                <StaticImage src="../images/twitter.svg" alt="" />
                            </div>
                        </div>
                    </div>

                    <div className='flex flex-col bg-kashmir-blue rounded-xl mt-20 md:mt-44 lg:mt-20 px-10 md:px-16 py-10 justify-center md:w-4/5 2xl:w-1/2 md:mx-auto md:mr-16 h-3/5 gap-y-4 z-50'>
                        <input type="text" name="" id="" className="rounded-xl p-4" placeholder="Full Name" />

                        <input type="phone" name="" id="" className="rounded-xl p-4" placeholder="Phone number" />

                        <input type="email" name="" id="" className="rounded-xl p-4" placeholder="Email address" />

                        <textarea placeholder="How can we help you?" className="rounded-xl p-4" name="" id="" cols={30} rows={10}></textarea>

                        <button type="submit" className="bg-white p-4 w-2/3 rounded-xl text-kashmir-blue">Send Message</button>
                    </div>
                </div>
            </div>

            <Footer />
        </main>
    );
}
