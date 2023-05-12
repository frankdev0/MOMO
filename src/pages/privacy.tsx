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
            <title>MoMo's Privacy</title>

            <Navbar path={location.pathname} />

            <div className='flex flex-col px-10 lg:px-40 mt-6 mb-20 text-justify'>
                <div className='flex flex-col'>
                    <div className="text-2xl lg:text-4xl">Privacy Policy</div>
                    <div className="text-2xl lg:text-3xl mt-4 mb-2">Introduction</div>
                    <div>
                        This Privacy Policy describes Our policies and procedures on the collection, use and disclosure of Your information when You use the
                        services and tells You about Your privacy rights and how the law protects You. If You do not agree with Our policies and practices, You may choose to not use Our Service. This policy may change from time to time.
                        We use Your Personal data to provide and improve the Service. By accessing or using the Service, You agree to the collection and use of information in accordance with this Privacy Policy.
                        MoMo CreditTM is a trademark of MoMo Credit Limited (“MCL”). As the data collector, MCL ("We" “Us” “Our”) are committed to protecting and respecting Your privacy. This policy sets out the basis on which any
                        personal data We collect from You, or that You provide to Us, will be processed by Us. Please read the following carefully to understand Our
                        views and practices regarding Your personal data and how We will treat it. By visiting "https://momocredit.com" or using MoMo Credit
                        mobile application hosted on the Google Play Store or Apple Play Store (collectively “Our site”) You are accepting and consenting to the practices described in this policy. Please note that by clicking the “Connect with Facebook” button You are agreeing that Facebook may share personal data held by them with Us. The collection and
                        processing of Your personal data is in accordance with the National Information Technology Development Agency Act 2007 (the “Act”), Nigeria Data Protection Regulation 2019 (the “Regulations”) and the provisions and prescriptions of Section 5; Part 1 and Part 2 of National Information Systems and Network Security Standards and Guidelines
                    </div>
                </div>

                <div className='flex flex-col'>
                    <div className="mt-4 text-2xl lg:text-3xl">
                        Information We may collect from You
                    </div>

                    <div className="mt-2">
                        We may collect and process the following data about You:
                    </div>
                </div>
                <div className='flex flex-col'>
                    <div className="mt-4 text-2xl lg:text-3xl">
                        1. Infomration You Give Us:
                    </div>

                    <div className="mt-2">
                    You may give Us information about You by filling in forms on Our site https://momocredits.com and/or App and by allowing Us to access Your information on social media sites (including but not limited to Facebook, Twitter and LinkedIn) or by corresponding with Us by phone, e-mail or otherwise. This includes information You provide when You register to use Our site, apply for a loan, search for a feature (for example but not limited to, loan amounts, currency, loan duration), Your activity levels on boards or other social media functions on the applicable social media sites, the applications You use on social media sites, and when You report a problem with Our site. The information You give Us may include Your name, address, e-mail address and phone number, login information for social networking sites, financial and credit card information, personal description, identification number, current and former places of employment, education, employer/colleagues official information, friends contact on your emergency list, photo image of you for security identification, and lists of family members contacts.
                    </div>
                </div>
                <div className='flex flex-col'>
                    <div className="mt-4 text-2xl lg:text-3xl">
                     2 . Information We collect about You:
                    </div>

                    <div className="mt-2">
                    With regard to each of Your visits to Our site We may automatically collect the following information:
                    </div>
                    <ul className="my-4 space-y-4">
                        <li>i. Technical information, including the Internet protocol (IP) address used to connect Your computing devices to the Internet, Your login information, browser type and version, time zone setting, browser plug-in types and versions, operating system and platform; </li>
                        <li>ii. Information about Your visit, including the full Uniform Resource Locators (URL) clickstream to, through and from Our site (including date and time); products You viewed or searched for; page response times, download errors, length of visits to certain pages, page interaction information (such as scrolling, clicks, and mouse-overs), and methods used to browse away from the page and any phone number used to call Our customer service number; </li>
                        <li>iii. Anonymized repayment data.</li>
                        
                        </ul>
                </div>

                <div className='flex flex-col'>
                    <div className="mt-4 text-2xl lg:text-3xl">
                        3. Information We receive from others:
                    </div>

                    <div className="mt-2">
                    We may receive information about You if You use any of the other websites We operate, the other services We provide and/or the social media sites which You login to via Our site. We are also working closely with third parties (including, for example, business partners, sub-contractors in technical, payment and delivery services, social media sites, advertising networks, analytics providers, search information providers, credit bureaus, and financial services and credit providers) and may receive information about You from them.
                    </div>
                </div>

                <div className='flex flex-col'>
                    <div className="mt-4 text-2xl lg:text-3xl">
                    Cookies
                    </div>

                    <div className="mt-2">
                    We may use Cookies and similar tracking technologies to track the activity on Our Service and store certain information. Tracking technologies used may be beacons, tags, and scripts to collect and track information and to improve and analyze Our Service. The technologies We may use can include; Cookies or Browser Cookies, Web Beacons, Flash Cookies, Persistent or Session Cookies. We may use cookies to distinguish You from other users of Our application or website. This helps Us to provide You with a good experience when You use Our service and also allows Us to improve Our service. By visiting Our website, You consent to the placement of cookies and beacons in Your browser and HTML-based emails in accordance with this Privacy Policy.
                    </div>
                </div>
                <div className='flex flex-col'>
                    <div className="mt-4 text-2xl lg:text-3xl">
                    Uses made of the information
                    </div>

                    <div className="mt-2">
                    We use information held about You in the following ways:
                    </div>
                </div>
                <div className='flex flex-col'>
                    <div className="mt-4 text-2xl lg:text-3xl">
                    1 . Information You give Us:
                    </div>

                    <div className="mt-2">
                    We will use Your information in the following ways and in each case, We note the lawful basis under the Nigerian Data Protection Regulations and including the various financial regulations in Nigeria (CBN, BOFIA Act, Money Lenders Act etc) which We rely on to use Your information:
                    </div>
                </div>

                {/* <ul className="my-4 space-y-4">
                        <li>a. To determine whether to provide a loan to You, the amount of such loan and the terms and conditions applicable to such loan or for the provision of any of Our product and services to You.
                            Lawful basis- Contract performance, consent, legal obligation.
                            </li>
                            <li>b. To investigate or resolve any complaint and issues You may have.
                                Lawful basis- Contract performance, consent.
                                </li>
                                <li>c. To exercise Our rights under contracts We have entered into with You like recovering any payments due to Us and where necessary to enforcing recovery through debt collection agencies or taking other legal action, including instituting an action in the courts of law.
                                    Lawful basis- Contract performance
                                    </li>
                                    <li>d. To fulfil Our legal, compliance, regulatory and risk management obligations.
                                        Lawful basis- Legal obligation
                                        </li>
                                        <li>e. To establish a credit rating based on Your information and provide that rating to third parties who may be interested in offering You financial products and services and this information is provided only to third parties selected by You or where You have agreed that We may share Your score and information with;
                                        Lawful basis: Consent
                                        </li>
                                        <li>f. To provide You with information about other goods and services We offer that are similar to those that You have already purchased or enquired about; anonymized repayment data.
                                        Lawful basis: Consent
                                        </li>
                                        <li>g. For marketing and business development purposes subject to the marketing preferences You have selected on Our website, to provide You, or permit selected third parties to provide You, with information about goods or services We feel may interest You.;
                                        Lawful basis: Consent
                                        </li>
                                        <li>h. To notify You about changes to Our standard terms of service or to Our business;
                                        Lawful basis- Contract performance
                                        </li>
                                        <li>i. To ensure that content from Our site is presented in the most effective manner for You and for Your device.
                                        Lawful basis- Contract performance
                                        </li>
                                 </ul> */}
                                 <ul className="my-4 space-y-4">
  <li className="py-2 border-t border-gray-300">
    <span className="font-bold">a.</span> To determine whether to provide a loan to You, the amount of such loan and the terms and conditions applicable to such loan or for the provision of any of Our product and services to You.
    <span className="block text-sm text-gray-500">Lawful basis - Contract performance, consent, legal obligation.</span>
  </li>
  <li className="py-2 border-t border-gray-300">
    <span className="font-bold">b.</span> To investigate or resolve any complaint and issues You may have.
    <span className="block text-sm text-gray-500">Lawful basis - Contract performance, consent.</span>
  </li>
  <li className="py-2 border-t border-gray-300">
    <span className="font-bold">c.</span> To exercise Our rights under contracts We have entered into with You like recovering any payments due to Us and where necessary to enforcing recovery through debt collection agencies or taking other legal action, including instituting an action in the courts of law.
    <span className="block text-sm text-gray-500">Lawful basis - Contract performance</span>
  </li>
  <li className="py-2 border-t border-gray-300">
    <span className="font-bold">d.</span> To fulfil Our legal, compliance, regulatory and risk management obligations.
    <span className="block text-sm text-gray-500">Lawful basis - Legal obligation</span>
  </li>
  <li className="py-2 border-t border-gray-300">
    <span className="font-bold">e.</span> To establish a credit rating based on Your information and provide that rating to third parties who may be interested in offering You financial products and services and this information is provided only to third parties selected by You or where You have agreed that We may share Your score and information with;
    <span className="block text-sm text-gray-500">Lawful basis - Consent</span>
  </li>
  <li className="py-2 border-t border-gray-300">
    <span className="font-bold">f.</span> To provide You with information about other goods and services We offer that are similar to those that You have already purchased or enquired about; anonymized repayment data.
    <span className="block text-sm text-gray-500">Lawful basis - Consent</span>
  </li>
  <li className="py-2 border-t border-gray-300">
    <span className="font-bold">g.</span> For marketing and business development purposes subject to the marketing preferences You have selected on Our website, to provide You, or permit selected third parties to provide You, with information about goods or services We feel may interest You.;
    <span className="block text-sm text-gray-500">Lawful basis - Consent</span>
  </li>
  <li className="py-2 border-t border-gray-300">
    <span className="font-bold">h.</span> To notify You about changes to Our standard terms of service or to Our business;
    <span className="block text-sm text-gray-500">Lawful basis - Contract performance</span>
  </li>
  <li className="py-2 border-t border-gray-300">
    <span className="font-bold">i.</span> <span className="block text-sm text-gray-500">To ensure that content from Our site is presented in the most effective manner for You and for Your device.
    </span>
    </li>
    </ul>


                                 <div className='flex flex-col'>
                    <div className="mt-4 text-2xl lg:text-3xl">
                     2 . Information We collect about You:
                    </div>

                    <div className="mt-2">
                    We will use this information:
                    </div>
                    <ul className="my-4 space-y-4">
                        <li>a. We collect this information to establish a credit rating for You. </li>
                        <li>b. We may combine this information with information You give to Us. We may use this information and the combined information for the purposes set out above (depending on the types of information We receive). </li>
                        <li>c. We may carry out a further processing of Your data for archiving purposes as a legal obligation, public interest, scientific or historical research purposes or statistical purposes.</li>
                        
                        </ul>
                </div>

                <div className='flex flex-col'>
                    <div className="mt-4 text-2xl lg:text-3xl">
                    3 . Information collected when You use Our services
                    </div>

                    <div className="mt-2 text-600">
                    In order to serve You better with Our quality services, when You use Our service, We collect the following information on Your phone: 
                    </div>
                  

<ul className="my-4 space-y-4">
  <li className="text-500">*Location*</li>
  <li className="text-500">*Calendar*</li>
  <li className="text-500">*SMS*</li>
  <li className="text-500">*Phone*,</li>
  <li className="text-500">*Storage* and;</li>
  <li className="text-500">*Camera*.</li>
  <div className="text-500">We require permission to access these information to assess Your credit worthiness and provide customized loan service. Your data is protected with Us.</div>
  <li className="text-500">(i) Location:</li>
  <div className="mt-2 text-500">We collect and monitor Your device location information to improve Your loan acceptability, and reduce the risk associated with Your loan application. This will enable Us make a better decision whether or not to grant Your loan application. We also collect location data which allows Us to determine Your precise or approximate location. This information is collected during the loan application process, and We use this data to enhance Our credit risk and underwriting framework, as well as to prevent fraud.</div>
  <li className="text-500">Storage:</li>
  <div className="mt-2 text-500">We need Your storage permission so that Your Know Your Customer (KYC) and other relevant documents can be safely and securely downloaded and saved on Your phone. This will enable You upload Your KYC documents fast and increase the chances of Your loan application being approved without delay.</div>
  <div className="mt-2">
    <li className="text-500">Phone:</li>
    <div className="mt-1 text-500">Momo Credit app collects and monitor information about Your device which include the device hardware model, build model, Ram, IMEI, serial number, SSAID, SIM information (includes network operator, roaming state, MNC and MCC codes), WiFi information and any other information on Your device including on the software necessary. This is to prevent fraud and ensure that no unauthorized device act on Your behalf.</div>
  </div>
  <div className="mt-2">
    <li className="text-500">SMS:</li>
    <div className="mt-1 text-500">We collect and upload all Your SMS data and information to read, store and retrieve financial and transactional data to know Your financial history and help reduce risk associated with Your application and provide You with appropriate credit analysis. While using the application, it periodically sends financial SMS information to Our servers. We store the data in Our server.</div>
  </div>
  <div className="mt-2">
    <li className="text-500">Camera:</li>
    <div className="mt-1 text-500">Our app requires camera access to enable You take a selfie for biometrics, scan and upload relevant documents for proper KYC documentation. This is to prevent fraud and loan identity disputes, prevent unauthorized access to Your device and to authenticate that it is You requesting for a loan. It will also make Your loan application faster.</div>
  </div>
  <div className="mt-2">
    <li className="text-500">Calendar:</li>
    <div className="mt-1 text-500">Our app requires access to Your calendar to set up reminder on Your loan due date. This is to remind You to pay back Your loan on the due date.</div>
    </div>
    <div className="mt-2 text-500">
  We also collect the following information saved on Your smartphone:
  <ul className="list-disc ml-8">
    <li>– installed applications</li>
    <li>– browser history</li>
  </ul>
  <div className="mt-2">
    We collect the above information through Your mobile device operating system, by requesting Your express consent to Your device’s permissions on the App. The collection of this information may take place in the background even when You aren’t using Our service, if the permission You gave Us expressly permits such collection.
  </div>
</div>
</ul>
                </div>

                <div className='flex flex-col'>
                    <div className="mt-4 text-2xl lg:text-3xl">
                    Disclosure of Your information
                    </div>

                    <div className="mt-2">
                    We may share Your personal information with any member of Our group, which means Our subsidiaries, Our ultimate holding company and its subsidiaries. We may share Your information with selected third parties including:
                    </div>
                    <ul className="my-4 space-y-4">
                        <li>i. Business partners, suppliers and subcontractors for the performance of any contract We enter into with them or You. </li>
                        <li>ii. Advertisers and advertising networks that require the data to select and serve relevant adverts to You and others. We do not disclose identifiable information about Our users to Our advertisers, but We may provide them with aggregate information about Our users (for example, We may inform them that 500 men aged under 30 have clicked on their advertisement on any given day). We may also use such aggregate information to help advertisers reach the kind of audience they want to target (for example, women in Lagos State). We may make use of the personal data We have collected from You to enable Us to comply with Our advertisers’ wishes by displaying their advertisement to that target audience. </li>
                        <li>iii. Analytics and search engine providers that assist Us in the improvement and optimization of Our site. We may disclose Your personal information to third parties: a) In the event that We sell or buy any business or assets, in which case We may disclose Your personal data to the prospective seller or buyer of such business or assets. b) If MCL or substantially all of its assets are acquired by a third party, in which case personal data held by it about its customers will be one of the transferred assets.</li>
                        <li>iv. if We are under a duty to disclose or share Your personal data in order to comply with any legal obligation, or in order to enforce or apply Our terms of use and other agreements or to protect the rights, property, or safety of MCL, Our customers, or others. This includes exchanging information with other companies and organizations for the purposes of fraud protection and credit risk reduction.</li>
                        
                        </ul>
                </div>
                <div className='flex flex-col'>
                    <div className="mt-4 text-2xl lg:text-3xl">
                    International data transfers
                    </div>

                    <div className="mt-2">
                    Information that We collect may be stored, processed in, and transferred between any of the countries in which We operate, in order to enable Us to use the information in accordance with this policy. Any such information transferred to other countries shall be in compliance with the Act and the Regulations.
                    </div>
                </div>
                <div className='flex flex-col'>
                    <div className="mt-4 text-2xl lg:text-3xl">
                    Customer consent
                    </div>

                    <div className="mt-2">
                    By ticking the “I agree to the Terms and Conditions”, which You hereby adopt as Your electronic signature, You consent and agree that:
                    </div>
                    <ul className="my-4 space-y-4">
                        <li>1. We can provide materials and other information about Your legal rights and duties to You electronically.</li>
                        <li>2. We are authorised to share, receive and use data/information collected from Your transaction with other affiliated third parties including but not limited to switching companies, mobile network operators, electricity companies, aggregators, credit bureaus, other financial institutions, e-commerce platforms etc.</li>
                       
                    </ul>
                </div>

                <div className='flex flex-col'>
                    <div className="mt-4 text-2xl lg:text-3xl">
                    Where We store Your personal data
                    </div>

                    <div className="mt-2">
                    The data that We collect from You is stored on Our secure servers. Where We have given You (or where You have chosen) a password which enables You to access certain parts of Our site, You are responsible for keeping this password confidential. We ask You not to share a password with anyone. Unfortunately, the transmission of information via the internet is not completely secure. Although We will always do Our best to protect Your personal data, We cannot guarantee 100% security of Your data transmitted to Our site; any transmission is at Your own risk. Once We have received Your information, We will use strict procedures and security features to try to prevent unauthorized access.
                    </div>
                </div>
                <div className='flex flex-col'>
                    <div className="mt-4 text-2xl lg:text-3xl">
                    Data retention
                    </div>

                    <div className="mt-2">
                    Unless a longer retention period is required or permitted by law, We may only hold Your data on Our systems for the period necessary to fulfil the purposes outlined in this privacy policy.
                    However, We will retain and use Your Data to the extent necessary to comply with Our legal obligations (for example, if We are required to retain Your data to comply with applicable laws), resolve disputes, and enforce Our legal agreements and policies.
                    Even if We delete Your data, it may persist on backup or archival media for legal, tax or regulatory purposes.
                    </div>
                </div>
                <div className='flex flex-col'>
                    <div className="mt-4 text-2xl lg:text-3xl">
                    Your rights
                    </div>

                    <div className="mt-2">
                    You have the right to ask Us not to process Your personal data for marketing purposes and to withdraw Your consent at any time. Please note that the withdrawal of Your consent will not affect the lawful processing of data which We have obtained based on Your previous consent. We will usually inform You (before collecting Your data) if We intend to use Your data for the aforementioned purposes or if We intend to disclose Your information to any third party for such purposes. You can exercise Your right to prevent such processing by checking certain boxes on the forms We use to collect Your data. You can also exercise the right at any time by contacting Us using in-app support feature on the mobile application or using the complaint tab on the web portal at <span className="bg-400">support@momocredits.com</span> Our site may, from time to time, contain links to and from the websites of Our partner networks, advertisers and affiliates. If You follow a link to any of these websites, please note that these websites have their own privacy policies and that We do not accept any responsibility or liability for these policies. Please check these policies before You submit any personal data to these websites.
                    </div>
                </div>
                <div className='flex flex-col'>
                    <div className="mt-4 text-2xl lg:text-3xl">
                    Remedies
                    </div>

                    <div className="mt-2">
                    Notwithstanding any other provision in this privacy policy, neither MCL, its affiliates, officers, directors, employees, attorneys or agents shall have any liability with respect to, and You hereby waive, release and agree not to sue any of them upon, any claim for any special, indirect, incidental, consequential damages suffered or incurred by You in connection with, arising out of, or in any way related to, a breach of this privacy policy.
                    </div>
                </div>
                <div className='flex flex-col'>
                    <div className="mt-4 text-2xl lg:text-3xl">
                    Access to information
                    </div>

                    <div className="mt-2">
                    The Act gives You the right to access information held about You. Your right of access can be exercised in accordance with the Act. Any access request may be subject to a fee in providing You with details of the information We hold about You.
                    We may update this policy from time to time by publishing a new version on Our website. You should check this page occasionally to ensure You understand any changes to this policy.
                    </div>
                </div>
                <div className='flex flex-col'>
                    <div className="mt-4 text-2xl lg:text-3xl">
                    Contact
                    </div>
                    <div className="mt-2">
                    Questions, comments and requests regarding this privacy policy are welcomed and should be addressed to MCL via the in-app support feature on the mobile application or using the complaint tab on the web portal at <span className="bg-400">support@momocredits.com</span>
                    </div>
                </div>

                {/* <div className='flex flex-col'>
                    <div className="mt-4 text-2xl lg:text-3xl">
                        Applicable Laws and Courts
                    </div>

                    <div className="mt-2">
                        Except as expressly provided otherwise, this Agreement is governed by, and will be construed under the laws of the Federal Republic of Nigeria. In the event of a dispute, this Agreement shall be subject to the jurisdiction of the courts of the Federal Republic of Nigeria.
                    </div>
                </div> */}

                {/* <div className='flex flex-col'>
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
                </div> */}
{/* 
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
                </div> */}
            </div>

            <Footer />
        </main>
    );
}
