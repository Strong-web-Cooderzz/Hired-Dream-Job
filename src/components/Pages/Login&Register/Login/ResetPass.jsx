import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../AuthProvider/AuthProvider";

const ResetPass = () => {
  const { changePass } = useContext(AuthContext);
  const handlePass = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    // console.log(email);
    changePass(email)
      .then((result) => console.log("Email sent"))
      .catch((err) => console.error(err));
  };
  return (
    <div>
      <h1 className="text-center text-4xl font-semibold mt-10">
        Reset Password
      </h1>
      <form
        onSubmit={handlePass}
        className="flex justify-center items-center mt-10"
      >
        <input
          type="email"
          className="border border-blue-500 rounded-l-md focus:outline-none p-1 text-2xl"
          size="25"
          name="email"
          placeholder="Email Here"
        />
        <button
          type="submit"
          className="text-xl py-2 px-3 bg-blue-500 hover:bg-blue-600/90 text-white rounded-md rounded-tl-none rounded-bl-none"
        >
          Submit
        </button>
      </form>
      <div className="flex justify-center mt-10">
        <Link
          to="/"
          className="bg-blue-500 hover:bg-blue-600 text-xl font-semibold text-white py-3 px-4 rounded-md"
        >
          Back Home
        </Link>
      </div>
    </div>
  );
};

export default ResetPass;
