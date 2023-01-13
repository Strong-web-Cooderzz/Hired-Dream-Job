import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../AuthProvider/AuthProvider";

const Register = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm();
  const { createAccount, user, loading } = useContext(AuthContext);
  const onSubmit = (data) => {
    console.log(data);
    const { email, password } = data;
    createAccount(email, password)
      .then((result) => {
        console.log(result);
        reset();
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <>
      <div className="container mx-auto">
        <div className="flex justify-center px-6 my-12">
          <div className="w-full xl:w-3/4 lg:w-11/12 flex">
            <div className="w-full h-auto bg-gray-400 hidden lg:block lg:w-5/12 bg-cover rounded-l-lg bg-[url('https://img.freepik.com/free-vector/sign-concept-illustration_114360-125.jpg?w=740&t=st=1673543146~exp=1673543746~hmac=e420d0300850c37da6633d8c37aa9aa7d99132b9d171afddcf07600e0c43180d')]"></div>
            <div className="w-full lg:w-7/12 bg-white p-5 rounded-lg lg:rounded-l-none">
              <h3 className="pt-4 text-2xl text-center font-semibold">
                Create an Account!
              </h3>
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="px-8 pt-6 pb-8 mb-4 bg-white rounded"
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
