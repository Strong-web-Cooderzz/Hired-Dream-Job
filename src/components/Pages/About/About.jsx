import React from 'react';
import img1 from "../../../assets/assets/about images/about-img-1.jpg";
import img2 from "../../../assets/assets/about images/about-img-2.webp";
import img3 from "../../../assets/assets/about images/about-img-3.webp";
import img4 from "../../../assets/assets/about images/about-img-4.webp";
import img5 from "../../../assets/assets/about images/about-img-5.webp";
import img6 from "../../../assets/assets/about images/about-img-6.webp";
import catGB from "../../../assets/Hero/call-to-action-BG.jpg";
import testiBG from "../../../assets/Hero/shape-2.65541c6a.png";
import avaterBG1 from "../../../assets/assets/Avater/testimonial-left.png";
import avaterBG2 from "../../../assets/assets/Avater/testimonial-right.png";
import avater1 from "../../../assets/assets/Avater/testi-thumb-1.png";
import avater2 from "../../../assets/assets/Avater/testi-thumb-2.png";
import avater3 from "../../../assets/assets/Avater/testi-thumb-3.png";
import workicon1 from "../../../assets/assets/works/work-1.png";
import workicon2 from "../../../assets/assets/works/work-2.png";
import workicon3 from "../../../assets/assets/works/work-3.png";
import company1 from "../../../assets/assets/companis/1-1.png";
import company2 from "../../../assets/assets/companis/1-2.png";
import company3 from "../../../assets/assets/companis/1-5.png";
import company4 from "../../../assets/assets/companis/1-6.png";

const About = () => {
    return (
        <div>
      {/* page Title */}
      <section className='bg-[#f5f7fc] pt-[50px] pb-[40px] text-center'>
        <h1 className='text-[#202124] text-3xl font-medium mb-3'>About Us</h1>
        <ul className='text-base mt-[5px] mb-4 p-0 flex text-center justify-center'>
          <li className='cursor-pointer'>
            <a href='/'>Home</a> /&nbsp;
          </li>
          <li className='cursor-pointer'>About Us</li>
        </ul>
      </section>

      {/* About Hero section */}
      <section className='py-[50px]'>
        {/* Image gallery */}
        <div className='grid grid-cols-2 gap-4 p-4 mx-auto md:grid-cols-4 max-w-7xl'>
          <img src={img1} alt='' className=' rounded shadow-sm' />
          <div className='flex gap-3 flex-col'>
            <img alt='' className='rounded shadow-sm' src={img2} />
            <img alt='' className=' rounded shadow-sm' src={img3} />
          </div>
          <div className='flex gap-3 flex-col'>
            <img alt='' className=' rounded shadow-sm' src={img4} />
            <img alt='' className=' rounded shadow-sm' src={img5} />
          </div>
          <img alt='' className=' rounded shadow-sm' src={img6} />
        </div>

        {/* Fun factor section */}
        <div className='max-w-[900px] mx-auto pb-8 pt-12'>
          <div className='flex justify-around px-2 gap-2 text-center'>
            <div className='mb-[30px]'>
              <div className='mb-[10px] text-[#202124] font-medium text-4xl md:text-[50px] text-center'>
                4M
              </div>
              <h4 className='text-xs sm:text-[15px] font-normal text-[#696969]'>
                4 million daily active users
              </h4>
            </div>
            <div className='mb-[30px]'>
              <div className='mb-[10px] text-[#202124] font-medium text-4xl md:text-[50px] text-center'>
                12K
              </div>
              <h4 className='text-xs sm:text-[15px] font-normal text-[#696969]'>
                Over 12k open job positions
              </h4>
            </div>
            <div className='mb-[30px]'>
              <div className='mb-[10px] text-[#202124] font-medium text-4xl md:text-[50px] text-center'>
                20M
              </div>
              <h4 className='text-xs sm:text-[15px] font-normal text-[#696969]'>
                Over 20 million stories shared
              </h4>
            </div>
          </div>
        </div>

        {/* Text Box */}
        <div className='max-w-[900px] mx-auto px-2'>
          <h4 className='font-medium text-[#202124] text-3xl mb-8'>
            About Superio
          </h4>

          <p className='text-[#696969] text-[15px] mb-[26px]'>
            Far much that one rank beheld bluebird after outside ignobly
            allegedly more when oh arrogantly vehement irresistibly fussy
            penguin insect additionally wow absolutely crud meretriciously
            hastily dalmatian a glowered inset one echidna cassowary some parrot
            and much as goodness some froze the sullen much connected bat
            wonderfully on instantaneously eel valiantly petted this along
            across highhandedly much.
          </p>
          <p className='text-[#696969] text-[15px] mb-[26px]'>
            Repeatedly dreamed alas opossum but dramatically despite
            expeditiously that jeepers loosely yikes that as or eel underneath
            kept and slept compactly far purred sure abidingly up above fitting
            to strident wiped set waywardly far the and pangolin horse approving
            paid chuckled cassowary oh above a much opposite far much
            hypnotically more therefore wasp less that hey apart well like while
            superbly orca and far hence one.Far much that one rank beheld
            bluebird after outside ignobly allegedly more when oh arrogantly
            vehement irresistibly fussy.
          </p>
        </div>
      </section>

      {/* call-to-action Section */}
      <section
        className='py-40'
        style={{
          background: `url(${catGB}) no-repeat center center / cover`,
        }}>
        <div className='mx-auto text-center'>
          <div className='mb-8'>
            <h2 className='text-3xl font-medium text-white'>
              Your Dream Jobs Are Waiting
            </h2>
            <p className='mt-[15px] text-[15px] text-white'>
              Over 1 million interactions, 50,000 success stories Make yours
              now.
            </p>
          </div>
          <div className=''>
            <button
              type='button'
              className='px-9 py-4 rounded-lg bg-[#e2eaf8] hover:bg-[#0146a6] text-[#1967d2] hover:text-white text-[15px] m-3'>
              Search Job
            </button>
            <button
              type='button'
              className='px-9 py-4 rounded-lg bg-[#f9ab00] hover:bg-[#e9a000] text-white text-[15px] m-3'>
              Apply Job Now
            </button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section
        className='py-[100px] relative overflow-hidden px-3'
        style={{
          background: `url(${testiBG}) no-repeat center center`,
        }}>
        <div className='mb-[50px] text-center'>
          <h2 className='text-[#202124] text-3xl font-medium'>
            Testimonials From Our Customers
          </h2>
          <p className='text-[#696969] mt-[15px] text-[15px]'>
            Lorem ipsum dolor sit amet elit, sed do eiusmod tempor
          </p>
        </div>

        <div className='container max-w-xl mx-auto'>
          <div className='flex flex-col items-center w-full p-6 space-y-8 rounded-md lg:h-full lg:p-8 dark:text-gray-100'>
            <img
              src={avater1}
              alt=''
              className='w-28 h-28 rounded-full border-[10px] border-white shadow-lg'
            />

            <h4 className='text-[#1967d2] text-lg '>Unique Design!</h4>

            <blockquote className='max-w-lg text-base italic text-center text-[#696969]'>
              Without JobHunt i’d be homeless, they found me a job and got me
              sorted out quickly with everything! Can’t quite… The Mitech team
              works really hard to ensure high level of quality
            </blockquote>

            <div className='flex space-x-2'>
              <button
                type='button'
                aria-label='Page 1'
                className='w-2 h-2 rounded-full  bg-[#bfc8cb]'></button>
              <button
                type='button'
                aria-label='Page 2'
                className='w-2 h-2 rounded-full  bg-[#bfc8cb]'></button>
              <button
                type='button'
                aria-label='Page 3'
                className='w-2 h-2 rounded-full  bg-[#bfc8cb]'></button>
            </div>
          </div>
        </div>

        <div className='absolute -left-[300px] top-1/3 md:block hidden'>
          <img src={avaterBG1} alt='' />
        </div>
        <div className='absolute -right-[300px] top-1/3 md:block hidden'>
          <img src={avaterBG2} alt='' />
        </div>
      </section>

      {/* Work Section  */}
      <section className='py-[100px] bg-[#f5f7fc]'>
        <div className='text-center mb-[50px]'>
          <h2 className='text-3xl font-medium text-[#202124]'>How It Works?</h2>
          <p className='mt-[15px] text-[15px] text-[#696969] '>
            Job for anyone, anywhere
          </p>
        </div>

        <div className='flex justify-evenly flex-wrap gap-y-6 px-2'>
          <div className='max-w-sm pt-[50px] pb-[60px] px-11 rounded-lg shadow-sm cursor-pointer hover:shadow-lg bg-white dark:text-gray-50 text-center'>
            <img src={workicon1} alt='' className='mx-auto mb-8' />

            <h5 className='text-lg font-medium text-[#363636] mb-[10px]'>
              Free Resume Assessments
            </h5>

            <p className='text-[#696969] text-sm'>
              Employers on average spend 31 seconds scanning resumes to identify
              potential matches.
            </p>
          </div>
          <div className='max-w-sm pt-[50px] pb-[60px] px-11 rounded-lg shadow-sm cursor-pointer hover:shadow-lg bg-white dark:text-gray-50 text-center'>
            <img src={workicon2} alt='' className='mx-auto mb-8' />

            <h5 className='text-lg font-medium text-[#363636] mb-[10px]'>
              Job Fit Scoring
            </h5>

            <p className='text-[#696969] text-sm'>
              Employers on average spend 31 seconds scanning resumes to identify
              potential matches.
            </p>
          </div>
          <div className='max-w-sm pt-[50px] pb-[60px] px-11 rounded-lg shadow-sm cursor-pointer hover:shadow-lg bg-white dark:text-gray-50 text-center'>
            <img src={workicon3} alt='' className='mx-auto mb-8' />

            <h5 className='text-lg font-medium text-[#363636] mb-[10px]'>
              Help Every Step of the Way
            </h5>

            <p className='text-[#696969] text-sm'>
              Employers on average spend 31 seconds scanning resumes to identify
              potential matches.
            </p>
          </div>
        </div>
      </section>

      {/* Company section  */}
      <section className='py-[60px]'>
        <div className='flex flex-wrap md:justify-around justify-center gap-4 px-5'>
          <img src={company1} alt='' className='w-28' />
          <img src={company2} alt='' className='w-28' />
          <img src={company3} alt='' className='w-28' />
          <img src={company1} alt='' className='w-28' />
          <img src={company3} alt='' className='w-28' />
          <img src={company4} alt='' className='w-28' />
        </div>
      </section>
    </div>
    );
};

export default About;