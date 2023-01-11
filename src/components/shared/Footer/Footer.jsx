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
    <footer>
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
