import React from 'react';
import"./Articles.css"

const Articles = () => {
    return (
      
  <div classname="p-10"> 

  <h2 classname="text-2xl font-bold text-center">Recent News Articles</h2>
  <p classname="text-center my-5">Fresh job related news content posted each day.</p>

  <div classname="grid grid-cols-3 md:grid-cols-3 gap-2">
     {/* <!-- card 1 --> */}
     <div classname="max-w-sm rounded overflow-hidden">
      <div classname="img-container">
         <img classname="w-full img-containe" src="https://bengali.cdn.zeenews.com/bengali/sites/default/files/styles/zm_700x400/public/2016/10/23/68669-train-23-10-16.jpg?itok=fTs1XNc-" alt="Mountain"/>
      </div>
         <div classname=" py-4">
           <div classname="flex mb-3">
               <p classname="mr-5 font-bold text-gray-400  font-bold ">August 32,2021</p>
               <p classname="font-bold  text-gray-400  ">12 Comment</p>
           </div>
           <div classname="font-bold text-xl mb-2">Mountain</div>
           <p classname="text-gray-700 text-base">
             Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, Nonea! Maiores et perferendis eaque, exercitationem praesentium nihil.
           </p>
         </div>
         <div classname=" pt-4 pb-2">
          <button classname="text-sm font-semibold text-sky-400">Read More </button>
                   
         </div>
       </div>
       {/* <!-- card 1 end -->
  
        <!-- card 2 --> */}
        <div classname="max-w-sm rounded overflow-hidden">
          <div classname="img-container">
             <img classname="w-full img-containe" src="https://bengali.cdn.zeenews.com/bengali/sites/default/files/styles/zm_700x400/public/2016/10/23/68669-train-23-10-16.jpg?itok=fTs1XNc-" alt="Mountain"/>
          </div>
             <div classname=" py-4">
               <div classname="flex mb-3">
                   <p classname="mr-5 font-bold  text-gray-400   font-bold ">August 32,2021</p>
                   <p classname="font-bold  text-gray-400  ">12 Comment</p>
               </div>
               <div classname="font-bold text-xl mb-2">Mountain</div>
               <p classname="text-gray-700 text-base">
                 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, Nonea! Maiores et perferendis eaque, exercitationem praesentium nihil.
               </p>
             </div>
             <div classname=" pt-4 pb-2">
              <button classname="text-sm font-semibold text-sky-400">Read More </button>
       
             </div>
           </div>
        {/* <!-- card 2 --> */}
                  {/* <!-- card 3 --> */}
                  <div classname="max-w-sm rounded overflow-hidden">
                      <div classname="img-container">
                         <img classname="w-full img-containe" src="https://bengali.cdn.zeenews.com/bengali/sites/default/files/styles/zm_700x400/public/2016/10/23/68669-train-23-10-16.jpg?itok=fTs1XNc-" alt="Mountain"/>
                      </div>
                         <div classname=" py-4">
                           <div classname="flex mb-3">
                               <p classname="mr-5 font-bold  text-gray-400   font-bold ">August 32,2021</p>
                               <p classname="font-bold  text-gray-400  ">12 Comment</p>
                           </div>
                           <div classname="font-bold text-xl mb-2">Mountain</div>
                           <p classname="text-gray-700 text-base">
                             Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, Nonea! Maiores et perferendis eaque, exercitationem praesentium nihil.
                           </p>
                         </div>
                         <div classname=" pt-4 pb-2">
                           <button classname="text-sm font-semibold text-sky-400">Read More </button>
                   
                         </div>
                       </div>
                    {/* <!-- card 3 --> */}
  </div>

  
</div>
    );
};

export default Articles;