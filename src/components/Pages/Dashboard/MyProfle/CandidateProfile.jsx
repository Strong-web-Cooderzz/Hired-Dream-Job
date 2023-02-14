import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import makeAnimated from 'react-select/animated';
import { toast } from "react-hot-toast";
import CreatableSelect from 'react-select/creatable';

import { BiArrowFromBottom, BiArrowFromTop } from "react-icons/bi";
import Select from 'react-select';
import { AuthContext } from "../../../AuthProvider/AuthProvider";
import fetchData from "../../../../api/fetchData";

const CandidateProfile = () => {
  const [loading,setLoading] = useState(false)
  const { user,dbUser } = useContext(AuthContext);
  const animatedComponents = makeAnimated();
  const skillsOptions = [
    { value: 'HTML', label: 'HTML'},
    { value: 'CSS', label: 'CSS'},
    { value: 'Bootstrap', label: 'Bootstrap' },
    { value: 'Tailwind', label: 'Tailwind' },
    { value: 'Javascript', label: 'Javascript' },
    { value: 'React', label: 'React' },
    { value: 'NextJS', label: 'NextJS' },
    { value: 'Redux', label: 'Redux' },
    { value: 'NodeJS', label: 'NodeJS' },
    { value: 'Express', label: 'Express' },
    { value: 'Mongodb', label: 'Mongodb' },
    { value: 'MySQL', label: 'MySQL' },
  ];
  const [skills,setSkills] = useState([])

  const imgbbAPIKEY = "baca7cebf7d1365bf97c10bb391342f9";

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();
  const handleUpdateEmployer = (data) => {
    setLoading(true)
    console.log(data,skills);
    const image = data.image[0];
    const formData = new FormData()
    formData.append("file", image)
    formData.append("upload_preset", "hired-dream-job")
    formData.append("cloud_name","dcckbmhft")


    const url = `https://api.cloudinary.com/v1_1/dcckbmhft/image/upload`;
    fetch(url,{
      method:'POST',
      body: formData
    })
    .then(res=>res.json())
    .then(imageData=>{
      const imageUrl = imageData.url
      const updateData = {
        'photo':imageUrl,
					'address': {
						'Postal':data.zipCode,
						'Street': data.streetAddress,
						'City':data.city,
						'Country':data.country,
					},
					'social': {
						'github': data.github,
						'facebook':data.facebook,
						'twitter':data.twitter,
						'linkedin':data.linkedin,
					},
        'phoneNumber':data.phoneNumber,
        'expectedSalary': data.expectedSalary,
        'salary': data.salary,
        'rate':data.rate,
        'bio':data.candidateBio,
        'age':data.age,
        'education':data.education,
        'resumeUrl':data.resumeUrl,
        'skills':skills,
        'language':data.language,
        'experience':data.experience,
        'gender':data.gender,
        'Category':data.category
      }
      if(imageUrl){
					fetchData.put(`/user/${user.uid}`, updateData, {
						headers: {
							'Authorization': `Bearer ${user.accessToken}`
						}
						})
						.then(response=>{
							console.log(response.data);
							reset()
							setLoading(false)
							toast.success('Profile updated!')
						})
      }
    })
  };


  return (
    <div className="w-full text-gray-700 bg-white h-screen">
      <div className="mx-12 my-7">
        <h2 className="text-2xl font-semibold ">Employer Profile!</h2>
        <h3>Ready to jump back in?</h3>
      </div>
      <form
        onSubmit={handleSubmit(handleUpdateEmployer)}
        className="mx-8 p-5 w-full bg-gray-100  rounded-xl"
      >
        <h3>My Profile</h3>
        <div>
          <div class="flex relative items-center gap-2">
            <div class="mb-3 w-60 ">
              <label
                for="formFile"
                class="form-label overflow-hidden relative w-full inline-block mb-2 text-gray-700"
              >
                <div className="border border-dashed py-4 hover:border-black transition duration-300 border-blue-200">
                  <p className="flex flex-col justify-center items-center">
                    <BiArrowFromBottom className="text-3xl" />
                    Browse Logo{" "}
                  </p>
                </div>
                <input
                  accept="image/*"
                  type="file"
                  name="file_upload"
                  {...register("image", { required: true })}
                  class="form-control w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out hidden m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="formFile"
                />
              
              </label>
             
            </div>
            <p className="text-xs left-0 top-0 flex w-full">
              Max file size is 1MB, Minimum dimension: 330x300 And Suitable
              files are .jpg & .png
            </p>
          </div>
        </div>
        {/* Company Name */}
        <div class="flex">
          <div className="md:flex w-full gap-5">
            <div className="md:w-1/2">
              <p>Your Name</p>
              <div class="form-floating mb-3 w-full">
                <input defaultValue={dbUser?.fullName} {...register("candidateName", { required: true })}
                  type="text"
                  class="form-control
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
                <label for="floatingInput" class="text-gray-700">
                  Name
                </label>
              </div>
            </div>
            {/* Email address */}
            <div className="md:w-1/2">
              <p>Email address (can't be changed) </p>
              <div class="form-floating mb-3 w-full">
                <input disabled defaultValue={dbUser.email} {...register("emailAddress", { required: false })}
                  type="email"
                  class="form-control
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
                <label for="floatingInput" class="text-gray-700">
                  Email address
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
                <input {...register("phoneNumber", { required: true })}
                  type="number"
                  class="form-control
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
                <label for="floatingInput" class="text-gray-700">
                  1234567890{" "}
                </label>
              </div>
            </div>
            {/* Rate */}
            <div className="md:w-1/2">
              <p>Rate:</p>
              <div class="form-floating flex items-center mb-3 w-full">
              $
                <input {...register("rate", { required: true })}
                  type="number"
                  class="form-control
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
                />/hour
                <label for="floatingInput" class="text-gray-700">
              99 
                </label>
              </div>
            </div>
          </div>
        </div>
        {/*Experience*/}
        <div class="flex">
          <div className="md:flex w-full gap-5">
            <div className="md:w-1/2">
              <p>Experience</p>
              <div class="form-floating mb-3 w-full">
                {/*Experience */}
                <select
                        className="form-select appearance-none block w-full px-3 py-2.5 text-base font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                        aria-label="Default select example"
                        {...register("experience")}
                      >
                        <option defaultValue value="Fresher">
                         Fresher
                        </option>
                        <option defaultValue value="0-1">
                          0-2 Years
                        </option>
                        <option value="1-3">3-5 Years</option>
                        <option value="3-5">6-8 Years</option>
                        <option value="5-10">9-12 Years</option>
                      </select>
              </div>
            </div>
            {/* Age */}
            <div className="md:w-1/2">
              <p>Age</p>
              <div class="form-floating mb-3 w-full">
                <div class="">
                  <div class="mb-3 ">
                  <select
                        className="form-select appearance-none block w-full px-3 py-4 text-base font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                        aria-label="Default select example"
                        {...register("age")}
                      >
                        <option defaultValue value="0-1">
                          15-20 Years
                        </option>
                        <option value="21-24">21-24 Years</option>
                        <option value="25-28">25-28 Years</option>
                        <option value="28-35">28-35 Years</option>
                        <option value="35-50">35-50 Years</option>
                      </select>
                  </div>
                </div>
              </div>
            </div>


            {/* Gender */}
            <div className="md:w-1/2">
              <p>Gender</p>
              <div class="form-floating mb-3 w-full">
                <div class="">
                  <div class="mb-3 ">
                  <select
                        className="form-select appearance-none block w-full px-3 py-4 text-base font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                        aria-label="Default select example"
                        {...register("gender")}
                      >
                        <option defaultValue value="Male">
                        Male
                        </option>
                        <option value="Female">Female</option>
                        <option value="Others">Others</option>
                      </select>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
        </div>


        {/*Current Salary, Expected Salary*/}
        <div class="flex">
          <div className="md:flex w-full gap-5">
            <div className="md:w-1/2">
              <p>Current Salary (if have)</p>
              <div class="form-floating mb-3 w-full">
                {/*Current Salary*/}
                <select
                        className="form-select appearance-none block w-full px-3 py-2.5 text-base font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                        aria-label="Default select example"
                        {...register("salary")}
                      >
                        {/* Salary */}
                        <option defaultValue value="0">
                        0
                        </option>
                        <option defaultValue value="1K - 10K">
                        1K - 10K
                        </option>
                        <option value="11K - 15K">11K - 15K</option>
                        <option value="16K - 20K">16K - 20K</option>
                        <option value="21K - 30K">21K - 30K</option>
                        <option value="31K - 35K">31K - 35K</option>
                        <option value="36K - 40K">36K - 40K</option>
                      </select>
              </div>
            </div>
            {/* Expected Salary */}
            <div className="md:w-1/2">
              <p>Expected Salary</p>
              <div class="form-floating mb-3 w-full">
                <div class="">
                  <div class="mb-3 ">
                  <select
                        className="form-select appearance-none block w-full px-3 py-4 text-base font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                        aria-label="Default select example"
                        {...register("expectedSalary")}
                      >
                        {/* Salary */}
                        <option defaultValue value="1K - 10K">
                        1K - 10K
                        </option>
                        <option value="11K - 15K">11K - 15K</option>
                        <option value="16K - 20K">16K - 20K</option>
                        <option value="21K - 30K">21K - 30K</option>
                        <option value="21K - 30K">31K - 35K</option>
                        <option value="36K - 40K">36K - 40K</option>
                      </select>
                  </div>
                </div>
              </div>
            </div>


            {/* Education */}
            <div className="md:w-1/2">
              <p>Education</p>
              <div class="form-floating mb-3 w-full">
                <div class="">
                  <div class="mb-3 ">
                  <select
                        className="form-select appearance-none block w-full px-3 py-4 text-base font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                        aria-label="Default select example"
                        {...register("education")}
                      >
                        <option defaultValue value="Certificate">
                          Certificate
                        </option>
                        <option value="Associate Degree">Associate Degree</option>
                        <option value="Bachelor Degree">Bachelor Degree</option>
                        <option value="Master’s Degree">Master’s Degree</option>
                        <option value="Doctorate Degree">Doctorate Degree</option>
                       
                      </select>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
        </div>


        {/*Skills , */}
        <div class="flex">
          <div className=" w-full gap-5">
            <div className="md:">
              <p>Skills</p>
              <div class="form-floating mb-3 w-full">
                {/*Skills*/}
                <Select onChange={(e)=>setSkills(e)} className="w-full"
      closeMenuOnSelect={false}
      components={animatedComponents}
      isMulti
      isClearable
      options={skillsOptions}
    />
              </div>
            </div>
            


         
          </div>
          
        </div>
        {/*Resume Url , */}
        <div class="flex gap-1">
          <div className=" gap-5 w-full">
            <div className="md:w-full">
              <p>Resume Url</p>
              <div class="form-floating mb-3 w-full">
                {/*Resume Url*/}
                <div class="form-floating mb-3 w-full">
                  <input {...register("resumeUrl", { required: true })}
                    type="url"
                    class="form-control
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
                  <label for="floatingInput" class="text-gray-700">
                    www.drive.google.com/
                  </label>
                </div>
              </div>
            </div>
            


         
          </div>
          <div className=" gap-5 w-full">
            <div className="md:">
              <p>Language</p>
              <div class="form-floating mb-3 w-full">


                {/*Language */}
                <div class="form-floating mb-3 w-full">
                  <input {...register("language", { required: false })}
                    type="text"
                    class="form-control
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
                  <label for="floatingInput" class="text-gray-700">
                    English, Bangla
                  </label>
                </div>
              </div>
            </div>
            


         
          </div>

          {/* Category */}
<div className="w-full lg:w-full px-1">
                  <label
                    className="block uppercase text-blueGray-600 text-sm mb-1"
                    htmlFor="grid-password"
                  >
                    Sector you are best in
                  </label>
                  <div className="flex justify-center">
                    <div className="mb-3 w-full">
                      <select
                        className="form-select h-[57px] appearance-none block w-full px-3 py-4.5 text-base font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                        aria-label="Default select example"
                        {...register("category", { required: false })}
                      >
                        <option defaultValue value="Accounting / Finance">
                          Accounting / Finance
                        </option>
                        <option value="Marketing">Marketing</option>
                        <option value="Design">Design</option>
                        <option value="Development">Development</option>
                        <option value="Human Resource">Human Resource</option>
                        <option value="Automotive Jobs">Automotive Jobs</option>
                        <option value="Customer Service">
                          Customer Service
                        </option>
                        <option value="Health and Care">Health and Care</option>
                        <option value="Project Management">
                          Project Management
                        </option>
                      </select>
                    </div>
                  </div>
                </div>
          
        </div>


        {/* Social Networks */}
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
                  <input {...register("facebook", { required: true })}
                    type="url"
                    class="form-control
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
                  <label for="floatingInput" class="text-gray-700">
                    www.facebook.com/hdj{" "}
                  </label>
                </div>
              </div>
              {/* Twitter */}
              <div className="md:w-1/2">
                <p>Twitter</p>
                <div class="form-floating mb-3 w-full">
                  <input {...register("twitter", { required: true })}
                    type="url"
                    class="form-control
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
                  <label for="floatingInput" class="text-gray-700">
                    www.twitter.com/hdjs
                  </label>
                </div>
              </div>
            </div>
          </div>
          {/* Linkedin  github*/}
          <div class="flex">
            <div className="md:flex w-full gap-5">
              <div className="md:w-1/2">
                <p>Linkedin</p>
                <div class="form-floating mb-3 w-full">
                  {/* Linkedin */}
                  <input {...register("linkedin", { required: true })}
                    type="url"
                    class="form-control
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
                  <label for="floatingInput" class="text-gray-700">
                    www.linkedin.com/in/hdj{" "}
                  </label>
                </div>
              </div>
              {/* Github */}
              <div className="md:w-1/2">
                <p>Github</p>
                <div class="form-floating mb-3 w-full">
                  <input {...register("github", { required: true })}
                    type="url"
                    class="form-control
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
                  <input {...register("country", { required: true })}
                    type="text"
                    class="form-control
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
                  <label for="floatingInput" class="text-gray-700">
                    US{" "}
                  </label>
                </div>
              </div>
              {/* City */}
              <div className="md:w-1/2">
                <p>City</p>
                <div class="form-floating mb-3 w-full">
                  <input {...register("city", { required: true })}
                    type="text"
                    class="form-control
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
                  <input {...register("zipCode", { required: true })}
                    type="number"
                    class="form-control
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
                  <label for="floatingInput" class="text-gray-700">
                    1200
                  </label>
                </div>
              </div>
              {/* Street Address */}
              <div className="md:w-1/2">
                <p>Street Address</p>
                <div class="form-floating mb-3 w-full">
                  <input {...register("streetAddress", { required: true })}
                    type="text"
                    class="form-control
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
                  <label for="floatingInput" class="text-gray-700">
                    Mithapukur,Rangpur
                  </label>
                </div>
              </div>
            </div>
          </div>
          {/* Company BIO */}
          
          <div class="flex">
            <div className="md:flex w-full gap-5">
              <div className=" w-full">
                <p> Candidate Bio</p>
                <div class="form-floating mb-3 w-full">
                  {/*  Candidate */}
                  <textarea {...register("candidateBio", { required: true })}
                    class=" block w-full px-3 py-1.5 text-base font-normal text-gray-700  bg-white bg-clip-padding border border-solid order-gray-300 rounded transition ease-in-out h-44 m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    id="floatingInput"
                    placeholder="Candidate Bio"
                  ></textarea>
                </div>
              </div>
            </div>
          </div>

        </div>
        <div className="flex justify-center my-3">
          <button className="bg-blue-400 hover:bg-blue-500 text-white px-12 rounded-md py-3">
            {loading?'Updating...':'Update'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default CandidateProfile;
