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
            <title>Momo's Terms</title>

            <Navbar path={location.pathname} />

            <div className='flex flex-col px-10 lg:px-40 mt-6 mb-20 text-justify'>
                <div className='flex flex-col'>
                    <div className="text-2xl lg:text-4xl">Terms and Conditions</div>
                    <div>
                        These Terms and Conditions apply to and
                        regulate the provision of financial services provided by MoMo Credit Limited, a digital money lending company having the Money Lenders Regulations Form of Money Lender’s License granted under Section 5(2) of the Money Lender’s Act (Cap.252) LFN 1990 which provides money lending services via its flagship mobile app – MoMo CreditTM to the Customer herein. These Terms and Conditions constitute MoMo Credit’s offerings and set out the terms governing this Agreement. By registering for a MoMo Credit Account or using any of the services provided on the MoMo Credit Application, You agree to comply with all of the terms and conditions in this user agreement. We may revise this user agreement and any of Our policies (privacy policy, consent to electronic communications, use of policy) from time to time. The revised version will be effective at the time We post it, unless otherwise noted. If our changes reduce Your rights or increase Your
                        responsibilities, We will provide You with notice of at least 21 days. By continuing to use our services after any changes to this user agreement become effective, You agree to abide and be bound by those changes. If You do not agree to these terms and conditions, please do not proceed and exit the application immediately. Please be informed that on notice to You, We can terminate Your relationship with Us if We believe that You have violated any of these terms. We shall provide You with 21 days notice in the event that this becomes necessary.
                    </div>
                </div>

                <div className='flex flex-col'>
                    <div className="mt-4 text-2xl lg:text-3xl">
                        Parties to this Agreement
                    </div>

                    <div className="mt-2">
                        This Agreement is a contract between You (“You”, “Your”) and MoMo Credit Limited (“MoMo Credit”, “We”, “Us”, “Our”) (each individually a “Party”, and collectively the “Parties”. This Agreement is a legally
                        binding agreement between You and MoMo Credit governing Your non-transferable (unless with Our prior written consent) use of the
                        MoMo Credit App, MoMo Credit website, and any features and
                        products that MoMo Credit may make available to You through the MoMo Credit application or website (collectively, the “Services”).
                    </div>
                </div>

                <div className='flex flex-col'>
                    <div className="mt-4 text-2xl lg:text-3xl">
                        Applicable Laws and Courts
                    </div>

                    <div className="mt-2">
                        Except as expressly provided otherwise, this Agreement is governed by, and will be construed under the laws of the Federal Republic of Nigeria. In the event of a dispute, this Agreement shall be subject to the jurisdiction of the courts of the Federal Republic of Nigeria.
                    </div>
                </div>

                <div className='flex flex-col'>
                    <div className="mt-4 text-xl lg:text-2xl">
                        Definitions
                    </div>

                    <div>
                        In this agreement, the terms: “You”, “Your”, “Customer”,shall mean the person who applied for this Account and agrees to this Agreement while “We”, “Us” and “Our” shall mean MoMo Credit, and following an assignment, any person, company or bank to whom the rights and/or obligations of
                        MoMo Credit have been assigned.
                    </div>

                    <div className='flex flex-col'>
                        <div className="mt-4 text-xl font-semibold">
                            Account
                        </div>
                        <div>
                            Means Your account with MoMo Credit.
                        </div>
                    </div>

                    <div className='flex flex-col'>
                        <div className="mt-4 text-xl font-semibold">
                            Disbursement Date
                        </div>
                        <div>
                            Means the date MoMo Credit advanced the loan to Your Account.
                        </div>
                    </div>

                    <div className='flex flex-col'>
                        <div className="mt-4 text-xl font-semibold">
                            Payment Due Date
                        </div>
                        <div>
                            Means the Date When the Loan Should Be Repaid.
                        </div>
                    </div>

                    <div className='flex flex-col'>
                        <div className="mt-4 text-xl font-semibold">
                            Credit Limit
                        </div>
                        <div>
                            Means the maximum credit available to You on opening an account with MoMo Credit.
                        </div>
                    </div>

                    <div className='flex flex-col'>
                        <div className="mt-4 text-xl font-semibold">
                            Loan
                        </div>
                        <div>
                            the principal amount of the loan together with any interest and fees due on the loan, made or to be made to You under this Agreement from time to time through the App or (as the context requires) the outstanding repayment amount for the duration of that loan.
                            "the principal loan amount advanced to You by MoMo Credit, which shall be no less than ₦7,000.00 (Seven Thousand Naira only)”.
                        </div>
                    </div>
                </div>

                <div className='flex flex-col'>
                    <div className="mt-4 text-2xl">
                        Customer’s Consent
                    </div>

                    <div className="mt-2">
                        By ticking the “I agree to the Terms and Conditions”,on this site/MoMo Credit app which You hereby adopt as Your electronic signature, You consent and agree that:
                    </div>

                    <ul className="my-4 space-y-4">
                        <li>(a) We can provide materials and other information about Your legal rights and duties to You electronically.</li>
                        <li>(b) We are authorized to share, receive and use data/information collected from Your transaction with other affiliated third parties. You consent to Our transferring Your data to recipients in foreign countries to process such data. You are aware of the risks involved in such transfer to such foreign countries and that such transfer is required for the performance of Our contract with you.</li>
                        <li>(c) You hereby expressly consent and authorize MoMo Credit to debit Your Account and/or authorize Us or any of Our duly authorized agent or partner to debit Your designated salary account, or any other bank account linked to Your Bank Verification Number (“BVN”), for repaying the Loan with applicable interest as and when due.</li>
                        <li>(d) To access payroll-related offers, You have expressly consented and authorized Us to verify Your salary details with Your employer and/or Your employer’s appointed salary processors without further recourse to You.</li>
                        <li>(e) You authorize MoMo Credit to periodically review Your credit report and You understand that this Account may be subject to transaction fees and default fees.</li>
                        <li>(e) You authorize MoMo Credit to periodically review Your credit report and You understand that this Account may be subject to transaction fees and default fees.</li>
                        <li>(f) Your electronic signature on this Agreements has the same effect as if You signed them using ink on paper or any other physical means.</li>
                        <li>(g) MoMo Credit reserves the right to transfer or assign its rights and obligations under this Agreement to its affiliates or to a third party and You consent to MoMo Credit's transfer or assignment of this Agreement to its affiliates or a third party.</li>
                        <li>(h) We can send all important communications, billing statements and demand notes and reminders (collectively referred to as “Disclosures”) to You electronically via our website or to an email address that You provide to Us while applying for this Loan.</li>
                        <li>(i) We will alert You when the Disclosures are available, by sending You an electronic communication.</li>
                        <li>(j) Our email will tell You how You can view the Disclosures.</li>
                        <li>(k) We will make the Disclosures available to You from the date it first becomes available, or the date We send You the email to alert You that it is available.</li>
                        <li>(l) You will be able to print a copy of the Disclosure or download the information for Your records.</li>
                        <li>(m) This consent applies to this transaction, to all future Disclosures on this Account, to all future transactions in which You use the MoMo Credit payment option with Us, at any time, and to other Disclosures that We provide to You by email, unless You have, prior to such transaction, withdrawn Your consent by the procedure mentioned below.</li>
                    </ul>

                    <div>
                        By consenting, You agree that electronic Disclosures have the same meaning and effect as if We provided paper Disclosures to You as We are required to do so. When We send You an email alerting
                        You that the Disclosures are available electronically and make it available online, that shall have the same meaning and effect as if We provided paper Disclosures to You, whether or not You choose to view the Disclosures, unless You had previously withdrawn Your consent to receive Disclosures electronically.
                    </div>
                </div>

                <div className='flex flex-col'>
                    <div className="mt-4 text-xl lg:text-2xl">
                        Conditions for use of MoMo Credit Account
                    </div>

                    <div className="mt-2">
                        To use the Account you must:
                    </div>

                    <ul className="my-4">
                        <div className='flex flex-row'>
                            <span className="text-xl font-semibold text-gray-400 mr-4">1</span>
                            <div className="space-y-4 my-auto">
                                <li>(a) accept and agree to these Terms and Conditions.</li>
                                <li>(b) register with Us on the MoMo CreditTM app.</li>
                                <li>(c) be a Nigerian citizen (or a legal Nigerian resident) of at least 18 years of age.</li>
                                <li>
                                    (d) To meet our Know Your Customer (“KYC”) and Anti-Money Laundering (“AML”) obligations, We may require You to provide any or
                                    all the following to identify You such as Your full name, email address, residential address, mobile device number, a copy of Your valid Government issued ID (national ID, international passport, permanent voter’s card or driver’s license), Bank Verification Number (“BVN”), online credentials for Your bank account, a copy of recent utility bill, bank statement, affidavit, or another bill, dated within three months of our request, which carries Your name and address and such other
                                    information as We may request from time to time (collectively, “Customer Information” or “Personal Information”).
                                </li>
                            </div>
                        </div>
                    </ul>

                    <ul className="my-4 space-y-4">
                        <div className='flex flex-row'>
                            <span className="text-xl font-semibold text-gray-400 mr-4">2</span>
                            <div className="space-y-4 my-auto">
                                You represent and warrant that all Customer Information You provide Us from time to time is truthful, accurate, current, and complete, and You agree not to misrepresent Your identity or Your
                                Customer Information.
                            </div>
                        </div>
                    </ul>

                    <ul className="my-4 space-y-4">
                        <div className='flex flex-row'>
                            <span className="text-xl font-semibold text-gray-400 mr-4">3</span>
                            <div className="space-y-4 my-auto">
                                You agree to promptly notify Us of changes to Your Customer
                                Information by updating Your profile on the MoMo CreditTM app and to notify Us at least five business days before any changes to Your
                                bank account information, including, but not limited to, the closure of Your bank account for any reason.
                            </div>
                        </div>
                    </ul>

                    <ul className="my-4">
                        <div className='flex flex-row'>
                            <span className="text-xl font-semibold text-gray-400 mr-4">4</span>
                            <div>
                                If We approve Your registration, You will be authorized to use the Account, subject to these terms –
                            </div>
                        </div>

                        <div className="space-y-4 my-2 ml-6">
                            <li>
                                (i). For Our compliance purposes and to provide the Account services to You, You hereby authorize Us to, directly or through a third-party, obtain, verify, and record information and documentation that helps Us verify Your identity and bank account information.
                            </li>
                            <li>
                                (ii). You hereby agree and authorize MoMo Credit to collect and verify
                                information including, but not limited to, data relating to Your phone (including, without limitation, Your phone’s history) from Your Equipment, from any SMS sent to You or by You, from any 3rd party applications, and such other information as MoMo Credit shall require for purposes of providing You the Services (the “Relevant Information”). In case You are nominating a person as Your guarantor,
                                You are also confirming that You have sought approval from the named person for the same, and that they are willing to act as a guarantor for this loan facility.
                            </li>
                            <li>
                                (iii) You hereby consent to MoMo Credit verifying the Personal Information and the Relevant Information and using the Personal Information and the Relevant Information to the extent necessary in MoMo Credit opinion for the provision of the Services.
                            </li>
                            <li>
                                (iv) You hereby agree and authorize MoMo Credit to obtain and
                                procure Your Personal Information and Relevant Information from relevant sources (private and official databases) and You further agree and consent to the disclosure and provision of such Personal Information by Us or our Third Party Partners.
                            </li>
                            <li>
                                (v) You agree to indemnify and hold MoMo Credit and the Third-Party Partners harmless with respect to any claims, losses, liabilities and expenses (including legal fees and expenses) that may arise as a result
                                of the disclosure and reliance on such Personal Information and/or Relevant Information.
                            </li>
                            <li>
                                (vi) MoMo Credit reserves the right to request for further information from You pertaining to Your use of the Services at any time. Failure to provide such information within the time required by MoMo Credit
                                may result in MoMo Credit declining to accept Your application for an Account or access to the Services.
                            </li>
                            <li>
                                (vii) You acknowledge and agree that when MoMo Credit or our third-
                                party service providers access and retrieve information from such third-party websites, MoMo Credit and our third-party service
                                providers are acting as Your agent, and not the agent of, or on behalf of the third party.
                            </li>
                        </div>
                    </ul>

                    <ul className="my-4 space-y-4">
                        <div className='flex flex-row'>
                            <span className="text-xl font-semibold text-gray-400 mr-4">5</span>
                            <div className="space-y-4 my-auto">
                                By using the Account and providing Customer Information to MoMo Credit, You automatically authorize MoMo Credit to obtain,
                                directly or indirectly through Our third-party service providers and without any time limit or the requirement to pay any fees, information about You and Your bank account from the financial institution holding Your bank account and other third-party websites and databases as necessary to provide the Account to You. For purposes of such authorization, You hereby grant MoMo Credit and Our third- party service providers a limited power of attorney, and You hereby
                                appoint MoMo Credit and Our third-party service providers as Your true and lawful attorney-in-fact and agent, with full power of substitution and re-substitution, for You and in Your name, place, and stead, in any capacities, to access third-party websites, servers, and documents; retrieve information; and use Your Customer Information, all as described above, with the full power and authority to do and
                                perform each and every act and thing requisite and necessary to be done in connection with such activities, as fully to all intents and purposes as You might or could do in person.
                            </div>
                        </div>
                    </ul>

                    <ul className="my-4 space-y-4">
                        <div className='flex flex-row'>
                            <span className="text-xl font-semibold text-gray-400 mr-4">6</span>
                            <div className="space-y-4 my-auto">
                                You agree that other third parties shall be entitled to rely on the foregoing authorization, agency, and power of attorney granted by You.
                            </div>
                        </div>
                    </ul>

                    <ul className="my-4 space-y-4">
                        <div className='flex flex-row'>
                            <span className="text-xl font-semibold text-gray-400 mr-4">7</span>
                            <div className="space-y-4 my-auto">
                                You agree to waive MoMo Credit of all liability in relation to any loss
                                or damage You may incur as a result of Your registration and use of the Account.
                            </div>
                        </div>
                    </ul>

                    <ul className="my-4 space-y-4">
                        <div className='flex flex-row'>
                            <span className="text-xl font-semibold text-gray-400 mr-4">8</span>
                            <div className="space-y-4 my-auto">
                                MoMo Credit Limited advises its customers not to give their financial details, such as BVN (Bank Verification Numbers), Passwords including OTP (One Time Password) and other sensitive financial information to anyone or third party. MoMo Credit will not be liable if such details are compromised.
                            </div>
                        </div>
                    </ul>

                    <div>
                        We make no effort to review information obtained from the financial institution holding Your bank account and other third-party web sites and databases for any purpose, including, but not limited to, accuracy, legality, or non-infringement. As between MoMo Credit and Our third-party service providers, MoMo Credit owns Your confidential Customer Information.
                    </div>
                </div>
            </div>

            <Footer />
        </main>
    );
}
