import { Link } from 'react-router-dom';
import {  FaArrowRight } from "react-icons/fa";


const Articles = () => {
  return (
    <div className="px-4 mt-10  w-full mb-6  mx-auto">
      <h2 className="text-3xl font-semibold text-center">Recent News Articles</h2>
      <p className="text-center mt-2 mb-4">Fresh job related news content posted each day.</p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 place-items-center">

        {/* <!-- card 1 start  --> */}
        <div className="w-full mt-5 rounded-md overflow-hidden border-2">
          {/* image */}
          <div className="overflow-hidden">
            <img className="w-full hover:scale-110 transition-transform" src="https://superio-next.vercel.app/images/resource/blog/1.jpg" alt="Mountain" />
          </div>
          {/* text */}
          <div className="p-4">
            <div className="flex mb-3">
              <p className="mr-5 font-bold text-gray-400   ">August 32,2021</p>
              <p className="font-bold  text-gray-400  ">12 Comment</p>
            </div>
            <div className="font-bold text-xl mb-2">Mountain</div>
            <p className="text-gray-700 text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, Nonea! Maiores et perferendis eaque, exercitationem praesentium nihil.
            </p>
          </div>
          <div className="pl-4 pb-4">
            <button className="text-sm font-semibold text-sky-400">Read More </button>
          </div>
        </div>
        {/* <!-- card 1 end --> */}

        {/* <!-- card 2 start  --> */}
        <div className="w-full mt-5 rounded-md overflow-hidden border-2">
          {/* image */}
          <div className="overflow-hidden">
            <img className="w-full hover:scale-110 transition-transform" src="https://superio-next.vercel.app/images/resource/blog/1.jpg" alt="Mountain" />
          </div>
          {/* text */}
          <div className="p-4">
            <div className="flex mb-3">
              <p className="mr-5 font-bold text-gray-400  font-bold ">August 32,2021</p>
              <p className="font-bold  text-gray-400  ">12 Comment</p>
            </div>
            <div className="font-bold text-xl mb-2">Mountain</div>
            <p className="text-gray-700 text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, Nonea! Maiores et perferendis eaque, exercitationem praesentium nihil.
            </p>
          </div>
          <div className="pl-4 pb-4">
            <button className="text-sm font-semibold text-sky-400">Read More </button>
          </div>
        </div>
        {/* <!-- card 2 end --> */}

        {/* <!-- card 3 --> */}
        <div className="w-full mt-5 rounded-md overflow-hidden border-2">
          {/* image */}
          <div className="overflow-hidden">
            <img className="w-full hover:scale-110 transition-transform" src="https://superio-next.vercel.app/images/resource/blog/1.jpg" alt="Mountain" />
          </div>
          {/* text */}
          <div className="p-4">
            <div className="flex mb-3">
              <p className="mr-5 font-bold text-gray-400  font-bold ">August 32,2021</p>
              <p className="font-bold  text-gray-400  ">12 Comment</p>
            </div>
            <div className="font-bold text-xl mb-2">Mountain</div>
            <p className="text-gray-700 text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, Nonea! Maiores et perferendis eaque, exercitationem praesentium nihil.
            </p>
          </div>
          <div className="pl-4 pb-4">
            <button className="text-sm font-semibold text-sky-400">Read More </button>
          </div>
        </div>
        {/* <!-- card 3 end --> */}
        
     </div>
    <div className='mt-4 flex justify-center'>
    <button className=' bg-blue-500 hover:bg-blue-700 btn-normal  text-white  flex items-center gap-3  ' > Load more articles <FaArrowRight className='text-white ' />   </button>
    </div>
    </div>
  );
};

export default Articles;