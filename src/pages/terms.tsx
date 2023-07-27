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
            <title>MoMo's Terms</title>

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
                        means the principal amount of the loan together with any interest and fees due on the loan, made or to be made to You under this Agreement from time to time through the App or (as the context requires) the outstanding repayment amount for the duration of that loan. 
                            ’’the principal loan amount advanced to You by MoMo Credit, which shall be no less than ₦10,000.00 (Ten Thousand Naira only)”.
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
                        <li>(e) You expressly consent and authorize Us to verify Your Guarantor details and further seek consent from Your Guarantor without further recourse to You.</li>
                        <li>(f) You authorize MoMo Credit to periodically review Your credit report and You understand that this Account may be subject to transaction fees and default fees.</li>
                        <li>(g) You authorize MoMo Credit to periodically review Your credit report and You understand that this Account may be subject to transaction fees and default fees.</li>
                        <li>(h) Your electronic signature on this Agreements has the same effect as if You signed them using ink on paper or any other physical means.</li>
                        <li>(i) MoMo Credit reserves the right to transfer or assign its rights and obligations under this Agreement to its affiliates or to a third party and You consent to MoMo Credit's transfer or assignment of this Agreement to its affiliates or a third party.</li>
                        <li>(j) We can send all important communications, billing statements and demand notes and reminders (collectively referred to as “Disclosures”) to You electronically via our website or to an email address that You provide to Us while applying for this Loan.</li>
                        <li>(k) We will alert You when the Disclosures are available, by sending You an electronic communication.</li>
                        <li>(l) Our email will tell You how You can view the Disclosures.</li>
                        <li>(m) We will make the Disclosures available to You from the date it first becomes available, or the date We send You the email to alert You that it is available.</li>
                        <li>(n) You will be able to print a copy of the Disclosure or download the information for Your records.</li>
                        <li>(o) This consent applies to this transaction, to all future Disclosures on this Account, to all future transactions in which You use the MoMo Credit payment option with Us, at any time, and to other Disclosures that We provide to You by email, unless You have, prior to such transaction, withdrawn Your consent by the procedure mentioned below.</li>
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

                {/* starts here */}
                <h1 className="text-500 font-bold text-lg">Our Lending Terms</h1>
<p className="my-2">Your Obligation</p>
<ol className="list-decimal ml-5 my-2">
  <li className="my-2">You agree to repay to MoMo Credit, the Loan sum, including any convenience, default or penalty fees, flat interest rate, service fee, maintenance fee and other amounts due to MoMo Credit charged to this Account. You also promise to pay these amounts as agreed in this Agreement on or before the Payment Due Date.</li>
  <li className="my-2">MoMo Credit reserves the right to presume that You have authorized any Loan application made in Your name using this Account. You will be deemed responsible for any unauthorized application using this Account.</li>
  <li className="my-2">You agree to repay the Loan given to You via direct cash transfer to a bank account listed by MoMo Credit, an electronic debit from the card/account You provided on the due date, or through an acceptable electronic channel. MoMo Credit reserves the right to accept early repayment before the Payment Due Date, provided You complete repayment of the full Loan along with the flat interest rate before the Payment Due Date. Loan repayment via electronic debit card may be affected by MoMo Credit in the way and manner hereinafter specified –
    <ol className="list-lower-alpha ml-5">
      <li className="my-2">We shall charge a one-time processing fee the first time You set up a new debit card on the Account. In the event the card is expired or about to expire, You will have to obtain a renewed card from Your bank or provide Us with another personal debit card.</li>
      <li className="my-2">We shall deduct from the card setup on the Payment Due Date. We will never make any transactions on the card outside of the scheduled loan repayments. In the event of a double repayment initiated in error by You, We will on a reasonable effort basis process a refund within a reasonable time.</li>
      <li className="my-2">You hereby indemnify Us against any losses, liabilities or damages that may arise if You use a third party’s card on Your Account without the consent of such third party</li>
    </ol>
  </li>
  <li className="my-2">In the event of a default or insufficiency of funds in Your bank account, You hereby authorize Us to charge any other cards You may have on Your Account or profile other than the primary card listed.
    <ol className="list-lower-alpha my-5">
      <li className="my-2">(i) You understand and agree that We do not store card details on Our platform thus card details shall be processed through a secure payment gateway that is PCI DSS compliant.</li>
      <li className="my-2">(ii) You agree to give MoMo Credit authentic and up-to-date personal, social media, phone and financial records about You that We may reasonably request and analyze, from time to time.</li>
      <li className="my-2">(iii) You agree to pay all costs of collection if MoMo Credit takes any action to collect the Loan or take any action in a bankruptcy proceeding filed by or against You. This shall include unless prohibited by applicable law, reasonable attorneys’ fees and expenses incurred while collection lasts.</li>
      <li className="my-2">(iv) You agree not to give Us false information or signatures, electronic or otherwise, at any time.</li>
      <li className="my-2">(v) You agree to pay a Late Fee or penalty fee as may be provided in this Agreement.</li>
      <li className="my-2"> (vi) You agree to make all payments via direct debit on cards or by electronic funds transfer as stated in the application form.</li>
      <li className="my-2">(vii) You agree to promptly notify MoMo Credit if You change Your name, mailing address, e-mail address or telephone number, employment information or any other information in Your Account. </li>
      <li className="my-2">(viii) You hereby agree to honor any other promises that You make in this Agreement. </li>
      <li className="my-2">(ix) You hereby agree that You will not accept this Account unless You are of legal age (18 years and above) and have the capacity to enter into a valid contract.  </li>
      <li className="my-2"> (x) Not to use MoMo Credit for any act of illegality or criminality and MoMo Credit shall not be legally or criminally culpable for any illegality committed by You.</li>
      <li className="my-2"> </li>
      </ol>
      
      </li>
      <li className="my-2">
      You shall indemnify and hold harmless MoMo Credit and its representatives and agents (each, an “Indemnified Person”) from and against any and all suits, actions, proceedings, claims, damages, losses, liabilities and expenses (including, without limitation, counsel’s fees and disbursements and other costs of investigation or defense, including those incurred upon any appeal) which may be instituted or asserted against or incurred by any Indemnified Person as the result or arising out of:
      <ol className="list-lower-alpha my-5">
        <li className="my-2">(i) credit having been extended, suspended, or terminated under this Agreement, or</li>
        <li className="my-2">(ii) any loan documents and the administration of such credit and in connection with or arising out of the transactions contemplated under this Agreement or any loan document and any actions or failures to act in connection therewith and any legal costs and expenses arising out of or incurred in connection with disputes between or among any parties to this Agreement or any loan document (collectively, “Indemnified Liabilities”)</li>
        
      </ol>
      </li>
      </ol>
      <div className="p-4 bg-gray-100">
  <h2 className="text-lg font-bold mb-4">Our Obligation</h2>
  <ol className="list-decimal list-inside mb-4">
    <li>We agree to make available the Loan/credit facility to You of a figure not less than ₦10,000.00 (Ten Thousand Naira Only).</li>
    <li>We agree to perform Our obligation under (1) above upon confirmation by Us of Your identity and personal information and assessment of Your credit worthiness.</li>
    <li>To demand repayment from You as and when due.</li>
    <li>To conduct investigations on You prior to opening an account for You.</li>
    <li>To use all reasonable and legitimate means to collect the amount extended to You, the default fee, the transaction fees, the service fee and any other penalty fee maybe imposed on You as a result of the loan.</li>
    <li>Not to store or save Your debit or credit card details given by You during Your application.</li>
    <li>By accepting this terms and conditions, You hereby covenant to repay any outstanding obligation as and when due. In the event that You do not repay any outstanding obligation as agreed, and such obligation becomes delinquent, MoMo Credit shall have the right to report the delinquent obligation to the Central Bank of Nigeria through the Credit Risk Management System (“CRMS”) or by any means, and request the CBN to exercise its regulatory powers to direct all banks and other financial institutions under its regulatory purview to set-off Your indebtedness from any money standing to Your credit in any bank account and from any other financial assets they may be holding for Your benefit.</li>
    <li>You covenant and warrant that MoMo Credit shall have power to set-off Your indebtedness under this Agreement from all such monies and funds standing to Your credit/benefit in any and all such accounts or from any other financial assets belonging to You and in the custody of any such bank.</li>
    <li>You hereby waive any right of confidentiality whether arising under common law or statue or in any other manner whatsoever and irrevocably agree that You shall not argue to the contrary before any court of law, tribunal, administrative authority or any other body acting in any judicial or quasi-judicial capacity.</li>
    <li>Loan Duration is for a period of sixty (60) days.</li>
  </ol>
</div>
<div className="p-4">
  <h2 className="text-lg font-bold mb-2">Credit Reference</h2>
  <ol className="list-decimal list-inside mb-4">
    <li>We or Our duly authorized representatives/agents will utilize dedicated Credit Agencies for a credit report on You in considering any application for credit.</li>
    <li>You authorize Us to access any information available to You as provided by the Credit Agency.</li>
    <li>You also agree that Your details (excluding the card details) and the Loan application decision may be registered with the Credit Agency.</li>
  </ol>
  <h2 className="text-lg font-bold mb-2">General Terms</h2>
  <h3 className="font-bold mb-1">Notices</h3>
  <p className="mb-4">You agree that We may communicate with You by sending notices, messages, alerts, and statements in relation to this Agreement in the following manner:</p>
  <ol className="list-decimal list-inside mb-4">
    <li>To the most recent physical address, We hold for You in Our records</li>
    <li>By delivery to any email address provided by You during the application process.</li>
    <li>By delivery of an SMS to any mobile telephone number, You have provided to MoMo Credit.</li>
    <li>By posting such notice on Our website.</li>
    <li>Through push notifications on Your mobile device</li>
  </ol>
  <h3 className="font-bold mb-1">Transaction fees (Service Charge)</h3>
  <ol className="list-decimal list-inside mb-4">
    <li>The transaction fee for the use of the MoMo Credit Account shall be up to twenty-five percent (25%) fixed for the term of the Loan.</li>
    <li>The transaction fee does not preclude Us from charging default fees, a penalty fee and in the event of any dispute arising from this Agreement – the cost of Litigation/Solicitors’ fees</li>
    <li>The transaction fee may be increased or decreased from time to time by MoMo Credit. Such change in Transaction Fee will take effect on Your account following a minimum of fifteen (15) days written notice.</li>
    <li>A total transaction fee of the term of the Loan shall remain applicable in the event that You liquidate the Loan before expiration.</li>
  </ol>
  <h3 className="font-bold mb-1">Event of default</h3>
  <ol className="list-decimal list-inside mb-4">
  <li className="my-4">Default in terms of this Agreement will occur if:</li>
  <ol className="list-lower-alpha list-inside mb-2">
    <li>(a) You fail to make any scheduled repayment in full on or before the payment due date in accordance with the repayment plan given to You by Us when You take a Loan;</li>
    <li>(b) Any representation/information, warranty or assurance made or given by You in connection with the application for use of Your Account or any information or documentation supplied by You is later discovered to be materially incorrect; or</li>
    <li>(c) You do anything which may prejudice our rights in terms of this Agreement or causes Us to suffer any loss or damage.</li>
  </ol>
  <li className="my-4">In the event of any default by You subject to clause 1 above –</li>
  <ol className="list-lower-alpha list-inside">
    {/* <li>(a) if you fail to pay any sum outstanding on or before the due date. You shall be charged a late payment fee/ penalty fee of 1% daily accruing till You defray Your total outstanding sum.</li> */}
    <li>(a) We may, without notice to or demand on You (which notice or demand You expressly waives), set-off, appropriate or apply any balance outstanding on Your investment account held by Us, or any indebtedness at any time owed by Us to or for Your account, against Your obligations to MoMo Credit, whether or not those obligations have matured.</li>
    <li>(b) We reserve the right to assign Our right, title and interest under the Agreement to an external Collections Agency who will take all reasonable steps to collect the outstanding Loan amount.</li>
    <li>(c) We also reserve the right to institute legal proceedings against You and We will inform You before such proceedings commence.</li>
    <li>(d) You shall be responsible for all legal costs and expenses incurred by Us in attempting to obtain repayment of any outstanding Loan balance owed by You. Interest on any amount which becomes due and payable shall be charged</li>
  </ol>
</ol>
        </div>

        <div className="py-4">
  <h2 className="text-xl font-bold mb-2">Termination of Accounts</h2>
  <ol className="list-decimal list-inside mb-4">
    <li>We may terminate Your Account by sending written notice to the addresses (mailing and email) on Your application.</li>
    <li>If there is no debit or credit on Your Account for twelve (12) consecutive months, We may terminate this Account without notice to You.</li>
    <li>In addition to Termination by default, We may terminate this Agreement at any time and for any reason subject to the requirements of applicable law.</li>
    <li>When Termination arises as a result of the default, You shall not be able to apply for credit in the future.</li>
  </ol>
</div>
<div className="py-4">
  <h2 className="text-xl font-bold mb-2">Closing of an Account</h2>
  <p>You may request to close Your Account at any time by contacting Us. Your request may take up to 30 business days to process. If You owe any payment to MoMo Credit, MoMo Credit will not close Your Account until that payment has been made, but We may limit Your ability to make additional transactions using Your Account. You may not close Your Account to evade an investigation. You will remain liable for all obligations related to Your Account even after the account is closed. MoMo Credit will retain Your information in accordance with our Privacy Policy (available on the MoMo Credit website) and any applicable state or federal law, rule or regulation.</p>
</div>
<div className="py-4">
  <h2 className="text-xl font-bold mb-2">Limitation of Liability</h2>
  <p>To the extent not prohibited by law, under no circumstances shall We, Our subsidiaries, partners, or affiliates, be liable to You for:</p>
  <ol className="list-decimal list-inside mb-4">
    <li>personal injury or any indirect, incidental, consequential, special or exemplary damages, arising from or relating to this Agreement, the use of or inability to use a MoMo Credit Account, the Services, Our or Your liabilities to third parties arising from any source; or</li>
    <li>except as required under applicable law, any indirect, incidental, consequential, special or exemplary damages, arising from or relating to the conduct of You or anyone else in connection with the use of a MoMo Credit Account or the Services, including, but not limited to, damages arising from Your failure to provide Us with accurate information or a third party’s failure to correctly verify such information. You agree that if any lawsuit or court proceeding is permitted under this Agreement, the aggregate liability of Us and Our affiliates and suppliers to You for all claims arising out of or related to this Agreement or Your use or inability to use the Services will not exceed the amount of any affected order(s) giving rise to such damages. These limitations will apply even if the above stated remedy fails of its essential purpose.</li>
  </ol>
</div>

<div className="py-4">
  <h2 className="text-2xl font-bold mb-4">Miscellaneous</h2>
  <ol className="list-decimal list-inside">
    <li>This Agreement represents the entire understanding between You and MoMo Credit with respect to the subject matter hereof and supersedes any prior agreement. You and MoMo Credit acknowledge and agree that the other has not made any representations, warranties or agreements of any kind except as expressly set forth herein.</li>
    <li>We may amend this Agreement from time to time. If We make any changes to this Agreement that We deem to be material, We will notify You in advance of such changes via the email address associated with Your Account. If You do not agree with the changes, do not use the Services.</li>
    <li>Notwithstanding any other provision in this Agreement, neither MoMo Credit, its affiliates, officers, directors, employees, attorneys or agents shall have any liability with respect to, any claim for any special, indirect, incidental, consequential damages suffered or incurred by You in connection with, arising out of, or in any way related to, a breach of this Agreement.</li>
    <li>The failure of MoMo Credit to exercise or enforce any right or provision of these Terms of Service shall not constitute a waiver of such right or provision in that or any other instance.</li>
    <li>You hereby authorize and consent that We may transfer, assign or sell this Agreement, and any rights under this Agreement, to a third party without notifying You. You agree that We may appoint third party collections agencies to collect any amounts owing to Us under this Agreement without Your consent. You hereby waive demand, notice of non-payment, protest and all other notices or demands whatsoever, and hereby consent that without notice to and without releasing the liability of any party, the obligations evidenced by this Agreement may from time to time, in whole or part, be renewed, extended, modified, accelerated, compromised, settled, canceled or released by Us.</li>
    <li>You hereby authorize and consent to all lawful access, use or disclosure of Your particulars, data and information in the application by the Us for purposes necessary to provide You with the services.</li>
    <li>MoMo Credit may at any time vary and revise these Terms and Conditions by updating this document. The most updated version of this document will be available for Your review under the “MoMo Credit™ Terms and Conditions” link that appears on the MoMo Credit website and mobile application.</li>
    <li>You acknowledge that all intellectual property rights in MoMo Credit™ belongs to MoMo Credit or its licensors and that rights in the application/website are licensed (not sold or assigned) to You in accordance with this Agreement, and that You have no rights in, or to, the mobile application/website other than the right to use each of them in accordance with the terms of this Agreement. You acknowledge that You have no right to have access to the mobile application in source-code form.</li>
  </ol>
</div>

<div className="py-4">
  <h2 className="text-2xl font-bold mb-4">Indemnification</h2>
  <p>You agree to release, indemnify and hold harmless Us, Our affiliates, Our subsidiaries, partners and third parties and including each and all of their respective officers, directors, employees and agents from and against any claims, liabilities, damages, losses and expenses, including without limitation reasonable legal and accounting fees, arising out of or in any way related to:</p>
  <ol className="list-decimal list-inside">
    <li>Your access to, use of, or inability to use Your MoMo Credit Account or the Services;</li>
    <li>Your breach or alleged breach of this Agreement;</li>
    <li>Your violation of any rights of a third party, including but not limited to any negligent or willful misconduct of Your employees, contractors, or agents, or a breach of any contracts or other relationships between You and third parties;</li>
    <li>Your violation of any applicable law; or</li>
    <li>Your failure to provide and maintain true, accurate, current and complete information in Your MoMo Credit Account.</li>
  </ol>
  <p>You shall cooperate as fully as reasonably required in the defense of any such claim. MoMo Credit reserves the right, at its own expense, to assume the exclusive defense and control of any matter subject to indemnification by You. You agree not to settle any matter without the prior written consent of MoMo Credit. For the avoidance of doubt, this indemnification, defense and hold harmless obligation will survive this Agreement and the termination of Your use of the Services.</p>
</div>

<div className="text-500">
  <h2 className="text-2xl font-bold mb-4">Declaration by You</h2>
  <p>a. I hereby confirm that I have read, understood and agreed to the above terms and conditions. I also authorize the MoMo Credit Limited to present the repayment instrument issued by me (in favour of MoMo Credit Limited) for the repayment of the loan/credit as and when due until the entire amount owed is fully paid and if, for any reason whatsoever, my account is not funded at the time of presentation, I shall be criminally liable under the Dishonored Cheques (Offences) Act, CAP D1, LFN 2004.</p>
  <p>b. I also declare by signing this Agreement and taking credit/drawing on the loan that I shall repay all moneys in accordance with the schedule of repayment as and when due. In the event that I refuse to repay in the terms of the schedule and the credit facility becomes delinquent, MoMo Credit shall have the right to edge against its risks in accordance with the terms of its Privacy Policy and report the delinquent loan to the appropriate authorities in line with extant lending regulations.</p>
  <p>c. I authorize MoMo Credit to set-off my indebtedness from any money standing to my credit in any bank account and from any other financial assets they may be holding for my benefits, or to which they have recourse or access.</p>
  <p>d. I covenant and warrant that MoMo Credit shall have the power to set-off my indebtedness under this agreement from all such monies and funds standing to my credit/benefit in any or all such account or from any other financial assets belonging to me and in the custody of any bank in Nigeria.</p>
  <p>e. I hereby waive any right of confidentiality whether arising under common law or statute or in any other manner whatsoever and irrevocably agree that I shall not argue to the contrary before any court of law, tribunal administrative authority or any other body acting in any judicial or quasi-judicial capacity.</p>
</div>

<div className="py-4">
  <h2 className="text-2xl font-bold mb-4">Keeping in touch</h2>
  <p className="py-2"> <span className="text-l font-bold mb-2">(a) How to contact Us:</span> You can contact Us by using the in-app support feature on the mobile application or using the complaint tab on the web portal at support@momo.credit</p>
  <p className="py-2"> <span className="text-l font-bold mb-2">(b) How We will contact You:</span> We will contact You in English using email, or through Your phone number provided to Us or through push notifications on Your device when You spend or receive money. If any of Your contact details change, for example Your email address, or phone number, You must let Us know as soon as possible.</p>
</div>
     
     
            </div>

            <Footer />
        </main>
    );
}
