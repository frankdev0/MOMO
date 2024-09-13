import { useStaticQuery, graphql } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import { Navbar, Footer } from "../components";

export default function Terms({ location }) {
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
            <title>Mocredits Terms</title>

            <Navbar path={location.pathname} />

            <div className='flex flex-col px-10 lg:px-40 mt-6 mb-20 text-justify'>
            <div className='flex flex-col'>
                    <div className="mt-4 text-2xl lg:text-3xl mx-0">
                     TERMS AND CONDITIONS:
                    </div>

                    <div className="mt-2">
                    By clicking“Agree”, “apply now” or any other related icon, and using the Service, you indicate that you accept the Terms. Notwithstanding, if you are under eighteen (18) years of age, you may not use the Service.
                    </div>
                    <div className="mt-2">
                    These T&Cs are subject to change without notice, from time to time in our sole discretion and your continued use of the App and the Services constitutes your agreement to be bound by the terms of any such amendment or variation. If you do not agree with any portion of these Terms, or do not understand the meaning of a provision accurately, please do NOT click agree or perform any follow-up actions. Such actions will be deemed an inferred acceptance of the Terms.
                    </div>
                </div>

                <div className='flex flex-col'>
                    <div className="mt-4 text-2xl lg:text-3xl">
                    Definition
                    </div>

                    <div className="mt-2">
                    Mocredits is a loan servicing company that gives short term loans to its customers across Nigeria.
                    </div>
                    <div className="mt-2">
                    Kindly note that as a first time customer you are only limited to 15000 which is subject to increment as you continue using the app.
                    </div>
                </div>
                <div className='flex flex-col'>
                    <div className="mt-4 text-2xl lg:text-3xl">
                    Duration: Our loan duration is 7 days.
                    </div>

                    <div className="mt-2">
                    “Third-Party Service Providers” This means any entities that provide support for our Services, such as website and application development, hosting, maintenance, backup, storage, virtual infrastructure, payment processing, analysis, identity verification, background and compliance reviews, fund administration, banking services, and other services for us, may require to access or use your Personal Information and Relevant Information.
                    </div>
                </div>
                <div className='flex flex-col'>
                    <div className="mt-4 text-2xl lg:text-3xl mx-0">
                    USE OF THE APP AND SERVICES
                    </div>

                    <div className="mt-2">
                    The App and the Services offered by us can only be utilized by persons over the age of 18 and only for the purpose of accessing our Services.
                    </div>
                    <div className="mt-2">
                    we reserves the right (in its sole and absolute discretion) to provide, refuse to provide any of the Services and/or vary the terms of the provision of any Service depending on its assessment of your credit profile from time to time.
                    </div>
                </div>

                

                                 <div className='flex flex-col'>
                    <div className="mt-4 text-2xl lg:text-3xl">
                    FEES
                    </div>

                    <div className="mt-2">
                    We shall be entitled to set and charge Transaction Fees, in connection with your use of any of our Services and from time to time amend or vary its Transaction Fees for the Services. If we decides to charge Transaction Fees or where already applicable, vary or amend its Transaction Fees, the Transaction Fees are charged upfront and displayed on the App in any loan request.
                    </div>
                   
                </div>

                <div className='flex flex-col'>
                    <div className="mt-4 text-2xl lg:text-3xl">
                    Contacts:
                    </div>

                    <div className="mt-2 text-600">
                    In order for us to have accurate verification we collect your contacts and may reach out to them for verification and also to find out if a customer is credit worthy 
                    </div>
                  


                </div>

                {/* starts here */}
              


     
     
            </div>

            <Footer />
        </main>
    );
}
