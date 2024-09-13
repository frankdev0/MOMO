import { useStaticQuery, graphql } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import { Carousel } from "react-responsive-carousel";
import { Navbar, Footer, Testimonial } from "../components";
import Img from "gatsby-image";

export default function About({ location }) {
    const data = useStaticQuery(graphql`
    query {
        file(relativePath: { eq: "blue_rectangle.png" }) {
        childImageSharp {
            # Specify the image processing specifications right in the query.
            fluid {
            ...GatsbyImageSharpFluid_tracedSVG
            }
        }
        }
    }`);

    return (
        <main className='w-full h-screen flex flex-col font-poppins'>
            <title>About MoMo</title>

            <Navbar path={location.pathname} />

            {/* Hero */}
            <div
                className='flex flex-col-reverse md:flex-row w-full mt-20 justify-center px-6 lg:px-0'
            >
                <div className='flex flex-row md:ml-20 mb-48 md:mb-0'>
                    <div className='flex flex-col gap-y-4 lg:ml-20 md:mt-10 md:text-left text-center'>
                        <div className='text-3xl md:text-4xl 2xl:text-6xl capitalize'>
                            WHAT MAKES MOCREDITS TOPNOTCH
                        </div>
                        <div className='text-[#808080] 2xl:text-xl'>
                            {/* We provide fast low interest loans. You can count on us to meet your urgent financial needs. */}
                            <ul>
                            <li>(1) Our fast loan approval rate</li>
                                <li>(2) our expertise customer service.</li>
                                <li>(3) Access to business loans of up to 500,000.</li>
                                </ul>
                        </div>
                        <div className='flex flex-row gap-x-2 -mt-8'>
                            <div>
                            <a href='https://apps.apple.com/ng/app/sporty-credit/id6450298959'>
                                <StaticImage
                                    src='../images/app.svg'
                                    alt='Apple Logo'
                                    width={180}
                                />
                                </a>
                            </div>

                            <div className='my-auto'>
                            <a href="https://.fra1.cdn.digitaloceanspaces.com/apk/app.apk" target="_blank">
                                <StaticImage
                                    src='../images/google-play-badge.png'
                                    alt='Google Play Store'
                                    width={200}
                                />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='px-10 md:px-0 md:mr-28 my-2' id="bounce">
                    <StaticImage
                        src='../images/groupeddevicex.png'
                        alt=''
                        width={800}
                    />
                </div>
            </div>

            <div className="h-auto relative -mt-52 md:mt-0 lg:-mt-20 xl:-mt-52 2xl:-mt-40 ">
                <div className="absolute">
                    <StaticImage className="z-0 w-screen py-24 h-[50rem] md:h-auto" src="../images/blue_rectangle.png" alt="" />
                </div>
                <div className='flex flex:col md:flex-row text-white w-full gap-x-10 overflow-hidden -mt-10 md:mt-0'>
                    <div className='flex flex-col my-auto py-40 px-10 md:px-20'>
                        <div className='flex flex-row mt-10'>
                            <div className='text-xl lg:text-2xl xl:text-2xl 2xl:text-4xl capitalize w-2/3 z-10'>
                                What Motivate Users to Download Our Mobile App
                            </div>

                            <div className="xl:-translate-x-20 2xl:-translate-x-44">
                                <StaticImage src='../images/white_star.svg' alt='' />
                            </div>
                        </div>

                        <div className="hidden lg:flex z-50 text-justify w-2/3 mt-4">
                            {/* A quick onboarding process that includes sizable payments made in a short period of time. Momo Loan App aims to assist users achieve their personal and business goals by providing digital financial services. Our platform is built specially for you… it is seamless, and easy to navigate. */}
                            Nothing excites our customers than our fast approval rate. You could actually get your loan disbursed in 5mins. its that fast.
                        </div>

                        <div className='flex flex-row gap-x-20 2xl:gap-x-60'>
                            <div className="mt-8 hidden md:block">
                                <StaticImage
                                    alt={""}
                                    // width={750}
                                    src={"../images/momoloannew.jpg"}
                                    className="rounded-md w-[20rem] lg:w-[40rem] xl:w-[50rem] 2xl:w-[65rem] lg:h-[15rem] xl:h-[30rem]"
                                />
                            </div>


                            <div className='hidden md:flex flex-col gap-y-6 2xl:gap-y-20 my-auto 2xl:mt-40 z-10 text-sm lg:text-base xl:text-xl 2xl:text-3xl'>
                                <div className="flex flex-row overflow-hidden gap-x-8">
                                    <div className="overflow-hidden my-auto">
                                        <StaticImage className='w-6 h-6' src="../images/moneybag.svg" alt="" />
                                    </div>

                                    <div className="overflow-hidden">
                                        Flexible Terms
                                    </div>

                                </div>

                                <div className="flex flex-row overflow-hidden gap-x-8">

                                    <div className="overflow-hidden my-auto">
                                        <StaticImage className='w-6 h-6' src="../images/cash.svg" alt="" />
                                    </div>

                                    <div className="overflow-hidden">
                                        No Hidden Charges
                                    </div>

                                </div>

                                <div className="flex flex-row overflow-hidden gap-x-8">

                                    <div className="overflow-hidden my-auto">
                                        <StaticImage className='w-6 h-6' src="../images/secure.svg" alt="" />
                                    </div>

                                    <div className="overflow-hidden">
                                        Secure and Safe
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="mt-10 md:hidden">
                            <StaticImage
                                alt={""}
                                // width={750}
                                src={"../images/momoloannew.jpg"}
                                className="rounded-md w-[20rem] lg:w-[55rem] lg:h-[15rem] xl:h-[30rem]"
                            />
                        </div>

                        <div className='md:hidden flex flex-col gap-y-6 z-10 mt-10 text-base'>
                            <div className='flex flex-row gap-x-10'>
                                <div>
                                    <StaticImage className="w-5 h-5" src="../images/moneybag.svg" alt="" />
                                </div>
                                <div>Flexible Terms</div>
                            </div>

                            <div className='flex flex-row gap-x-10'>
                                <div>
                                    <StaticImage className="w-5 h-5" src="../images/cash.svg" alt="" />
                                </div>
                                <div>No Hidden Charges</div>
                            </div>

                            <div className='flex flex-row gap-x-10'>
                                <div>
                                    <StaticImage className="w-5 h-5" src="../images/secure.svg" alt="" />
                                </div>
                                <div>Secure and Safe</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='flex flex-col gap-y-4 mt-10 md:-mt-10 lg:mt-10 2xl:mt-20'>
                <div className="text-2xl md:text-4xl text-center">Explore Loan Offers for Different Purpose</div>

                <div className='flex flex-col md:flex-row w-full text-white justify-center'>
                    <div className="relative text-center">
                        <StaticImage placeholder="blurred" src="../images/momoimage.e copy.png" alt="" className="max-h-[338px]" />
                        <div className="absolute font-bold top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[30px] md:text-2xl lg:text-[40px] whitespace-nowrap">Car Loans</div>
                    </div>

                    <div className="relative text-center">
                        <StaticImage placeholder="blurred" src="../images/imagein.png" alt="" className="max-h-[338px]" />
                        <div className="absolute font-bold top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[30px] md:text-2xl lg:text-[40px] whitespace-nowrap">Education Loans</div>
                    </div>

                    <div className="relative text-center">
                        <StaticImage placeholder="blurred" src="../images/momoina.png" alt="" className="max-h-[338px]" />
                        <div className="absolute font-bold top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[30px] md:text-2xl lg:text-[40px] whitespace-nowrap">Business Loans</div>
                    </div>

                </div>
            </div>

          

            <div className='flex flex-col md:flex-row mx-auto gap-x-10 my-10 md:my-28 px-20 relative'>
                <div className='flex flex-col gap-y-4'>
                    <div className="text-xl md:text-3xl font-medium md:w-4/5">
                        {/* Start Lending Money
                        to Sort Out Important Bills */}
                        START GRWOING YOUR BUSINESS TODAY THROUGH OUR BUSINESS LOAN OFFER
                    </div>

                    <div className="text-[#727272] xl:w-2/3">
                        {/* With our simple and easy loan application process, you can access loans with just one-clicks. Download Now. */}
                        You are just a click away from growing your business. Download mocredits to get started
                    </div>


                    <div className='flex flex-row gap-x-2 -mt-6 md:-mt-12'>
                        <div>
                        <a href='https://apps.apple.com/ng/app/sporty-credit/id6450298959'>
                            <StaticImage
                                src='../images/app.svg'
                                alt='Apple Logo'
                                width={180}
                            />
                            </a>
                        </div>

                        <div className='my-auto'>
                        <a href="https://it.fra1.cdn.digitaloceanspaces.com/apk/app.apk" target="_blank">
                            <StaticImage
                                src='../images/google-play-badge.png'
                                alt='Google Play Store'
                                width={200}
                            />
                            </a>
                        </div>
                    </div>


                </div>

                <div className="">
                    <StaticImage src='../images/momoimage.jpg' alt='' width={900} className="rounded-lg" />
                </div>

                <div className="hidden translate-y-10 lg:block absolute bottom-10">
                    <StaticImage src='../images/redstar.png' alt='' />
                </div>
            </div>

            <Footer />
        </main>
    );
}
