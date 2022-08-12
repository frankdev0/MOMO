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
            <div className="flex">
                <div className="flex flex-row relative mb-60 h-[900px] w-full">
                    <div className="absolute">
                        <StaticImage src="../images/contact.png" alt="" className="z-[-100] w-screen" />
                    </div>

                    <div className='flex flex-col gap-y-2 pl-20 mt-40 z-50'>
                        <div className="text-kashmir-blue font-medium text-3xl">Get In Touch</div>
                        <div className="text-[#686868] w-1/2">
                            Turn to our experts to perform comprehensive, multi-stage testing and auditing of your software solutions.
                        </div>
                        <div className='flex flex-row gap-x-10 mt-4'>
                            <div>
                                <StaticImage src="../images/fb.png" alt="" />
                            </div>

                            <div>
                                <StaticImage src="../images/insta.png" alt="" />
                            </div>

                            <div>
                                <StaticImage src="../images/twitter.png" alt="" />
                            </div>
                        </div>
                    </div>

                    <div className='flex flex-col bg-kashmir-blue rounded-xl mt-20 px-16 py-10 w-2/5 mr-16 h-3/5 gap-y-4 z-50'>
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
