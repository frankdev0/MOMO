import { useStaticQuery, graphql } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import { Carousel } from "react-responsive-carousel";
import { Navbar, Footer, Testimonial } from "../components";
import Img from "gatsby-image";
import YoutubeVideo from "../components/Solarvideo";

export default function Solar({ location }) {
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
        <main className='w-full h-screen flex overflow-x-hidden flex-col font-poppins'>
            <title>About MoMo</title>

            <Navbar path={location.pathname} />

            {/* Hero */}
            <div
                className='py-10'
            >
                
                <div className='capitalize text-[#1F58A3] text-center text-2xl md:text-3xl font-medium pb-20'>
                    {/* Benefits of using the Momo Credit App */}
                    SOLAR FINANCING BY MOCREDITS
                </div>
                <div className='flex flex-col md:flex-row justify-between items-center md:px-40 px-6 gap-x-10 gap-y-4'>
  {/* Left Section: Image */}
  
  <div className='flex-shrink-0 w-full md:w-auto'>
    <StaticImage
      src='../images/solar.jpg'
      alt='Solar Package'
      width={550}
    />
  </div>

  {/* Right Section: Text Content */}
  <div className='max-w-lg w-full'>
  <h3 className='text-xl text-[#1F58A3] font-semibold mb-4 text-center md:text-left'>OUR PACKAGES</h3>
    <div>
    <p className='mb-3 text-xs font-semibold text-[#808080]'>
      <span className='text-base font-semibold mb-1 text-[#FB8405]'>10kva Hybrid Inverter </span> 
      
       | Pumping Machine, Laptops, 2 Freezers, 2 Fridges, 2 AC's, TV's, All Lighting Points, 
        1HP Appliance, Washing Machine, Desktop Computers.
      </p>
      <div className=' flex align-center space-x-6'>
        <div className=' justify-between'>
          <p className='font-semibold text-xs'>Monthly Payment</p>
          <p className='font-semibold text-xs'>-N860,683</p>
        </div>
        <div className=' justify-between'>
          <p className='font-semibold text-xs'>Payment Duration</p>
          <p className='font-semibold text-xs'>15 Months</p>
        </div>
        <div className=' justify-between'>
          <p className='font-semibold text-xs'>Package Warranty</p>
          <p className='font-semibold text-xs'>4 Years</p>
        </div>
      </div>
    </div>
    <div className="my-5">
    <p className='mb-3 text-xs font-semibold text-[#808080]'>
      <span className='text-base font-semibold mb-1 text-[#FB8405]'>5kva Hybrid Inverter </span> 
      
       | Pumping Machine, Laptops, 4 Fans, 2 Fridges, 4 TV's, All Lighting Points, 
        1HP Appliance, Washing Machine, Desktop Computers.
      </p>
      <div className=' flex align-center space-x-6'>
        <div className=' justify-between'>
          <p className='font-semibold text-xs'>Monthly Payment</p>
          <p className='font-semibold text-xs'>-N518,139</p>
        </div>
        <div className=' justify-between'>
          <p className='font-semibold text-xs'>Payment Duration</p>
          <p className='font-semibold text-xs'>15 Months</p>
        </div>
        <div className=' justify-between'>
          <p className='font-semibold text-xs'>Package Warranty</p>
          <p className='font-semibold text-xs'>4 Years</p>
        </div>
      </div>
    </div>
    <div >
    <p className='mb-3 text-xs font-semibold text-[#808080]'>
      <span className='text-base font-semibold mb-1 text-[#FB8405]'>3.5kva Inverter </span> 
      
       | 4 standing fans, Laptops, 1 Freezers, 4 TV's, 1 Fridge, All Lighting Points, 
        1HP Appliance, Kitchen Appliances.
      </p>
      <div className=' flex align-center space-x-6'>
        <div className=' justify-between'>
          <p className='font-semibold text-xs'>Monthly Payment</p>
          <p className='font-semibold text-xs'>-N302,004</p>
        </div>
        <div className=' justify-between'>
          <p className='font-semibold text-xs'>Payment Duration</p>
          <p className='font-semibold text-xs'>15 Months</p>
        </div>
        <div className=' justify-between'>
          <p className='font-semibold text-xs'>Package Warranty</p>
          <p className='font-semibold text-xs'>4 Years</p>
        </div>
      </div>
    </div>
    <div className="my-5">
    <p className='mb-3 text-xs font-semibold text-[#808080]'>
      <span className='text-base font-semibold mb-1 text-[#FB8405]'>2.5kva Inverter </span> 
      
       | 3 Energy Saving fans, Laptops, 2 Celing fans, 2 TV's, 2 Mini Fridge, 24 Lighting Points, 
       Sound system.
      </p>
      <div className=' flex align-center space-x-6'>
        <div className=' justify-between'>
          <p className='font-semibold text-xs'>Monthly Payment</p>
          <p className='font-semibold text-xs'>-N213,798</p>
        </div>
        <div className=' justify-between'>
          <p className='font-semibold text-xs'>Payment Duration</p>
          <p className='font-semibold text-xs'>15 Months</p>
        </div>
        <div className=' justify-between'>
          <p className='font-semibold text-xs'>Package Warranty</p>
          <p className='font-semibold text-xs'>4 Years</p>
        </div>
      </div>
    </div>
    <div className="my-5">
    <p className='mb-3 text-xs font-semibold text-[#808080]'>
      <span className='text-base font-semibold mb-1 text-[#FB8405]'>1.5kva Inverter </span> 
      
       | 3 Energy Saving fans, Laptops, 2 Celing fans, 2 TV's, 1 Mini Fridge, 12 Lighting Points, 
       Sound system.
      </p>
      <div className=' flex align-center space-x-6'>
        <div className=' justify-between'>
          <p className='font-semibold text-xs'>Monthly Payment</p>
          <p className='font-semibold text-xs'>-N189,848</p>
        </div>
        <div className=' justify-between'>
          <p className='font-semibold text-xs'>Payment Duration</p>
          <p className='font-semibold text-xs'>15 Months</p>
        </div>
        <div className=' justify-between'>
          <p className='font-semibold text-xs'>Package Warranty</p>
          <p className='font-semibold text-xs'>4 Years</p>
        </div>
      </div>
    </div>
  </div>
</div>

{/* MY YOUTUBE VIDEO */}

<div>
    <YoutubeVideo/>
</div>
          

          </div>

            <Footer />
        </main>
    );
}
