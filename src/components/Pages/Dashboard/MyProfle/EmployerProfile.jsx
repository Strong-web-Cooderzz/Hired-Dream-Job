import axios from "axios";
import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { BiArrowFromBottom, BiArrowFromTop } from "react-icons/bi";
import fetchData from "../../../../api/fetchData";
import { AuthContext } from "../../../AuthProvider/AuthProvider";

const EmployerProfile = () => {
  const { user, token } = useContext(AuthContext);
  const [userData, setUserData] = useState({});
  console.log(userData);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/user?email=${user?.email}`)
      .then((response) => {
        setUserData(response.data);
      });
  }, []);

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
    const formData = new FormData();
    formData.append("file", image);
    formData.append("upload_preset", "hired-dream-job");
    formData.append("cloud_name", "dcckbmhft");

    const url = `https://api.cloudinary.com/v1_1/dcckbmhft/image/upload`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imageData) => {
        const imageUrl = imageData.url;
        const updateData = {
          fullName: data.compnayName,
          photo: imageUrl,
          address: {
            city: data.city,
            country: data.country,
            postal: data.zipCode,
            street: data.streetAddress,
          },
          phoneNumber: data.phoneNumber,
          team: data.teamSize,
          social: {
            github: data.github,
            facebook: data.facebook,
            twitter: data.twitter,
            linkedin: data.linkedin,
          },
          website: data.website,
          Company_Bio: data.companyBio,
          founded: data.established,
        };
        if (imageUrl) {
          fetchData
            .put("/employ", updateData, {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            })
            .then((response) => {
              console.log(response.data);
              reset();
              toast.success("Updated!");
            });
        }
      });
  };

  return (
    <div className="w-full text-gray-700 h-full bg-gray-100 md:px-8">
     
     <h3 className="p-8 text-xl">My Profile</h3>
      <div className="bg-white md:px-8 px-4 rounded-md space-y-4">
      <form
        onSubmit={handleSubmit(handleUpdateEmployer)}
        className=""
      >
        
        <div>
          {/* Photo Update */}
          <div className="flex relative items-center gap-2">
            <div className="mb-3 w-full flex justify-center">
              <label
                htmlFor="formFile"
                className="form-label overflow-hidden md:w-1/2 relative mx-auto inline-block mb-2 text-gray-700"
              >
                <div className="w-full flex justify-center ">
                  <img
                    className=" h-24 w-24 border-2 rounded-full my-2"
                    src={userData.photo}
                    alt=""
                  />
                </div>
                <input
                  accept="image/*"
                  type="file"
                  name="file_upload"
                  {...register("image", { required: true })}
                  className="form-control w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white border border-gray-300  rounded transition ease-in-out  m-0 "
                  id="formFile"
                />
                <div className="flex justify-center">
                  <button className="btn_primary justify-center h-10 my-2">
                    Update
                  </button>
                </div>
              </label>
            </div>
          </div>
        </div>
      </form>
        {/* Company Name */}
        <div className="flex ">
          <div className="flex w-full gap-5 sm:border-b flex-col sm:flex-row justify-center   sm:justify-around">
            <div className=" flex gap-4 items-center pb-1 shadow sm:shadow-none justify-between font-bold">
              <p className="form-floating ">Company name:</p>
              <p className="form-floating font-semibold">{userData.fullName}</p>
            </div>
            {/* Email address */}
            <div className="flex gap-4 items-center pb-1 shadow sm:shadow-none justify-between font-bold">
              <p className="form-floating ">Email address: </p>
               <p className="form-floating font-semibold">{userData.email}</p>
            </div>
          </div>
        </div>

        {/* Phone , Website */}
        <div className="flex ">
          <div className="flex w-full gap-5 sm:border-b flex-col sm:flex-row justify-center   sm:justify-around">
            <div className=" flex gap-4 items-center pb-1 shadow sm:shadow-none justify-between font-bold">
              <p className="form-floating ">Phone Number:</p>
              <p className="form-floating font-semibold">{userData.phoneNumber ? userData.phoneNumber : 'No Number'}</p>
            </div>
            {/* Email address */}
            <div className="flex gap-4 items-center pb-1 shadow sm:shadow-none justify-between font-bold">
              <p className="form-floating ">Web Site: </p>
               <p className="form-floating font-semibold">{userData.website? userData.website : 'No Website'}</p>
            </div>
          </div>
        </div>

        {/* Est. Since , Team Size */}

        <div className="flex ">
          <div className="flex w-full gap-5 sm:border-b flex-col sm:flex-row justify-center   sm:justify-around">
            <div className=" flex gap-4 items-center pb-1 shadow sm:shadow-none justify-between font-bold">
              <p className="form-floating ">Phone Number:</p>
              <p className="form-floating font-semibold">{userData.phoneNumber ? userData.phoneNumber : 'No Number'}</p>
            </div>
            {/* Email address */}
            <div className="flex gap-4 items-center pb-1 shadow sm:shadow-none justify-between font-bold">
              <p className="form-floating ">Web Site: </p>
               <p className="form-floating font-semibold">{userData.website? userData.website : 'No Website'}</p>
            </div>
          </div>
        </div>

        
        <div className="flex">
          <div className="md:flex w-full gap-5">
            <div className="md:w-1/2">
              <p>Est. Since</p>
              <div className="form-floating mb-3 w-full">
                {/* Est. Since */}
                <input
                  {...register("established", { required: true })}
                  type="date"
                  className="form-control
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
                  placeholder=""
                />
                <label htmlFor="floatingInput" className="text-gray-700">
                  06.04.2023{" "}
                </label>
              </div>
            </div>
            {/* Team Size */}
            <div className="md:w-1/2">
              <p>Team Size</p>
              <div className="form-floating mb-3 w-full">
                <div className="">
                  <div className="mb-3 ">
                    <select
                      {...register("teamSize", { required: true })}
                      className="form-select py-4  form-select-lg mb-3
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
                      <option value="50-100" selected>
                        50-100
                      </option>
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
          <div className="flex">
            <div className="md:flex w-full gap-5">
              <div className="md:w-1/2">
                <p>Facebook</p>
                <div className="form-floating mb-3 w-full">
                  {/* Twitter */}
                  <input
                    {...register("facebook", { required: true })}
                    type="url"
                    className="form-control
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
                  <label htmlFor="floatingInput" className="text-gray-700">
                    www.facebook.com/hdj{" "}
                  </label>
                </div>
              </div>
              {/* Twitter */}
              <div className="md:w-1/2">
                <p>Twitter</p>
                <div className="form-floating mb-3 w-full">
                  <input
                    {...register("twitter", { required: true })}
                    type="url"
                    className="form-control
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
                  <label htmlFor="floatingInput" className="text-gray-700">
                    www.twitter.com/hdjs
                  </label>
                </div>
              </div>
            </div>
          </div>
          {/* Linkedin  github*/}
          <div className="flex">
            <div className="md:flex w-full gap-5">
              <div className="md:w-1/2">
                <p>Linkedin</p>
                <div className="form-floating mb-3 w-full">
                  {/* Linkedin */}
                  <input
                    {...register("linkedin", { required: true })}
                    type="url"
                    className="form-control
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
                  <label htmlFor="floatingInput" className="text-gray-700">
                    www.linkedin.com/in/hdj{" "}
                  </label>
                </div>
              </div>
              {/* Github */}
              <div className="md:w-1/2">
                <p>Github</p>
                <div className="form-floating mb-3 w-full">
                  <input
                    {...register("github", { required: true })}
                    type="url"
                    className="form-control
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
                  <label htmlFor="floatingInput" className="text-gray-700">
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
          <div className="flex">
            <div className="md:flex w-full gap-5">
              <div className="md:w-1/2">
                <p>Country</p>
                <div className="form-floating mb-3 w-full">
                  {/* Country */}
                  <input
                    {...register("country", { required: true })}
                    type="text"
                    className="form-control
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
                  <label htmlFor="floatingInput" className="text-gray-700">
                    US{" "}
                  </label>
                </div>
              </div>
              {/* City */}
              <div className="md:w-1/2">
                <p>City</p>
                <div className="form-floating mb-3 w-full">
                  <input
                    {...register("city", { required: true })}
                    type="text"
                    className="form-control
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
                  <label htmlFor="floatingInput" className="text-gray-700">
                    New York
                  </label>
                </div>
              </div>
            </div>
          </div>
          {/* Zip Code, Street address*/}
          <div className="flex">
            <div className="md:flex w-full gap-5">
              <div className="md:w-1/2">
                <p> Zip Code</p>
                <div className="form-floating mb-3 w-full">
                  {/*  Zip Code */}
                  <input
                    {...register("zipCode", { required: true })}
                    type="number"
                    className="form-control
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
                  <label htmlFor="floatingInput" className="text-gray-700">
                    www.linkedin.com/in/hdj{" "}
                  </label>
                </div>
              </div>
              {/* Street Address */}
              <div className="md:w-1/2">
                <p>Street Address</p>
                <div className="form-floating mb-3 w-full">
                  <input
                    {...register("streetAddress", { required: true })}
                    type="text"
                    className="form-control
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
                  <label htmlFor="floatingInput" className="text-gray-700">
                    www.github.com/hdj
                  </label>
                </div>
              </div>
            </div>
          </div>
          {/* Company BIO */}

          <div className="flex">
            <div className="md:flex w-full gap-5">
              <div className=" w-full">
                <p> Company Bio</p>
                <div className="form-floating mb-3 w-full">
                  {/*  Zip Code */}
                  <textarea
                    {...register("companyBio", { required: true })}
                    className=" block w-full px-3 py-1.5 text-base font-normal text-gray-700  bg-white bg-clip-padding border border-solid order-gray-300 rounded transition ease-in-out h-44 m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
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
      </div>
    </div>
  );
};

export default EmployerProfile;
