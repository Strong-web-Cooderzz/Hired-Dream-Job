import { IoIosArrowUp } from 'react-icons/io';
import { FaFacebookF, FaTwitter, FaYoutube, FaLinkedinIn } from 'react-icons/fa';

export default function Footer() {
  const moveToTop = () => {
    window.scroll({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <footer className="text-gray-600">
      {/* links and logo */}
      <div>
        <address>
          329 Whatever Street, Dhaka 2000, Bangladesh
        </address>

        {/* links */}
        <div className="pl-6 flex flex-col gap-16 shadow-md py-10">
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
      <div className="flex items-center flex-col gap-6 py-8 text-gray-600">
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
      <span onClick={moveToTop} className="cursor-pointer font-black font-2xl text-blue-700 fixed bottom-6 right-6 bg-blue-200 p-3 rounded-full"><IoIosArrowUp /></span>
    </footer>
  );
}
