import React from 'react';
import"./Articles.css"

const Articles = () => {
    return (
      
  <div className="p-10"> 

  <h2 className="text-2xl font-bold text-center">Recent News Articles</h2>
  <p className="text-center my-5">Fresh job related news content posted each day.</p>

  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
     {/* <!-- card 1 --> */}
     <div className="max-w-sm rounded overflow-hidden">
      <div className="img-container">
         <img className="w-full img-containe" src="https://superio-next.vercel.app/images/resource/blog/1.jpg" alt="Mountain"/>
      </div>
         <div className=" py-4">
           <div className="flex mb-3">
               <p className="mr-5 font-bold text-gray-400  font-bold ">August 32,2021</p>
               <p className="font-bold  text-gray-400  ">12 Comment</p>
           </div>
           <div className="font-bold text-xl mb-2">Mountain</div>
           <p className="text-gray-700 text-base">
             Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, Nonea! Maiores et perferendis eaque, exercitationem praesentium nihil.
           </p>
         </div>
         <div className=" pt-4 pb-2">
          <button className="text-sm font-semibold text-sky-400">Read More </button>
                   
         </div>
       </div>
       {/* <!-- card 1 end -->
  
        <!-- card 2 --> */}
        <div className="max-w-sm rounded overflow-hidden">
          <div className="img-container">
             <img className="w-full img-containe" src="https://superio-next.vercel.app/images/resource/blog/2.jpg" alt="Mountain"/>
          </div>
             <div className=" py-4">
               <div className="flex mb-3">
                   <p className="mr-5 font-bold  text-gray-400   font-bold ">August 32,2021</p>
                   <p className="font-bold  text-gray-400  ">12 Comment</p>
               </div>
               <div className="font-bold text-xl mb-2">Mountain</div>
               <p className="text-gray-700 text-base">
                 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, Nonea! Maiores et perferendis eaque, exercitationem praesentium nihil.
               </p>
             </div>
             <div className=" pt-4 pb-2">
              <button className="text-sm font-semibold text-sky-400">Read More </button>
       
             </div>
           </div>
        {/* <!-- card 2 --> */}
                  {/* <!-- card 3 --> */}
                  <div className="max-w-sm rounded overflow-hidden">
                      <div className="img-container">
                         <img className="w-full  img-containe" src="https://superio-next.vercel.app/images/resource/blog/3.jpg" alt="Mountain"/>
                      </div>
                         <div className=" py-4">
                           <div className="flex mb-3">
                               <p className="mr-5 font-bold  text-gray-400   font-bold ">August 32,2021</p>
                               <p className="font-bold  text-gray-400  ">12 Comment</p>
                           </div>
                           <div className="font-bold text-xl mb-2">Mountain</div>
                           <p className="text-gray-700 text-base">
                             Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, Nonea! Maiores et perferendis eaque, exercitationem praesentium nihil.
                           </p>
                         </div>
                         <div className=" pt-4 pb-2">
                           <button className="text-sm font-semibold text-sky-400">Read More </button>
                   
                         </div>
                       </div>
                    {/* <!-- card 3 --> */}
  </div>

  
</div>
    );
};

export default Articles;