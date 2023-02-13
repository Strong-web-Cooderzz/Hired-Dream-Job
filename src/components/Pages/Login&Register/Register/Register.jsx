import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { set, useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import AuthProvider, { AuthContext } from "../../../AuthProvider/AuthProvider";

const Register = () => {

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm();

 //creating IP state
 const [ip,setIP] = useState('');
      
 //creating function to load ip address from the API
 const getData = async()=>{
     const res = await axios.get('https://api.ipdata.co/?api-key=965b4d07f1cd5df803c1a10e449db03ebb2a71222da2e643919112ba')
     console.log(res.data);
     setIP(res.data.ip)
 }
 useEffect(()=>{
   //passing getData method to the lifecycle method
   getData()
},[])

console.log(ip)

  const imgbbAPIKEY = "baca7cebf7d1365bf97c10bb391342f9";
  const navigate = useNavigate();

  const { createAccount, user, loading, updateUserProfile } =
    useContext(AuthContext);


  const onSubmit = (data) => {
    const image = data.image[0];
    const formData = new FormData();
    formData.append("file", image)
    formData.append("upload_preset", "hired-dream-job")
    formData.append("cloud_name","dcckbmhft")


    const url = `https://api.cloudinary.com/v1_1/dcckbmhft/image/upload`;
    const { email, password } = data;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imageData) => {
        console.log(imageData);
        createAccount(email, password)
          .then((result) => {
            const displayName = data.firstName +' '+ data.lastName;
            const photoURL = imageData.url;
            const info = {
              displayName,
              photoURL,
            };
            updateUserProfile(info)
              .then((result) => {
                const userData = {
                  'email':data.email,
                  'fullName': data.firstName + ' ' + data.lastName,
                  'type':data.type,
                  'photo':imageData.url,
                  'ip':ip
                }
                fetch('https://hired-dream-job-server-sparmankhan.vercel.app/user',{
                  method:'POST',
                  headers:{
                    'content-type':'application/json'
                  },
                  body: JSON.stringify(userData)
                })
                .then(res=>res.json())
                .then(data=>{
                  console.log(data);
                   reset(); 
                   
                  })
                  toast.success("Successfully Login");
               if (data.type === "Candidate") {
                  navigate("/accountClient");
                } else {
                  navigate("/accountAgency");
                }
              })
              .catch((err) => console.error(err));
          })

          .catch((err) => {
            console.error(err);
          });
      });
  };

   
  return (
    <>
      <div className="container mx-auto">
        <div className="flex justify-center px-6 my-12">
          <div className="w-full xl:w-3/4 lg:w-11/12 flex">
            <div className="w-full h-auto hidden lg:block lg:w-5/12 bg-cover rounded-l-lg ">
              <div className="flex items-center h-full">
                <img
                  src="https://img.freepik.com/free-vector/sign-concept-illustration_114360-125.jpg?w=740&t=st=1673543146~exp=1673543746~hmac=e420d0300850c37da6633d8c37aa9aa7d99132b9d171afddcf07600e0c43180d"
                  alt=""
                />
              </div>
            </div>
            <div className="w-full lg:w-7/12 bg-white lg:p-5 rounded-lg lg:rounded-l-none">
              <h3 className="pt-4 text-2xl text-center font-semibold">
                Create an Account!
              </h3>
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="lg:px-8 lg:pt-6 lg:pb-8 lg:mb-4 bg-white rounded"
              >
                <div className="mb-4 md:flex md:justify-between">
                  <div className="mb-4 md:mr-2 md:mb-0 w-full">
                    <label
                      className="block mb-2 text-sm font-bold text-gray-700"
                      htmlFor="firstName"
                    >
                      First Name
                    </label>
                    <input
                      className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      {...register("firstName", {
                        required: "First Name Is Required",
                      })}
                      id="firstName"
                      type="text"
                      placeholder="First Name"
                    />
                    {errors.firstName && (
                      <span>{errors.firstName?.message}</span>
                    )}
                  </div>
                  <div className="md:ml-2  w-full">
                    <label
                      className="block mb-2 text-sm font-bold text-gray-700"
                      htmlFor="lastName"
                    >
                      Last Name
                    </label>
                    <input
                      className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      {...register("lastName", {
                        required: "Last Name Is Required",
                      })}
                      id="lastName"
                      type="text"
                      placeholder="Last Name"
                    />
                    {errors.lastName && <span>{errors.lastName?.message}</span>}
                  </div>
                </div>

                <div className="mb-4">
                  <label
                    className="block mb-2 text-sm font-bold text-gray-700"
                    htmlFor="email"
                  >
                    Email
                  </label>
                  <input
                    className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    {...register("email", {
                      required: "Email Is Required",
                    })}
                    id="email"
                    type="email"
                    placeholder="Email"
                  />
                  {errors.email && <span>{errors.email?.message}</span>}
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="photo"
                    className="block mb-2 text-sm font-bold text-gray-700"
                  >
                    Choose your Photo
                  </label>
                  <label>
                    <input
                      type="file"
                      id="photo"
                      accept="image/*"
                      {...register("image", {
                        required: "Photo Is Required",
                      })}
                      className="text-sm text-gray-700 file:mr-5 file:py-2 file:px-6 file:rounded-lg file:border-0 file:text-sm file:font-medium file:bg-blue-50 file:text-blue-500 hover:file:cursor-pointer hover:file:bg-amber-50 hover:file:text-amber-700 w-full bg-gray-50 rounded-lg border shadow"
                    />
                    {errors.image && <span>{errors.image?.message}</span>}
                  </label>
                </div>

                <div className="mb-4">
                  <div className="flex border rounded-lg overflow-hidden select-none w-full">
                    <div className="py-3 my-auto px-5 bg-blue-500 text-white text-sm font-semibold mr-3">
                      Account Type
                    </div>
                    <label className="flex radio p-2 cursor-pointer">
                      <input
                        className="my-auto transform scale-125"
                        type="radio"
                        {...register("type", {
                          required: "Account Type Is Required",
                        })}
                        value="Agency"
                      />
                      <div className="px-2">Agency</div>
                    </label>

                    <label className="flex radio p-2 cursor-pointer">
                      <input
                        className="my-auto transform scale-125"
                        type="radio"
                        {...register("type", {
                          required: "Account Type Is Required",
                        })}
                        value="Candidate"
                      />
                      <div className="title px-2">Candidate</div>
                    </label>
                  </div>
                </div>

                <div className="mb-4 md:flex md:justify-between">
                  <div className="mb-4 md:mr-2 md:mb-0 w-full">
                    <label
                      className="block mb-2 text-sm font-bold text-gray-700"
                      htmlFor="password"
                    >
                      Password
                    </label>
                    <input
                      className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      {...register("password", {
                        required: "Password Is Required",
                      })}
                      id="password"
                      type="password"
                      placeholder="Password"
                    />
                    {errors.email && <span>{errors.password?.message}</span>}
                  </div>
                  <div className="md:ml-2 w-full">
                    <label
                      className="block mb-2 text-sm font-bold text-gray-700"
                      htmlFor="c_password"
                    >
                      Confirm Password
                    </label>
                    <input
                      className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      {...register("c_password", {
                        required: "Confirm Password Is Required",
                        validate: (match) => {
                          if (watch("password") !== match) {
                            return "Passwords did not match";
                          }
                        },
                      })}
                      id="c_password"
                      type="password"
                      placeholder="Password"
                    />
                    {errors.c_password && (
                      <span>{errors.c_password?.message}</span>
                    )}
                  </div>
                </div>
                <div className="mb-6 text-center px-1">
                  <button
                    className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-600 focus:outline-none focus:shadow-outline"
                    type="submit"
                  >
                    Sign Up
                  </button>
                </div>
                <hr className="mb-6 border-t" />
                <div className="text-center">
                  Already have an account?
                  <Link
                    className="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
                    to="/login"
                  >
                    Login
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
