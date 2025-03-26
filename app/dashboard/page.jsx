"use client";
import React, { useState } from "react";
import Footer from "../components/Footer";

const courses = [
  { title: "Full Stack Web Dev", progress: "75%" },
  { title: "Machine Learning", progress: "40%" },
  { title: "Cyber Security", progress: "20%" },
  { title: "Full Stack Web Dev", progress: "75%" },
  { title: "Machine Learning", progress: "40%" },
  { title: "Cyber Security", progress: "20%" },
  { title: "Full Stack Web Dev", progress: "75%" },
  { title: "Machine Learning", progress: "40%" },
  { title: "Cyber Security", progress: "20%" },
];

const internships = [
  { title: "Web Developer Intern", progress: "60%" },
  { title: "Data Analyst Intern", progress: "80%" },
  { title: "Software Tester Intern", progress: "50%" },
];

const completedCourses = [
  { title: "React Mastery", status: "Certificate Received" },
  { title: "Blockchain Basics", status: "Certificate Received" },
];

const pendingCertificates = [
  { title: "Cyber Security Training", status: "Apply for Certificate" },
];

const DashboardPage = () => {
  const [activePage, setActivePage] = useState("MyCourses");
  const [menuOpen, setMenuOpen] = useState(false);

  const renderPage = () => {
    switch (activePage) {
      case "MyCourses":
        return (
          <div>
            <h1 className="text-xl font-bold text-black">My Courses</h1>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-4">
              {courses.map((course, index) => (
                <div key={index} className="card bg-white border border-neutral-200 hover:shadow-sm text-black w-full">
                  <div className="card-body">
                    <h2 className="card-title">{course.title}</h2>
                    <p className="text-gray-500">Ongoing - {course.progress} Completed</p>
                    <button className="btn btn-outline mt-3">View Course</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      case "MyInternships":
        return (
          <div>
            <h1 className="text-xl font-bold text-black">My Internships</h1>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-4">
              {internships.map((internship, index) => (
                <div key={index} className="card bg-white border border-neutral-200 hover:shadow-sm text-black w-full">
                  <div className="card-body">
                    <h2 className="card-title">{internship.title}</h2>
                    <p className="text-gray-500">Ongoing - {internship.progress} Completed</p>
                    <button className="btn btn-outline mt-3">View Internship</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      case "Completed":
        return (
          <div>
            <h1 className="text-xl font-bold text-black">Completed Courses & Internships</h1>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-4">
              {completedCourses.map((course, index) => (
                <div key={index} className="card bg-white border border-neutral-200 hover:shadow-sm text-black w-full">
                  <div className="card-body">
                    <h2 className="card-title">{course.title}</h2>
                    <p className="text-gray-500">{course.status}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      case "PendingCertificates":
        return (
          <div>
            <h1 className="text-xl font-bold text-black">Pending Certifications</h1>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-4">
              {pendingCertificates.map((course, index) => (
                <div key={index} className="card bg-white border border-neutral-200 hover:shadow-sm text-black w-fit">
                  <div className="card-body">
                    <h2 className="card-title">{course.title}</h2>
                    <p className="text-gray-500">{course.status}</p>
                    <button className="btn btn-primary mt-3">Apply Now</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      default:
        return <h1 className="text-xl">Select a section</h1>;
    }
  };

  return (
    <div className="flex flex-col min-h-screen">

      {/* Top Navbar for Mobile */}
      <div className="lg:hidden flex justify-between items-center bg-white px-4 py-3 shadow-md sticky top-0 z-50">
      <a href="/" className="btn btn-ghost text-xl -mx-2"><svg xmlns="http://www.w3.org/2000/svg" height="24" width="27" viewBox="0 0 576 512"><path fill="#000000" d="M400 0L176 0c-26.5 0-48.1 21.8-47.1 48.2c.2 5.3 .4 10.6 .7 15.8L24 64C10.7 64 0 74.7 0 88c0 92.6 33.5 157 78.5 200.7c44.3 43.1 98.3 64.8 138.1 75.8c23.4 6.5 39.4 26 39.4 45.6c0 20.9-17 37.9-37.9 37.9L192 448c-17.7 0-32 14.3-32 32s14.3 32 32 32l192 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-26.1 0C337 448 320 431 320 410.1c0-19.6 15.9-39.2 39.4-45.6c39.9-11 93.9-32.7 138.2-75.8C542.5 245 576 180.6 576 88c0-13.3-10.7-24-24-24L446.4 64c.3-5.2 .5-10.4 .7-15.8C448.1 21.8 426.5 0 400 0zM48.9 112l84.4 0c9.1 90.1 29.2 150.3 51.9 190.6c-24.9-11-50.8-26.5-73.2-48.3c-32-31.1-58-76-63-142.3zM464.1 254.3c-22.4 21.8-48.3 37.3-73.2 48.3c22.7-40.3 42.8-100.5 51.9-190.6l84.4 0c-5.1 66.3-31.1 111.2-63 142.3z"/></svg>OutRage</a>
        <div className="relative">
          <button onClick={() => setMenuOpen(!menuOpen)} className="focus:outline-none">
            <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-gray-400">
              <img src="./Ashish-Kolhe.jpg" alt="Profile" />
            </div>
          </button>
          {menuOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white  rounded-lg  z-50 text-black">
              <ul className="py-2">
                {["MyCourses", "MyInternships", "Completed", "PendingCertificates"].map((item) => (
                  <li key={item}>
                    <button
                      className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                      onClick={() => { setActivePage(item); setMenuOpen(false); }}
                    >
                      {item.replace("My", "My ")}
                    </button>
                  </li>
                ))}
                <li>
                  <button className="block w-full text-left px-4 py-2 hover:bg-gray-100">Logout</button>
                </li>
              </ul>
            </div>
          )}
          
        </div>
       
      </div>

      <div className="flex flex-1">
        {/* Sidebar (Visible on Large Screens) */}
        <div className="hidden lg:block w-64 bg-white h-screen sticky top-0">
        <a href="/" className="btn btn-ghost text-xl ml-2 my-5 text-black hover:bg-white hover:text-black"><svg xmlns="http://www.w3.org/2000/svg" height="24" width="27" viewBox="0 0 576 512"><path fill="#000000" d="M400 0L176 0c-26.5 0-48.1 21.8-47.1 48.2c.2 5.3 .4 10.6 .7 15.8L24 64C10.7 64 0 74.7 0 88c0 92.6 33.5 157 78.5 200.7c44.3 43.1 98.3 64.8 138.1 75.8c23.4 6.5 39.4 26 39.4 45.6c0 20.9-17 37.9-37.9 37.9L192 448c-17.7 0-32 14.3-32 32s14.3 32 32 32l192 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-26.1 0C337 448 320 431 320 410.1c0-19.6 15.9-39.2 39.4-45.6c39.9-11 93.9-32.7 138.2-75.8C542.5 245 576 180.6 576 88c0-13.3-10.7-24-24-24L446.4 64c.3-5.2 .5-10.4 .7-15.8C448.1 21.8 426.5 0 400 0zM48.9 112l84.4 0c9.1 90.1 29.2 150.3 51.9 190.6c-24.9-11-50.8-26.5-73.2-48.3c-32-31.1-58-76-63-142.3zM464.1 254.3c-22.4 21.8-48.3 37.3-73.2 48.3c22.7-40.3 42.8-100.5 51.9-190.6l84.4 0c-5.1 66.3-31.1 111.2-63 142.3z"/></svg>OutRage</a>
          <div className="flex flex-col items-center py-6">
           
            <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-gray-400 ">
              <img src="./Ashish-Kolhe.jpg" alt="Profile" />
            </div>
            <h2 className="mt-2 font-semibold">Ashish Kolhe</h2>
          </div>
          <ul className="space-y-3 px-4">
            {["MyCourses", "MyInternships", "Completed", "PendingCertificates"].map((item) => (
              <li key={item}>
                <button
                  className={`w-full text-left px-4 py-2 rounded-lg ${
                    activePage === item ? "bg-gray-200" : ""
                  }`}
                  onClick={() => setActivePage(item)}
                >
                  {item.replace("My", "My ")}
                </button>
              </li>
            ))}
            <li>
              <button className="w-full text-left px-4 py-2 rounded-lg hover:bg-gray-200">
                Logout
              </button>
            </li>
          </ul>
        </div>

        {/* Main Content */}
        <div className="flex-1 flex flex-col">
      <div className="flex-1 p-6 bg-white">{renderPage()}</div>
      <Footer /> {/* Footer always at the bottom */}
    </div>
      </div>
      
    </div>
  );
};

export default DashboardPage;
