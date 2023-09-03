import { BsFacebook, BsInstagram, BsTwitter, BsLinkedin } from 'react-icons/bs';

const Footer = () => {
    return (
        <div className="">
            <div className=" bg-gray-800 rounded pt-6 ">
                <div className="w-[80%] sm:w-30% mx-auto pb-6 ">
                <div className="grid grid-cols-4  sm:grid-cols-5  sm:grid text-center sm:text-left">

                    {/* Section E-waste */}
                        <div className="col-span-4 sm:col-span-2  pl-0 md:pl-8 md:px-4 pt-5 mb-4 sm:mb-0">
                        <h4 className="text-white text-[12px] mb-3">
                            e-Waste into affordable and sustainable electronics.
                        </h4>
                        <p className="text-gray-400 text-[9px]">
                            We have carefully pick the device you need.
                        </p>
                        <div className="flex flex-row justify-center sm:justify-normal sm:flex sm:flex-row mt-2 sm:gap-3 gap-2 ">
                            <BsFacebook  className='text-slate-300' size={10}  />
                             <BsInstagram  className='text-slate-300' size={10} />
                             <BsTwitter  className='text-slate-300' size={10} />
                            <BsLinkedin  className='text-slate-300' size={10} />
                        </div>
                        </div>
                    {/* SEction E-waste */}
                    
                    {/* Section About */}
                        <div className="sm:flex-1">
                            <h6 className="text-[10px] sm:text-[12px] font-medium text-white uppercase mb-2">
                                About
                            </h6>
                            <div className="text-[8px] sm:text-[10px]">
                                <a
                                href={"/story"}
                                className="text-gray-400 py-1 block hover:underline"
                                >
                                Our Story
                                </a>
                                <a
                                href="#"
                                className="text-gray-400 py-1 block hover:underline"
                                >
                                Our Blog
                                </a>
                                <a
                                href="#"
                                className="text-gray-400 py-1 block hover:underline"
                                >
                                Customer Reviews
                                </a>
                                <a
                                href="#"
                                className="text-gray-400 py-1 block hover:underline"
                                >
                                We are Hiring!
                                </a>
                            </div>
                        </div>
                    {/* Section About */}

                    {/* Section Terms */}
                        <div className="sm:flex-1 mt-0 sm:mt-0 col-span-2 sm:col-span-1">
                        <h6 className="text-[10px] sm:text-[12px]  font-medium text-white uppercase mb-2">
                            TERMS
                        </h6>
                        <div className="text-[8px] sm:text-[10px]">
                            <a
                            href="#"
                            className="text-gray-400 py-1 block hover:underline"
                            >
                            Warranty & Refunds
                            </a>
                            <a
                            href="#"
                            className="text-gray-400 py-1 block hover:underline"
                            >
                            Shipping Policy
                            </a>
                            <a
                            href="#"
                            className="text-gray-400 py-1 block hover:underline"
                            >
                            Terms Of Service
                            </a>
                            <a
                            href="#"
                            className="text-gray-400 py-1 block hover:underline"
                            >
                            Privacy Policy
                            </a>
                            {/* <a
                            href="#"
                            className="text-gray-400 py-1 block hover:underline"
                            >
                            DMCA Policy
                            </a> */}
                        </div>
                        </div>
                    {/* Section Terms */}

                    {/* Section HElp */}
                        <div className="sm:flex-1  sm:mt-0">
                        <h6 className="text-[10px] sm:text-[12px]  font-medium text-white uppercase mb-2">
                            Help
                        </h6>
                        <div className="text-[8px] sm:text-[10px]">
                            <a
                            href="#"
                            className="text-gray-400 py-1 block hover:underline"
                            >
                            Track My Order
                            </a>
                            <a
                            href="#"
                            className="text-gray-400 py-1 block hover:underline"
                            >
                            Help Center
                            </a>
                            <a
                            href="#"
                            className="text-gray-400 py-1 block hover:underline"
                            >
                            Returns & Claims
                            </a>
                            <button className="mt-3 text-[6px] sm:text-[10px]">
                                <a href="#" className="bg-white px-1 py-1 sm:px-3 rounded sm:py-1  ">
                                    Contact Us
                                </a>
                            </button>
                            
                        </div>
                        </div>
                    {/* Section HElp */}

                </div>
                </div>

                {/* Footer Copyright */}
                    <div className="py-3 bg-white">
                        <div className="w-[80%] sm:w-30% pb-6 container mx-auto flex justify-between text-center text-[8px]">
                            <div>
                                <p className="text-black font-bold">
                                &copy; Refactory Singapore Inc.
                                </p>
                            </div>

                            <div className="flex gap-3">
                            <a
                            href="#"
                            className=" text-black inline-block hover:underline"
                            >
                            Terms of Service
                            </a>
                            <a
                            href={"/privacypolicy"}
                            className=" text-black inline-block hover:underline"
                            >
                            Privacy Policy
                            </a>
                            </div>
                        </div>
                    </div>
                
                {/* Footer Copyright */}
            </div>
        </div>
    );
};

export default Footer;