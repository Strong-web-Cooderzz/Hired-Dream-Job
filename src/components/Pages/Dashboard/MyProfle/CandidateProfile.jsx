import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import makeAnimated from "react-select/animated";
import { toast } from "react-hot-toast";
import CreatableSelect from "react-select/creatable";
import { BiArrowFromBottom, BiArrowFromTop } from "react-icons/bi";
import Select from "react-select";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
import fetchData from "../../../../api/fetchData";
import axios from "axios";
import Loading from "../../../Loading/Loading";
import { Link } from "react-router-dom";
import moment from "moment";

const CandidateProfile = () => {
  const [loading, setLoading] = useState(false);
  const { user, dbUser,updateUserProfile } = useContext(AuthContext);
  const [userLoading,setUserLoading]  = useState(false)
  const [photoUpdate,setPhotoUpdate]  = useState(false)
  const [userData, setUserData] = useState({});
  console.log(user)
   
  console.log(userData)
  
    useEffect(() => {
      setUserLoading(true)
      axios.get(`http://localhost:5000/user?email=${user?.email}`).then((response) => {
        setUserData(response.data);
        setUserLoading(false)
      });
    }, [photoUpdate]);
  // I, Abid Hasan removed function that sends ip address
  // we don't need it. Cause express can do that. So it will improve user experience

  const animatedComponents = makeAnimated();
  const skillsOptions = [
    { value: "HTML", label: "HTML" },
    { value: "CSS", label: "CSS" },
    { value: "Bootstrap", label: "Bootstrap" },
    { value: "Tailwind", label: "Tailwind" },
    { value: "Javascript", label: "Javascript" },
    { value: "React", label: "React" },
    { value: "NextJS", label: "NextJS" },
    { value: "Redux", label: "Redux" },
    { value: "NodeJS", label: "NodeJS" },
    { value: "Express", label: "Express" },
    { value: "Mongodb", label: "Mongodb" },
    { value: "MySQL", label: "MySQL" },
  ];
  const [skills, setSkills] = useState([]);

  const [uploadingLoading, setUploadingLoading] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();
  const handleUpdateCandidate = (data) => {
    setUploadingLoading(true)
   
    const image = data.image[0];
    console.log(image);
    const formData = new FormData();
    formData.append("file", image);
    formData.append("upload_preset", "hired-dream-job");
    formData.append("cloud_name", "dcckbmhft");

    const url = `https://api.cloudinary.com/v1_1/dcckbmhft/image/upload`;
    fetch(url, {
      method: "PUT",
      body: formData,
    })
      .then((res) => res.json())
      .then((imageData) => {
        const imageUrl = imageData.url;
        const updateData = {
          photo: imageUrl,
		  fullName: user.displayName,
        };
        updateUserProfile(updateData).then( ()=> 
        fetchData
        .put(`/user`, updateData, {
          headers: {
            Authorization: `Bearer ${user.accessToken}`,
          },
        })
        .then((response) => {
          console.log(response.data);
          reset();
          setUploadingLoading(false);
          toast.success("Profile updated!");
          setPhotoUpdate(!photoUpdate)
        })
         )
         
        
      });
  };

  return (
    <div className="w-full text-gray-700 h-full bg-gray-100 md:px-8">
      {loading && <Loading />}
      <h3 className="p-8 text-xl">My Profile</h3>
      <div className="bg-white md:px-8 px-4 rounded-md space-y-4">
        <form onSubmit={handleSubmit(handleUpdateCandidate)} className="">
          <div>
            {/* Photo Update */}
            <div className="flex relative items-center gap-2">
              <div className="mb-3 w-full flex justify-center">
                <label
                  htmlFor="formFile"
                  className="form-label overflow-hidden md:w-1/2 relative mx-auto inline-block mb-2 text-gray-700"
                >
                  <div className="w-full flex justify-center ">
                    <img
                      className=" h-24 w-24 border-2 rounded-full my-2 object-cover"
                      src={userData.photo}
                      alt=""
                    />
                  </div>
                  <input
                    accept="image/*"
                    type="file"
                    name="file_upload"
                    {...register("image", { required: true })}
                    className="form-control w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white border border-gray-300  rounded transition ease-in-out  m-0 "
                    id="formFile"
                  />
                  <div className="flex justify-center">
                    <button className="btn_primary justify-center my-2">
                      {
                        uploadingLoading ? 'Uploading...':'Update'
                      }
                    </button>
                   
                  </div>
                </label>
              </div>
            </div>
          </div>
        </form>

        <div className="flex justify-end ">
          <Link to={'edit-candidate'} className="btn_primary">Edit</Link>
        </div>

        <div className="w-full md:flex gap-2">
          <div className="md:w-1/2 bg-gray-100 rounded-md px-3 py-2">
         
              <h3 className="text-center text-xl font-semibold">User Info</h3>
            <div>
               {/* Name */}
              <div className="flex items-center gap-2 bg-white px-2 border-b rounded-md py-1">
                <p className="font-semibold">Name:</p>
                <p>{userData.fullName}</p>
              </div>
              {/* Email */}
              <div className="flex items-center gap-2 bg-white px-2 border-b rounded-md py-1">
                <p className="font-semibold">Email:</p>
                <p>{userData.email}</p>
              </div>
              {/* Gender */}
              <div className="flex items-center gap-2 bg-white px-2 border-b rounded-md py-1">
                <p className="font-semibold">Gender:</p>
                <p>{userData.gender}</p>
              </div>
              {/* Phone Number */}
              <div className="flex items-center gap-2 bg-white px-2 border-b rounded-md py-1">
                <p className="font-semibold">Phone Number:</p>
                <p>{userData.phoneNumber}</p>
              </div>
              {/* Salary */}
              <div className="flex items-center gap-2 bg-white px-2 border-b rounded-md py-1">
                <p className="font-semibold">Current Salary:</p>
                <p>{userData.salary}</p>
              </div>
              {/* Expected Salary */}
              <div className="flex items-center gap-2 bg-white px-2 border-b rounded-md py-1">
                <p className="font-semibold">Expected Salary:</p>
                <p>{userData.expectedSalary}</p>
              </div>
              {/* Experience*/}
              <div className="flex items-center gap-2 bg-white px-2 border-b rounded-md py-1">
                <p className="font-semibold">Experience:</p>
                <p>{userData.experience}</p>
              </div>
              {/* Website */}
              <div className="flex items-center gap-2 bg-white px-2 border-b rounded-md py-1">
                <p className="font-semibold">Education:</p>
                <p>{userData.education}</p>
              </div>
              {/* Founded In */}
              <div className="flex items-center gap-2 bg-white px-2 border-b rounded-md py-1">
                <p className="font-semibold">Segment:</p>
                <p>{userData.segment}</p>
              </div>
              {/* Account Created */}
              <div className="flex items-center gap-2 bg-white px-2 border-b rounded-md py-1">
                <p className="font-semibold">Account Created:</p>
                <p className="capitalize">{moment(userData.createdAt).fromNow()}</p>
              </div>
            </div>
          </div>
          {/* Others Info */}
          <div className="md:w-1/2 bg-gray-100 rounded-md px-3 py-2">
              <h3 className="text-center text-xl font-semibold">Others Info</h3>
            <div>
              {/* language */}
              <div className="flex items-center gap-2 bg-white px-2 border-b rounded-md py-1">
                <p className="font-semibold">Language:</p>
                <p>{userData?.language}</p>
              </div>
              {/* rate */}
              <div className="flex items-center gap-2 bg-white px-2 border-b rounded-md py-1">
                <p className="font-semibold">Rate:</p>
                <p>{userData?.rate}{" "} per hour</p>
              </div>
              {/* Skills */}
              <div className="flex items-center gap-2 bg-white px-2 border-b rounded-md py-1">
                <p className="font-semibold">Skills:</p>
                <div className="flex flex-wrap gap-1">{userData.skills?.map((skill,i)=><p key={i}>
                  <span className="bg-blue-100 px-2 text-blue-600 rounded-full">{skill.value}</span>
                </p>)}</div>
              </div>
              {/* Facebook */}
              <div className="flex items-center gap-2 bg-white px-2 border-b rounded-md py-1">
                <p className="font-semibold">Facebook:</p>
                <p>{userData?.social?.facebook.slice(0,35)}...</p>
              </div>
              {/* Twitter */}
              <div className="flex items-center gap-2 bg-white px-2 border-b rounded-md py-1">
                <p className="font-semibold">Twitter:</p>
                <p>{userData?.social?.twitter.slice(0,35)}...</p>
              </div>
              {/* Github */}
              <div className="flex items-center gap-2 bg-white px-2 border-b rounded-md py-1">
                <p className="font-semibold">Github:</p>
                <p>{userData?.social?.github.slice(0,35)}...</p>
              </div>
              {/* LinkedIn */}
              <div className="flex items-center gap-2 bg-white px-2 border-b rounded-md py-1">
                <p className="font-semibold">LinkedIn:</p>
                <p>{userData?.social?.linkedin.slice(0,35)}...</p>
              </div>
              {/* Country */}
              <div className="flex items-center gap-2 bg-white px-2 border-b rounded-md py-1">
                <p className="font-semibold">Country or city:</p>
                <p className="capitalize">{userData.address?.city}, {userData.address?.country}</p>
              </div>
              {/* Zip Code */}
              <div className="flex items-center gap-2 bg-white px-2 border-b rounded-md py-1">
                <p className="font-semibold">Zip Code:</p>
                <p>{userData.address?.postal}</p>
              </div>
              {/* Street Address? */}
              <div className="flex items-center gap-2 bg-white px-2 border-b rounded-md py-1">
                <p className="font-semibold">Street Address:</p>
                <p>{userData.address?.street}</p>
              </div>
            </div>
          </div>
         
        </div>
         {/* About */}
         <div className="w-full bg-gray-100 rounded-md px-3 py-2">
          <div className="bg-white w-full px-2 py-1 rounded-md">
            <h2>Candidate Bio</h2>
          </div>
          {userData.bio}
         </div>
         {/* Education */}
         <div className="w-full bg-gray-100 rounded-md px-3 py-2"></div>
      </div>
      <div>

      </div>
    </div>
  );
};

export default CandidateProfile;
