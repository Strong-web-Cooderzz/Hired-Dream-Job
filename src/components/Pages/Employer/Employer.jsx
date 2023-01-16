import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { FaMapMarkerAlt } from "react-icons/fa";
import { BsFillBagFill, BsBagFill, BsClock } from "react-icons/bs";
import { BsTelephone, BsLinkedin } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
import { GiCash } from "react-icons/gi";

export default function Employer() {
    const employerId = useParams().id;
    const [employer, setEmployer] = useState({});

    useEffect(() => {
        fetch('/data/employers.json')
            .then(res => res.json())
            .then(data => {
                const newData = data.filter(i => employerId === i.id + '');
                setEmployer(newData[0]);
            });
    }, []);

    return (
        <main>
            {/* short details */}
            <section className="bg-blue-50 flex items-center px-12 py-16">
                <div className="w-24 h-24 bg-green-300 rounded-full">
                </div>

                {/* name */}
                <div className="ml-4 flex flex-col gap-3">
                    <span className="text-2xl font-semibold">{employer.name}</span>
                    <div className="flex items-center gap-4 text-xs text-gray-600">
                        <span className="flex items-center gap-1"><FaMapMarkerAlt />{employer.location}</span>
                        <span className="flex items-center gap-1"><BsFillBagFill />{employer.type}</span>
                        <span className="flex items-center gap-1"><BsTelephone />123123123</span>
                        <span className="flex items-center gap-1"><HiOutlineMail />info@info.info</span>
                    </div>
                    <div>
                        <span className="text-xs text-blue-700 bg-blue-200 px-6 py-1 rounded-full">Open Jobs - {employer.available}</span>
                    </div>
                </div>

                {/* button */}
                <div className="ml-auto">
                    <button className="bg-blue-600 py-3 px-12 rounded-lg text-white hover:bg-blue-800">Private Message</button>
                </div>
            </section>

            {/* details */}
            <secction className="px-12 flex gap-16 mt-16">
                <div className="w-9/12 flex flex-col">
                    <span className="text-lg font-bold">About Company</span>
                    <span className="text-sm mt-4 text-gray-600">Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi anim cupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate dolor minim nulla est proident. Nostrud officia pariatur ut officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit commodo officia dolor Lorem duis laboris cupidatat officia voluptate. Culpa proident adipisicing id nulla nisi laboris ex in Lorem sunt duis officia eiusmod. Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim. Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et culpa duis.</span>
                    <span className="text-xl font-medium mt-6">3 others jobs available</span>
                    <span className="text-gray-600 text-xs">2020 jobs live - 293 added today</span>
                    {/* cards */}
                    <div className="flex flex-col gap-8 mt-4">
                        <div className="p-5 border rounded-md flex flex-col gap-4">
                            <span className="font-medium">Software Engineer</span>
                            <div className="flex text-xs text-gray-600 gap-4">
                                <span className="flex items-center gap-2"><BsBagFill /> <span>Segment</span></span>
                                <span className="flex items-center gap-2"><FaMapMarkerAlt /> <span>Segment</span></span>
                                <span className="flex items-center gap-2"><BsClock /> <span>11 hours ago</span></span>
                                <span className="flex items-center gap-2"><GiCash /> <span>$35k -$45k</span></span>
                            </div>
                            <div className="text-xs flex gap-4">
                                <span className="py-1 px-4 bg-blue-100 rounded-full text-blue-700">Full Time</span>
                                <span className="py-1 px-4 bg-green-100 rounded-full text-green-700">Private</span>
                                <span className="py-1 px-4 bg-yellow-100 rounded-full text-yellow-700">Urgent</span>
                            </div>
                        </div>
                        <div className="p-5 border rounded-md flex flex-col gap-4">
                            <span className="font-medium">Software Engineer</span>
                            <div className="flex text-xs text-gray-600 gap-4">
                                <span className="flex items-center gap-2"><BsBagFill /> <span>Segment</span></span>
                                <span className="flex items-center gap-2"><FaMapMarkerAlt /> <span>Segment</span></span>
                                <span className="flex items-center gap-2"><BsClock /> <span>11 hours ago</span></span>
                                <span className="flex items-center gap-2"><GiCash /> <span>$35k -$45k</span></span>
                            </div>
                            <div className="text-xs flex gap-4">
                                <span className="py-1 px-4 bg-blue-100 rounded-full text-blue-700">Full Time</span>
                                <span className="py-1 px-4 bg-green-100 rounded-full text-green-700">Private</span>
                                <span className="py-1 px-4 bg-yellow-100 rounded-full text-yellow-700">Urgent</span>
                            </div>
                        </div>
                        <div className="p-5 border rounded-md flex flex-col gap-4">
                            <span className="font-medium">Software Engineer</span>
                            <div className="flex text-xs text-gray-600 gap-4">
                                <span className="flex items-center gap-2"><BsBagFill /> <span>Segment</span></span>
                                <span className="flex items-center gap-2"><FaMapMarkerAlt /> <span>Segment</span></span>
                                <span className="flex items-center gap-2"><BsClock /> <span>11 hours ago</span></span>
                                <span className="flex items-center gap-2"><GiCash /> <span>$35k -$45k</span></span>
                            </div>
                            <div className="text-xs flex gap-4">
                                <span className="py-1 px-4 bg-blue-100 rounded-full text-blue-700">Full Time</span>
                                <span className="py-1 px-4 bg-green-100 rounded-full text-green-700">Private</span>
                                <span className="py-1 px-4 bg-yellow-100 rounded-full text-yellow-700">Urgent</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="w-3/12">
                    <div className="flex flex-col bg-blue-50 p-6 gap-4">
                        <span className="flex items-center justify-between">Primary industry: <span className="text-gray-500 text-sm">Software</span></span>
                        <span className="flex items-center justify-between">Company Size: <span className="text-gray-500 text-sm">501-1000</span></span>
                        <span className="flex items-center justify-between">Founded in: <span className="text-gray-500 text-sm">2011</span></span>
                        <span className="flex items-center justify-between">Phone: <span className="text-gray-500 text-sm">123123123</span></span>
                        <span className="flex items-center justify-between">Location: <span className="text-gray-500 text-sm">{employer.location}</span></span>
                        <span className="flex items-center justify-between">Social media: <span className="text-gray-500 text-sm"><BsLinkedin /></span></span>
                        <button className="bg-blue-200 py-3 text-blue-700 rounded-md">www.site.com</button>
                    </div>
                </div>
            </secction>
        </main>
    )
}
