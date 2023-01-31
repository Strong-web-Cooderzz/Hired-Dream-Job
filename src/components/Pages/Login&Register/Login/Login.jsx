import {
  FacebookAuthProvider,
  GithubAuthProvider,
  GoogleAuthProvider,
} from "firebase/auth";
import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { BsFacebook, BsGithub, BsGoogle } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../AuthProvider/AuthProvider";

export default function Login() {
  const navigate = useNavigate()
  const { FacebookSignIn, GoogleSignIn, GithubSignIn, Login } =
    useContext(AuthContext);
  const FacebookProvider = new FacebookAuthProvider();
  const GoogleProvider = new GoogleAuthProvider();
  const GithubProvider = new GithubAuthProvider();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const facebookLogin = () => {
    FacebookSignIn(FacebookProvider)
      .then((result) => {
        console.log(result);
      })
      .catch((err) => console.error(err));
  };

  const googleLogin = () => {
    GoogleSignIn(GoogleProvider)
      .then((result) => {
        console.log(result);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const GithubLogin = () => {
    GithubSignIn(GithubProvider)
      .then((result) => {
        console.log(result);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const onSubmit = (data) => {
    // console.log(data);
    const { email, password } = data;
    Login(email, password)
      .then((result) => {
        console.log(result.user);
        reset();
        navigate('/')
      })
      .catch((err) => console.error(err));
  };

  return (
    <section className="h-screen max-w-[85%] mx-auto">
      <div className="px-6 h-full text-gray-800">
        <div className="flex xl:justify-center lg:justify-between justify-center items-center flex-wrap h-full g-6">
          <div className="grow-0 shrink-1 md:shrink-0 basis-auto xl:w-6/12 lg:w-6/12 md:w-9/12 mb-12 md:mb-0">
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
              className="w-full"
              alt="Sample image"
            />
          </div>
          <div className="xl:ml-20 xl:w-5/12 lg:w-5/12 md:w-8/12 mb-12 md:mb-0">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="flex flex-row items-center justify-center lg:justify-start">
                <p className="text-xl mb-0 mr-4 font-bold">Login in with</p>
                <button
                  type="button"
                  data-mdb-ripple="true"
                  data-mdb-ripple-color="light"
                  className="inline-block p-3 bg-blue-500 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-blue-400 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out mx-1"
                  onClick={googleLogin}
                >
                  <BsGoogle className="text-lg" />
                </button>

                <button
                  type="button"
                  data-mdb-ripple="true"
                  data-mdb-ripple-color="light"
                  className="inline-block p-3 bg-blue-500 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-blue-400 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out mx-1"
                  onClick={GithubLogin}
                >
                  <BsGithub className="text-lg" />
                </button>

                <button
                  type="button"
                  data-mdb-ripple="true"
                  data-mdb-ripple-color="light"
                  className="inline-block p-3 bg-blue-500 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-blue-400 hover:shadow-lg  focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out mx-1"
                  onClick={facebookLogin}
                >
                  <BsFacebook className="text-lg" />
                </button>
              </div>

              <div className="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5">
                <p className="text-center font-semibold mx-4 mb-0">Or</p>
              </div>

              <div className="mb-6">
                <input
                  type="email"
                  className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  id="email"
                  placeholder="Email address"
                  {...register("email", {
                    required: "Email address is require",
                  })}
                />
                {errors.email && <span>{errors.email?.message}</span>}
              </div>

              <div className="mb-2">
                <input
                  type="password"
                  className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  id="password"
                  placeholder="Password"
                  {...register("password", {
                    required: "Password is require",
                  })}
                />
                {errors.password && <span>{errors.password?.message}</span>}
              </div>

              <div className="flex justify-between items-center mb-6">
                <Link
                  to="/resetPass"
                  className="text-gray-800 hover:text-blue-500 text-sm"
                >
                  Forgot password?
                </Link>
              </div>

              <div className="text-center lg:text-left">
                <button
                  type="submit"
                  className="block w-full md:w-40 md:inline-block px-7 py-3 bg-blue-500 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-600 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                >
                  Login
                </button>
                <p className="text-sm mt-2 pt-1 mb-0">
                  Don't have an account?
                  <Link
                    to="/register"
                    className="text-blue-400 hover:text-blue-700 ml-2 transition duration-200 ease-in-out"
                  >
                    Register
                  </Link>
									{" "}here.
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
