import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Keyboard, Navigation } from "swiper";
import Testimonial from "./Testimonial";

const ArrOfTestimonials = [
  {
    id: 1,
    name: "Julian Wan",
    designation: "Designer",
    image:
      "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",
    description:
      "Whether you’re shopping for the best type of hiking boots, interior decorating tips, or a new favorite restaurant, chances are you’ll turn to review sites to find the option with the most 5-star reviews and customer recommendations",
  },

  {
    id: 2,
    name: "Alexender Hipp",
    designation: "Engineer",
    image:
      "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1780&q=80",
    description:
      "Getting the coveted high-five in the hallway from an influencer is impressive in its own right. But what’s remarkable—and where you ought to focus your outreach efforts—is getting press from influencers in your market",
  },

  {
    id: 3,
    name: "Alex Supran",
    designation: "Doctor",
    image:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",
    description:
      "Using a copywriting formula like Before-After-Bridge (BAB), you can show readers where a customer was before they made a purchase, where they are now, after making a purchase, and bridge the gap using your product or service",
  },

  {
    id: 4,
    name: "Julian Wan",
    designation: "Designer",
    image:
      "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",
    description:
      "Whether you’re shopping for the best type of hiking boots, interior decorating tips, or a new favorite restaurant, chances are you’ll turn to review sites to find the option with the most 5-star reviews and customer recommendations",
  },

  {
    id: 5,
    name: "Alexender Hipp",
    designation: "Engineer",
    image:
      "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1780&q=80",
    description:
      "Getting the coveted high-five in the hallway from an influencer is impressive in its own right. But what’s remarkable—and where you ought to focus your outreach efforts—is getting press from influencers in your market",
  },

  {
    id: 6,
    name: "Alex Supran",
    designation: "Doctor",
    image:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",
    description:
      "Using a copywriting formula like Before-After-Bridge (BAB), you can show readers where a customer was before they made a purchase, where they are now, after making a purchase, and bridge the gap using your product or service",
  },
];

const Testimonials = () => {
  return (
    <div>
      <section className="text-gray-600 w-full body-font">
        <div className=" px-5 py-24 mx-auto">
          <h1 className="text-3xl font-semibold  text-gray-900  text-center">
            Testimonials
          </h1>
          <h4 className="text-black text-center mt-2">
            See now What's our client say
          </h4>
          <div className="flex flex-wrap -m-4 mt-6">
            <Swiper
              slidesPerView={1}
              spaceBetween={30}
              navigation={true}
              keyboard={true}
              modules={[Navigation, Keyboard]}
              //Responsive breakpoints
              breakpoints={{
                340: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                540: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                1024: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                1400: {
                  slidesPerView: 3,
                  spaceBetween: 30,
                },
              }}
              className="mySwiper"
            >
              {ArrOfTestimonials.map((TestimonialData, index) => (
                <SwiperSlide key={index}>
                  <Testimonial
                    key={TestimonialData.id}
                    TestimonialData={TestimonialData}
                  ></Testimonial>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;