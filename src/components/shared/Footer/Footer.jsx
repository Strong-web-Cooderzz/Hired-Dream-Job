import { IoIosArrowUp } from 'react-icons/io';
import { FaFacebookF, FaTwitter, FaYoutube, FaLinkedinIn } from 'react-icons/fa';
import logo from '../../../assets/logo.svg';
import { useEffect, useState } from 'react';

export default function Footer() {
  const [height, setHeight] = useState(window.scrollY);

  useEffect(() => {
    window.onscroll = () => {
      setHeight(window.scrollY);
    }
  }, []);

  const moveToTop = () => {
    window.scroll({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <footer className="text-gray-600 max-w-screen-2xl 2xl:mx-auto">
      {/* links and logo, first part */}
      <div className="flex flex-col lg:flex-row md:justify-between md:px-12 border-solid border-2 border-gray-100 border-l-0 border-t-0 border-r-0 gap-6 md: gap-12">
        {/* logo, phone and address */}
        <div className="flex flex-col gap-4 pl-6 md:pl-0">
          <img src={logo} alt="Hired Dream Job" width="100px" />
          <div className="flex flex-col gap-2">
            <span className="text-lg font-bold">Call us at</span>
            <a href="tel:+8801234567890" className="text-blue-600">+880123456789</a>
          </div>
          <address className='w-9/12'>
            329 Whatever Street,
            Dhaka 2000,
            Bangladesh
          </address>
          <a href="mailto:support@hireddreamjob.com">support@hireddreamjob</a>
        </div>
        {/* links */}
        <div className="pl-6 flex flex-col gap-16 py-10 lg:flex lg:flex-row md:pl-0 md:grid md:grid-cols-2">
          <div className="flex flex-col gap-8">
            <span className="font-4xl font-bold text-gray-900">For Candidates</span>
            <ul className="text-sm flex flex-col gap-4">
              <li><a href="#">Browse Jobs</a></li>
              <li><a href="#">Browse Categories</a></li>
              <li><a href="#">Candidate Dashboard</a></li>
              <li><a href="#">Job Alerts</a></li>
              <li><a href="#">My Bookmarks</a></li>
            </ul>
          </div>
          <div className="flex flex-col gap-8">
            <span className="font-4xl font-bold text-gray-900">For Employers</span>
            <ul className="text-sm flex flex-col gap-4">
              <li><a href="#">Browse Candidates</a></li>
              <li><a href="#">Employer Dashboard</a></li>
              <li><a href="#">Add Job</a></li>
              <li><a href="#">Job Packages</a></li>
            </ul>
          </div>
          <div className="flex flex-col gap-8">
            <span className="font-4xl font-bold text-gray-900">About Us</span>
            <ul className="text-sm flex flex-col gap-4">
              <li><a href="#">About Us</a></li>
              <li><a href="#">Join Page Invoice</a></li>
              <li><a href="#">Terms Page</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>
          <div className="flex flex-col gap-8">
            <span className="font-4xl font-bold text-gray-900">Helpful Resources</span>
            <ul className="text-sm flex flex-col gap-4">
              <li><a href="#">Site Map</a></li>
              <li><a href="#">Terms of Use</a></li>
              <li><a href="#">Privacy Center</a></li>
              <li><a href="#">Security Center</a></li>
              <li><a href="#">Accesibility Center</a></li>
            </ul>
          </div>
        </div>
      </div>
      {/* social icons and copyright */}
      <div className="flex items-center flex-col gap-6 py-8 text-gray-600 md:flex-row-reverse md:justify-between md:px-12 md:py-12">
        <div className="flex gap-6">
          <span><FaFacebookF /></span>
          <span><FaTwitter /></span>
          <span><FaYoutube /></span>
          <span><FaLinkedinIn /></span>
        </div>
        <span className="text-sm">
          &copy; 2023 Hired Dream Job. All Right Reserved.
        </span>
      </div>
      {/* button to scroll to top */}
      <span onClick={moveToTop} className={`${height > 100 ? '' : 'hidden'} cursor-pointer font-black font-2xl text-blue-700 fixed bottom-6 right-6 md:bottom-16 md:right-16 bg-blue-200 p-3 rounded-full z-10`}><IoIosArrowUp /></span>
    </footer>
  );
}
