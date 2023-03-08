import { signInWithCustomToken } from "firebase/auth";
import React, { useContext, useEffect, useState } from "react";
import { set, useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import fetchData from "../../../../api/fetchData";
import Lottie from "lottie-react";
import AuthProvider, { AuthContext } from "../../../AuthProvider/AuthProvider";
import registerForm from '../../../../assets/Loatte/register.json'
import registerCompleted from '../../../../assets/Loatte/account-created.json'
import { FaBullseye } from "react-icons/fa";

const Register = () => {
  const [registerLoading, setRegisterLoading] = useState(false)
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm();

  const imgbbAPIKEY = "baca7cebf7d1365bf97c10bb391342f9";
  const navigate = useNavigate();

  const { auth, setDbUser, createAccount, user, loading, updateUserProfile } =
    useContext(AuthContext);

  // I, Abid Hasan removed function that sends ip address
  // we don't need it. Cause express can do that. So it will improve user experience

  const onSubmit = (data) => {
    setRegisterLoading(true)
    const image = data.image[0];
    const formData = new FormData();
    formData.append("file", image);
    formData.append("upload_preset", "hired-dream-job");
    formData.append("cloud_name", "dcckbmhft");

    // const url = `https://api.cloudinary.com/v1_1/dcckbmhft/image/upload`;
    fetch(`https://api.imgbb.com/1/upload?key=111086ae671f3d002b28cbaeab0c9580`, {
      method: "POST",
      body: formData,
    })
      .then((res) => res?.json())
      .then((imageData) => {
        console.log(imageData);
        const userData = {
          email: data.email,
          fullName: data.firstName + " " + data.lastName,
          type: data.type,
          photo: imageData.url,
          password: data.password,
        };
        fetchData.post("/register", userData).then((response) => {
          const user = { ...response.data };
          user.token = "";
          setDbUser(user);
          signInWithCustomToken(auth, response.data.token)
            .then((userCredential) => {
              console.log(userCredential);
              toast(<Lottie animationData={registerCompleted} loop={false} />);
              setRegisterLoading(false)
              if (data.type === "Candidate") {
                navigate("/dashboard/profile");
              } else {
                navigate("/dashboard/profile");
              }
            })
            .catch((err) => {
              setRegisterLoading(false)
              console.log(err)
            });
          console.log(data);
        });
      });
  };

  return (
    <>
      <div className="container mx-auto">
        <div className="flex justify-center px-6 my-12">
          <div className="w-full xl:w-3/4 lg:w-11/12 flex">
            <div className="w-full h-auto hidden lg:block lg:w-5/12 bg-cover rounded-l-lg ">
              <div className="flex items-center w-full h-full">
                <Lottie className="w-full" animationData={registerForm} loop={true} />
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
                    {registerLoading ? <>Account Creating... </> : 'Sign Up'}
                  </button>
                </div>
                <hr className="mb-6 border-t" />
                <div className="text-center">
                  Already have an account? {" "}
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
