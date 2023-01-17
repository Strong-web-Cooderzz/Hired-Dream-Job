import React from "react";
import { Outlet } from "react-router-dom";
import SingleJobs from "../components/Pages/FindJob/SingleJobs";
import Footer from "../components/shared/Footer/Footer";
import Navbar from "../components/shared/Navbar/Navbar";

const Main = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};
export default Main;
