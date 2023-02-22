import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { BiArrowFromBottom, BiArrowFromTop } from "react-icons/bi";
import fetchData from "../../../../../api/fetchData";
import { AuthContext } from "../../../../AuthProvider/AuthProvider";

const EditEmployer = () => {
  const { user, token } = useContext(AuthContext);
  const [userData, setUserData] = useState({});
  const [updateLoading, setupdateLoading] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");
  const imageRef = useRef();
  console.log(user);
  useEffect(() => {
    if (user?.email)
      fetchData
        .get(`/user?email=${user?.email}`)
        .then((response) => setUserData(response.data));
  }, [user?.email]);

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      fullName: userData.fullName,
      email: userData.email,

      Company_Bio: userData.Company_Bio,
      address: {
        city: userData.address?.city,
        country: userData.address?.country,
        postal: userData.address?.postal,
        street: userData.address?.street,
      },

      founded: userData.founded,
      phoneNumber: userData.phoneNumber,
      social: {
        github: userData.social?.github,
        facebook: userData.social?.facebook,
        twitter: userData.social?.twitter,
        linkedin: userData.social?.linkedin,
      },
      website: userData.website,
    },
   
  });

  const handleUpdateEmployer = (data) => {
    setupdateLoading(true);
    const updateData = {
      fullName: data.compnayName,
      email: userData.email,
      address: {
        city: data?.city,
        country: data?.country,
        postal: data?.zipCode,
        street: data?.streetAddress,
      },
      phoneNumber: data?.phoneNumber,
      team: data?.teamSize,
      social: {
        github: data?.github,
        facebook: data?.facebook,
        twitter: data?.twitter,
        linkedin: data?.linkedin,
      },
      website: data?.website,
      Company_Bio: data?.companyBio,
      founded: data?.established,
    };
    fetchData
      .put(`/employ?email=${user.email}`, updateData, {
        headers: {
          Authorization: `Bearer ${user?.accessToken}`,
        },
      })
      .then((response) => {
        console.log(response.data);
        setupdateLoading(false);

        toast.success("Updated!");
      });
  };

  return (
    <div>
      <div className="bg-white  md:p-12">
        <form
          onSubmit={handleSubmit(handleUpdateEmployer)}
          className="mx-8 p-5  w-full"
        >
          {/* Company Name */}
          <div class="flex">
            <div className="md:flex w-full gap-5">
              <div className="md:w-1/2">
                <p>Name</p>
                <div class="form-floating mb-3 w-full">
                  <input
                    defaultValue={userData.fullName}
                    {...register("compnayName", { required: false })}
                    type="text"
                    class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    id="floatingInput"
                    placeholder="Name"
                  />
                  <label for="floatingInput" class="text-gray-700">
                    Name{" "}
                  </label>
                </div>
              </div>
              {/* Email address */}
              <div className="md:w-1/2">
                <p>Email address </p>
                <div class="form-floating mb-3 w-full">
                  <input
                    defaultValue={user.email}
                    disabled
                    {...register("emailAddress", { required: false })}
                    type="email"
                    class="form-control block w-full cursor-not-allowed disabled px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
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
                  <input
                    defaultValue={userData.phoneNumber}
                    {...register("phoneNumber", { required: false })}
                    type="tel"
                    class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
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
                  <input
                    defaultValue={userData.website}
                    {...register("website", { required: false })}
                    type="url"
                    class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
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
                  <input
                    {...register("established", { required: false })}
                    type="date"
                    class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    id="floatingInput"
                    placeholder=""
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
                      <select
                        defaultValue={userData.teamSize}
                        {...register("teamSize", { required: false })}
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
            <div class="flex">
              <div className="md:flex w-full gap-5">
                <div className="md:w-1/2">
                  <p>Facebook</p>
                  <div class="form-floating mb-3 w-full">
                    {/* Twitter */}
                    <input
                      defaultValue={userData.social?.facebook}
                      {...register("facebook", { required: false })}
                      type="url"
                      class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
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
                    <input
                      defaultValue={userData.social?.twitter}
                      {...register("twitter", { required: false })}
                      type="url"
                      class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
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
            {/* Linkedin	github*/}
            <div class="flex">
              <div className="md:flex w-full gap-5">
                <div className="md:w-1/2">
                  <p>Linkedin</p>
                  <div class="form-floating mb-3 w-full">
                    {/* Linkedin */}
                    <input
                      defaultValue={userData.social?.linkedin}
                      {...register("linkedin", { required: false })}
                      type="url"
                      class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
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
                    <input
                      defaultValue={userData.social?.github}
                      {...register("github", { required: false })}
                      type="url"
                      class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
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
                    <input
                      defaultValue={userData.address?.country}
                      {...register("country", { required: false })}
                      type="text"
                      class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
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
                    <input
                      defaultValue={userData.address?.city}
                      {...register("city", { required: false })}
                      type="text"
                      class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
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
                    <input
                      defaultValue={userData.address?.postal}
                      {...register("zipCode", { required: false })}
                      type="number"
                      class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
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
                    <input
                      defaultValue={userData.address?.street}
                      {...register("streetAddress", { required: false })}
                      type="text"
                      class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
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
                    <textarea
                      defaultValue={userData.Company_Bio}
                      {...register("companyBio", { required: false })}
                      class=" block w-full px-3 py-1.5 text-base font-normal text-gray-700	bg-white bg-clip-padding border border-solid order-gray-300 rounded transition ease-in-out h-44 m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                      id="floatingInput"
                      placeholder="Company Bio"
                    >
                      {userData.Company_Bio}
                    </textarea>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center my-3">
            <button className="btn_primary">
              {updateLoading ? "Updating..." : "Update"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditEmployer;
