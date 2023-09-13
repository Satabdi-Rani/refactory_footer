import office2 from '../assets/office2.jpg';
import founder from '../assets/founder.jpg';
// import mainImage  from '../assets/Old-ewaste-scaled.jpg';


export const Story = () => {
  return (
    <div className="container mx-auto "> {/*Main Container */}

    {/* <div className=' w-full h-1/2' style="background-image: url('../assets/Old-ewaste-scaled.jpg');">
     <img className="w-full h-full bg-contain" src={mainImage} alt="" />
    </div> */}

      <div className="w-[80%] flex flex-row mx-auto">  {/*Story Container */}
        <div className=" pt-32"> {/*Story Left Side */}
          <h2 className="text-7xl text-black mb-2 font-normal text-center">
            Our Story
          </h2>
          <p className=" mt-6 text-black text-justify">
            {" "}
            At ReFactory, our impact goes beyond commerce; we are architects of
            change, forging a sustainable path towards affordable technology and a
            healthier planet. By seamlessly transforming used electronics into
            high-quality, affordable options through rigorous quality control, we
            not only enable economic accessibility but also spearhead a circular
            economy that safeguards our environment from the perils of e-waste. With
            every device recycled or rejuvenated, we prevent harmful substances from
            tarnishing the Earth, conserve precious resources, and empower
            individuals to make eco-conscious choices, cultivating a future where
            technology harmonizes with nature.
          </p>
        </div>  
        <div className="hidden ml-10 py-12 pl-12 bg-lime-100 mt-12"> {/*Story Right Side */}
         <img className='w-[400px] h-[500px] ml-16' src={office2} alt="" />
        </div>
      </div>       
       
       {/* Founder Section */}

       <div className="w-[80%] flex flex-row mx-auto  mb-24">  {/*Founder Container */}

       <div className="w-[40%] py-12 mt-52"> {/*Founder Right Side */}
         <img className='w-[500px] h-[500px]' src={founder} alt="" />
        </div>

        <div className="w-[50%] pt-32 ml-28"> {/*Founder Left Side */}
          <h2 className="text-5xl text-black mb-2 font-normal">
           Meet Our Founder
          </h2>
            <p className="mt-6 text-black text-justify">
              {" "}
                  ABM Obaidullah is a visionary entrepreneur with a passion for technology
              and innovation. He is the founder of Redgreen Technology Ltd, a leading
              technology company that provides cutting-edge solutions to businesses in
              various industries. He is also the managing partner of Tiger Ventures
              Pte Ltd, a management services company that helps startups to grow and
              scale. Obaidullah has an impressive background in the technology
              industry, having studied at the prestigious University of Dhaka. He also
              gained valuable experience working at McDonalds Australia and Eastern
              Bank Bangladesh before venturing into entrepreneurship. Obaidullah has
              invested in several startups in the retail and Agri Tech industries,
              leveraging his knowledge and expertise to help them grow and succeed.
              <br />
              <br />
               He
              has a strong understanding of the challenges faced by startups, and is
              passionate about providing them with the resources and support they need
              to thrive. Over the course of his career, Obaidullah has traveled
              extensively throughout Australia, Indonesia, Malaysia, Singapore,
              Thailand, and China, attending various tech events and conferences. He
              has been a keynote speaker and panelist at events such as the China
              Japan Korea Industries Expo 2017 in Shandong and the Investment Summit
              Shenzhen 2019. Obaidullah is a well-respected figure in the technology
              industry, and is known for his innovative ideas and strategic thinking.
              He is committed to helping other entrepreneurs to achieve their goals,
              and is dedicated to promoting the growth and development of the tech
              industry.
            </p>
        </div>  
      </div> 
    </div> 
  );
};

export default Story;