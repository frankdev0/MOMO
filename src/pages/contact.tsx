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
                        Need support? Have a question? Our support team is ready to assist you with swift responses to your ticket.
                        </div>

                        <div className='flex flex-row gap-x-4 my-2 text-[#686868]'>
                            <div className="my-auto">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                    <path fillRule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clipRule="evenodd" />
                                </svg>
                            </div>

                            <div><a href="tel:PHONE_NUM">+234 {"("}814{")"} 696 7250</a></div>
                        </div>
                        <div className='flex flex-row gap-x-4 my-2 text-[#686868]'>
                            <div className="my-auto">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-envelope-fill w-6 h-6" viewBox="0 0 16 16"> <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z"/> </svg>
                            </div>

                            <div><a href="mailto:info@momocredits.com">info@momocredits.com</a></div>
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

                    <div className='flex flex-col bg-kashmir-blue rounded-xl mt-20 md:mt-44 lg:mt-20 px-10 md:px-16 py-10 justify-center md:w-4/5 2xl:w-1/2 md:mx-auto md:mr-16 h-4/5 gap-y-4 z-50'>
                        <input type="text" name="" id="" className="rounded-xl p-4" placeholder="Full Name" />

                        <input type="phone" name="" id="" className="rounded-xl p-4" placeholder="Phone number" />

                        <input type="email" name="" id="" className="rounded-xl p-4" placeholder="Email address" />

                        <textarea placeholder="How can we help you?" className="rounded-xl p-4 overflow-hidden" name="" id="" cols={30} rows={10}></textarea>

                        <button type="submit" className="bg-white p-4 w-2/3 rounded-xl text-kashmir-blue">Send Message</button>
                    </div>
                </div>
            </div>

            <Footer />
        </main>
    );
}
