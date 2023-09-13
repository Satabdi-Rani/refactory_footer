import { BsFacebook, BsInstagram, BsTwitter, BsLinkedin } from 'react-icons/bs';

const Footer = () => {
    return (
        <div className="">  

     <footer className="">
        <div
          className=" relative gap-2"
          style={{
          backgroundImage:
              "url('https://refac-app.vercel.app/_next/static/media/banner-10.a58baf31.png')",
            backgroundPosition: "60%",
            backgroundSize: "cover", 
            width: "100%", // Change "full" to "100%"
            height: "438px", // Keep it as it is
          }}
        >
          <div className="container px-4 lg:px-8">
            <div className="row">
              <div className="col-lg-12 relative">
                <div className="newsletter-inner gap-2">
                  <div className="absolute right-0 bottom-[-95%] w-[90%] sm:absolute sm:right:0 sm:w-[70%] lg:absolute lg:right-8 sm:bottom-0 sm:max-w-30% lg:w-auto">
                  <img
                    className=""
                    src="https://refac-app.vercel.app/assets/imgs/banner/banner-9.png"
                    alt="newsletter"
                  />
                  </div>
                  <div className="newsletter-content py-12 sm:py-32 sm:p-2">
                    <h2 className="text-center text-2xl sm:ml-2 sm:text-4xl text-gray-700 font-bold lg:text-{#253D4E}">
                      Go Green <br />
                      Less Carbon Footprint!
                    </h2>
                    <p className="text-gray-700 text-center sm:ml-2">
                      Start Gadget Shopping with
                      <span className="text-brand"> Refactory</span>
                    </p>
                    <div className="form-subcriber sm:d-flex sm:py-4 sm:p-2 ">
                      <div className="d-flex">
                        <input
                          type="email"
                          placeholder="Your email"
                          className="mr-2 px-3 py-2 rounded-lg focus:outline-none"
                        />
                        <button
                          type="button"
                          className="search-button p-1 text-sm bg-black text-white rounded sm:p-2 sm:text-xl lg:px-4 lg:py-2"
                        >
                          Search
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Cards */}
        <section className="featured section-padding py-4">
          <div className="container mx-auto">
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Card 1 */}
              <div className="w-full p-4 border-2">
                <div className="flex items-center gap-4">
                  {/* <FaTruck size={32} /> */}
                  <div>
                    <h3 className="text-md sm:text-xl font-semibold">
                      Best prices & offers
                    </h3>
                    <p>Orders $50 or more</p> 
                  </div>
                </div>
              </div>
              {/* Card 2 */}
              <div className="w-full p-4 border-2">
                <div className="flex items-center gap-4">
                  {/* <FaTruck size={32} /> */}
                  <div>
                    <h3 className="text-md sm:text-xl font-semibold">Free delivery</h3>
                    <p>24/7 amazing services</p>
                  </div>
                </div>
              </div>
              {/* Card 3 */}
              <div className="w-full p-4 border-2">
                <div className="flex items-center gap-4">
                  {/* <FaPercent size={32} /> */}
                  <div>
                    <h3 className="text-md sm:text-xl font-semibold">Great daily deal</h3>
                    <p>When you</p>
                  </div>
                </div>
              </div>
              {/* Card 4 */}
              <div className="w-full p-4 border-2">
                <div className="flex items-center gap-4">
                  {/* <FaGift size={32} /> */}
                  <div>
                    <h3 className="text-md sm:text-xl font-semibold">Wide assortment</h3>
                    <p>Mega Discounts</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Cards */}
        
      </footer>

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
                                &copy; Copyright
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