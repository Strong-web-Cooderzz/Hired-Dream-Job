import React from "react";
import FeaturedCities from "./FeaturedCities/FeaturedCities";
import Articles from "./Articles/Articles";
import Hero from "./Hero/Hero";
import JobFeauters from "./JobFeatures/JobFeatures/JobFeauters";
import JobCategory from "./JobCategory/JobCategory";
import Testimonial from "../Testimonial/Testimonial";
import Testimonials from "../Testimonial/Testimonials";

const Home = () => {
  return (
    <div>
      <Hero />
      <JobCategory />
      <JobFeauters> </JobFeauters>
      <Articles></Articles>
      <FeaturedCities />
      <Testimonials />
    </div>
  );
};

export default Home;
