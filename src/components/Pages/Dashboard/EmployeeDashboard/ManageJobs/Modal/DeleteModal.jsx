// import React from 'react';

// const DeleteModal = ({deleteJob}) => {
//     const handleDelete = id =>{
//         console.log(id,deleteJob)
//     }
//     return (
//        <div class="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto"
//           id="deleteModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
//           <div class="modal-dialog relative w-auto pointer-events-none">
//             <div
//               class="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
//               <div
//                 class="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md">
//                 <h5 class="text-xl font-medium leading-normal text-gray-800" id="exampleModalLabel">Modal title</h5>
//                 <button type="button"
//                   class="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
//                   data-bs-dismiss="modal" aria-label="Close"></button>
//               </div>
//               <div class="modal-body relative p-4">
//                 Modal body text goes here.
//               </div>
//               <div
//                 class="modal-footer flex flex-shrink-0 flex-wrap items-center justify-end p-4 border-t border-gray-200 rounded-b-md">
//                 <button type="button" class="px-6
//                   py-2.5
//                   border 
//                   bg-blue-100
//                   font-medium
//                   text-xs
//                   leading-tight
//                   uppercase
//                   rounded
//                   shadow-md
//                   hover: hover:shadow-lg
//                   focus: focus:shadow-lg focus:outline-none focus:ring-0
//                   active: active:shadow-lg
//                   transition
//                   duration-150
//                   ease-in-out" data-bs-dismiss="modal">Close</button>
//                 <button onClick={()=>handleDelete(deleteJob)} type="button" class="px-6
//               py-2.5
//               bg-rose-600
//               text-white
//               font-medium
//               text-xs
//               leading-tight
//               uppercase
//               rounded
//               shadow-md
//               hover:bg-rose-700 hover:shadow-lg
//               focus:bg-rose-700 focus:shadow-lg focus:outline-none focus:ring-0
//               active:bg-rose-800 active:shadow-lg
//               transition
//               duration-150
//               ease-in-out
//               ml-1">Confirm</button>
//               </div>
//             </div>
//           </div>
//         </div>
//     );
// };

// export default DeleteModal;