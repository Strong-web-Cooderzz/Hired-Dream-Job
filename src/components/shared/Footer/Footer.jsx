import { IoIosArrowUp } from 'react-icons/io';

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
      <div>
        <span className="text-sm">
          &copy; 2023 Hired Dream Job. All Right Reserved.
        </span>
      </div>
      {/* button to scroll to top */}
      <span onClick={moveToTop} className="cursor-pointer font-black font-2xl text-blue-700 fixed bottom-6 right-6 bg-blue-200 p-3 rounded-full"><IoIosArrowUp /></span>
    </footer>
  );
}
