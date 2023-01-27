import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { BiArrowFromBottom, BiArrowFromTop } from "react-icons/bi";
import { AuthContext } from "../../../AuthProvider/AuthProvider";

const MyProfile = () => {
  const { user } = useContext(AuthContext);
  
  const [userData,setUserData] = useState('')
  
    useEffect(()=>{
  fetch(`http://localhost:5000/user?email=${user?.email}`)
  .then(res=>res.json())
  .then(data=>{
    setUserData(data)
  })
},[user?.email])
  const imgbbAPIKEY = "baca7cebf7d1365bf97c10bb391342f9";

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();
  const handleUpdateEmployer = (data) => {
  
    const image = data.image[0];
    const formData = new FormData()
    formData.append('image',image)
    const url = `https://api.imgbb.com/1/upload?key=${imgbbAPIKEY}`;
    fetch(url,{
      method:'POST',
      body: formData
    })
    .then(res=>res.json())
    .then(imageData=>{
      const imageUrl = imageData.data.url
      const updateData = {
        'companyName': data.compnayName, 
        'photo':imageUrl,
        'email':data.emailAddress,
        'City':data.city,
        'Country':data.country,
        'phoneNumber':data.phoneNumber,
        'team': data.teamSize,
        'Postal':data.zipCode,
        'Street': data.streetAddress,
        'github': data.github,
        'facebook':data.facebook,
        'twitter':data.twitter,
        'linkedin':data.linkedin,
        'website':data.website,
        'Company_Bio':data.companyBio,
        'build':data.established,
      }
      const employInfo = {
        'email':userData.email,
        'fullName':userData.fullName,
        'photo': userData.photo,
        'type': userData.type,
        'employData': updateData
      } 
      if(imageUrl){
        fetch(`http://localhost:5000/employ?email=${user?.email}`,{
          method:'PUT',
          headers:{
            'content-type':'application/json'
          },
          body: JSON.stringify(employInfo)
        })
        .then(res=>res.json())
        .then(data=>{
          console.log(data);
          reset()
          toast.success('Updated!')
        })
      }
    })
  };

  return (
    <div className="w-full text-gray-700 h-screen bg-slate-200">
      <div className="mx-12 my-7">
        <h2 className="text-2xl font-semibold ">Company Profile!</h2>
        <h3>Ready to jump back in?</h3>
      </div>
      <form
        onSubmit={handleSubmit(handleUpdateEmployer)}
        className="mx-8 p-5 bg-white"
      >
        <h3>My Profile</h3>
        <div>
          <div class="flex relative items-center gap-2">
            <div class="mb-3 w-60 ">
              <label
                for="formFile"
                class="form-label overflow-hidden relative w-full inline-block mb-2 text-gray-700"
              >
                <div className="border border-dashed py-4 hover:border-black transition duration-300 border-blue-200">
                  <p className="flex flex-col justify-center items-center">
                    <BiArrowFromBottom className="text-3xl" />
                    Browse Logo{" "}
                  </p>
                </div>
                <input
                  accept="image/*"
                  type="file"
                  name="file_upload"
                  {...register("image", { required: true })}
                  class="form-control w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out hidden m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="formFile"
                />
              
              </label>
             
            </div>
            <p className="text-xs left-0 top-0 flex w-full">
              Max file size is 1MB, Minimum dimension: 330x300 And Suitable
              files are .jpg & .png
            </p>
          </div>
        </div>
        {/* Company Name */}
        <div class="flex">
          <div className="md:flex w-full gap-5">
            <div className="md:w-1/2">
              <p>Company name</p>
              <div class="form-floating mb-3 w-full">
                <input {...register("compnayName", { required: true })}
                  type="text"
                  class="form-control
       block
       w-full
       px-3
       py-1.5
       text-base
       font-normal
       text-gray-700
       bg-white bg-clip-padding
       border border-solid border-gray-300
       rounded
       transition
       ease-in-out
       m-0
       focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  id="floatingInput"
                  placeholder="name@example.com"
                />
                <label for="floatingInput" class="text-gray-700">
                  Company name{" "}
                </label>
              </div>
            </div>
            {/* Email address */}
            <div className="md:w-1/2">
              <p>Email address </p>
              <div class="form-floating mb-3 w-full">
                <input {...register("emailAddress", { required: true })}
                  type="email"
                  class="form-control
       block
       w-full
       px-3
       py-1.5
       text-base
       font-normal
       text-gray-700
       bg-white bg-clip-padding
       border border-solid border-gray-300
       rounded
       transition
       ease-in-out
       m-0
       focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  id="floatingInput"
                  placeholder="name@example.com"
                />
                <label for="floatingInput" class="text-gray-700">
                  Email address{" "}
                </label>
              </div>
            </div>
          </div>
        </div>

        {/* Phone , Website */}
        <div class="flex">
          <div className="md:flex w-full gap-5">
            <div className="md:w-1/2">
              <p>Phone</p>
              <div class="form-floating mb-3 w-full">
                {/* Phone */}
                <input {...register("phoneNumber", { required: true })}
                  type="number"
                  class="form-control
       block
       w-full
       px-3
       py-1.5
       text-base
       font-normal
       text-gray-700
       bg-white bg-clip-padding
       border border-solid border-gray-300
       rounded
       transition
       ease-in-out
       m-0
       focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  id="floatingInput"
                  placeholder="name@example.com"
                />
                <label for="floatingInput" class="text-gray-700">
                  1234567890{" "}
                </label>
              </div>
            </div>
            {/* Website */}
            <div className="md:w-1/2">
              <p>Website</p>
              <div class="form-floating mb-3 w-full">
                <input {...register("website", { required: true })}
                  type="url"
                  class="form-control
       block
       w-full
       px-3
       py-1.5
       text-base
       font-normal
       text-gray-700
       bg-white bg-clip-padding
       border border-solid border-gray-300
       rounded
       transition
       ease-in-out
       m-0
       focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  id="floatingInput"
                  placeholder="name@example.com"
                />
                <label for="floatingInput" class="text-gray-700">
                  www.hdj.netlify.app
                </label>
              </div>
            </div>
          </div>
        </div>
        {/* Est. Since , Team Size */}
        <div class="flex">
          <div className="md:flex w-full gap-5">
            <div className="md:w-1/2">
              <p>Est. Since</p>
              <div class="form-floating mb-3 w-full">
                {/* Est. Since */}
                <input {...register("established", { required: true })}
                  type="text"
                  class="form-control
       block
       w-full
       px-3
       py-1.5
       text-base
       font-normal
       text-gray-700
       bg-white bg-clip-padding
       border border-solid border-gray-300
       rounded
       transition
       ease-in-out
       m-0
       focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  id="floatingInput"
                  placeholder="name@example.com"
                />
                <label for="floatingInput" class="text-gray-700">
                  06.04.2023{" "}
                </label>
              </div>
            </div>
            {/* Team Size */}
            <div className="md:w-1/2">
              <p>Team Size</p>
              <div class="form-floating mb-3 w-full">
                <div class="">
                  <div class="mb-3 ">
                    <select {...register("teamSize", { required: true })}
                      class="form-select py-4  form-select-lg mb-3
      appearance-none
      block
      w-full
      px-4
      font-normal
      text-gray-700
      bg-white bg-clip-padding bg-no-repeat
      border border-solid border-gray-300
      rounded
      transition
      ease-in-out
      m-0
      focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                      aria-label=".form-select-lg example"
                    >
                      <option value="50-100" selected>50-100</option>
                      <option value="100-150">100-150</option>
                      <option value="200-250">200-250</option>
                      <option value="300-350">300-350</option>
                      <option value="500-1000">500-1000</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-blue-100 w-full p-3 my-5">
          <h3>Social Network</h3>
        </div>
        <div>
          {/* Social */}
          <div class="flex">
            <div className="md:flex w-full gap-5">
              <div className="md:w-1/2">
                <p>Facebook</p>
                <div class="form-floating mb-3 w-full">
                  {/* Twitter */}
                  <input {...register("facebook", { required: true })}
                    type="url"
                    class="form-control
       block
       w-full
       px-3
       py-1.5
       text-base
       font-normal
       text-gray-700
       bg-white bg-clip-padding
       border border-solid border-gray-300
       rounded
       transition
       ease-in-out
       m-0
       focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    id="floatingInput"
                    placeholder="name@example.com"
                  />
                  <label for="floatingInput" class="text-gray-700">
                    www.facebook.com/hdj{" "}
                  </label>
                </div>
              </div>
              {/* Twitter */}
              <div className="md:w-1/2">
                <p>Twitter</p>
                <div class="form-floating mb-3 w-full">
                  <input {...register("twitter", { required: true })}
                    type="url"
                    class="form-control
       block
       w-full
       px-3
       py-1.5
       text-base
       font-normal
       text-gray-700
       bg-white bg-clip-padding
       border border-solid border-gray-300
       rounded
       transition
       ease-in-out
       m-0
       focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    id="floatingInput"
                    placeholder="name@example.com"
                  />
                  <label for="floatingInput" class="text-gray-700">
                    www.twitter.com/hdjs
                  </label>
                </div>
              </div>
            </div>
          </div>
          {/* Linkedin  github*/}
          <div class="flex">
            <div className="md:flex w-full gap-5">
              <div className="md:w-1/2">
                <p>Linkedin</p>
                <div class="form-floating mb-3 w-full">
                  {/* Linkedin */}
                  <input {...register("linkedin", { required: true })}
                    type="url"
                    class="form-control
       block
       w-full
       px-3
       py-1.5
       text-base
       font-normal
       text-gray-700
       bg-white bg-clip-padding
       border border-solid border-gray-300
       rounded
       transition
       ease-in-out
       m-0
       focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    id="floatingInput"
                    placeholder="name@example.com"
                  />
                  <label for="floatingInput" class="text-gray-700">
                    www.linkedin.com/in/hdj{" "}
                  </label>
                </div>
              </div>
              {/* Github */}
              <div className="md:w-1/2">
                <p>Github</p>
                <div class="form-floating mb-3 w-full">
                  <input {...register("github", { required: true })}
                    type="url"
                    class="form-control
       block
       w-full
       px-3
       py-1.5
       text-base
       font-normal
       text-gray-700
       bg-white bg-clip-padding
       border border-solid border-gray-300
       rounded
       transition
       ease-in-out
       m-0
       focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    id="floatingInput"
                  />
                  <label for="floatingInput" class="text-gray-700">
                    www.github.com/hdj
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-blue-100 w-full p-3 my-5">
            <h3>Contact Information</h3>
          </div>
          {/* Social */}
          <div class="flex">
            <div className="md:flex w-full gap-5">
              <div className="md:w-1/2">
                <p>Country</p>
                <div class="form-floating mb-3 w-full">
                  {/* Country */}
                  <input {...register("country", { required: true })}
                    type="text"
                    class="form-control
       block
       w-full
       px-3
       py-1.5
       text-base
       font-normal
       text-gray-700
       bg-white bg-clip-padding
       border border-solid border-gray-300
       rounded
       transition
       ease-in-out
       m-0
       focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    id="floatingInput"
                    placeholder="name@example.com"
                  />
                  <label for="floatingInput" class="text-gray-700">
                    US{" "}
                  </label>
                </div>
              </div>
              {/* City */}
              <div className="md:w-1/2">
                <p>City</p>
                <div class="form-floating mb-3 w-full">
                  <input {...register("city", { required: true })}
                    type="text"
                    class="form-control
       block
       w-full
       px-3
       py-1.5
       text-base
       font-normal
       text-gray-700
       bg-white bg-clip-padding
       border border-solid border-gray-300
       rounded
       transition
       ease-in-out
       m-0
       focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    id="floatingInput"
                    placeholder="name@example.com"
                  />
                  <label for="floatingInput" class="text-gray-700">
                    New York
                  </label>
                </div>
              </div>
            </div>
          </div>
          {/* Zip Code, Street address*/}
          <div class="flex">
            <div className="md:flex w-full gap-5">
              <div className="md:w-1/2">
                <p> Zip Code</p>
                <div class="form-floating mb-3 w-full">
                  {/*  Zip Code */}
                  <input {...register("zipCode", { required: true })}
                    type="number"
                    class="form-control
       block
       w-full
       px-3
       py-1.5
       text-base
       font-normal
       text-gray-700
       bg-white bg-clip-padding
       border border-solid border-gray-300
       rounded
       transition
       ease-in-out
       m-0
       focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    id="floatingInput"
                    placeholder="name@example.com"
                  />
                  <label for="floatingInput" class="text-gray-700">
                    www.linkedin.com/in/hdj{" "}
                  </label>
                </div>
              </div>
              {/* Street Address */}
              <div className="md:w-1/2">
                <p>Street Address</p>
                <div class="form-floating mb-3 w-full">
                  <input {...register("streetAddress", { required: true })}
                    type="text"
                    class="form-control
       block
       w-full
       px-3
       py-1.5
       text-base
       font-normal
       text-gray-700
       bg-white bg-clip-padding
       border border-solid border-gray-300
       rounded
       transition
       ease-in-out
       m-0
       focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    id="floatingInput"
                    placeholder="name@example.com"
                  />
                  <label for="floatingInput" class="text-gray-700">
                    www.github.com/hdj
                  </label>
                </div>
              </div>
            </div>
          </div>
          {/* Company BIO */}
          
          <div class="flex">
            <div className="md:flex w-full gap-5">
              <div className=" w-full">
                <p> Company Bio</p>
                <div class="form-floating mb-3 w-full">
                  {/*  Zip Code */}
                  <textarea {...register("companyBio", { required: true })}
                    class=" block w-full px-3 py-1.5 text-base font-normal text-gray-700  bg-white bg-clip-padding border border-solid order-gray-300 rounded transition ease-in-out h-44 m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    id="floatingInput"
                    placeholder="Company Bio"
                  ></textarea>
                </div>
              </div>
            </div>
          </div>

        </div>
        <div className="flex justify-center my-3">
          <button className="bg-blue-400 hover:bg-blue-500 text-white px-12 rounded-md py-3">
            Update
          </button>
        </div>
      </form>
    </div>
  );
};

export default MyProfile;
