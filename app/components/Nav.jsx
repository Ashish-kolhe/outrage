"use client";
import React from "react";

const Nav = ({ setCategory, category }) => {
  return (
    <div>
      <div className="navbar bg-white z-50 shadow-xs fixed w-full text-black">
        <div className="flex-1">
          <a href="/" className="btn btn-ghost text-xl hover:bg-white hover:text-black">
          <svg xmlns="http://www.w3.org/2000/svg" height="24" width="27" viewBox="0 0 576 512"><path fill="#000000" d="M400 0L176 0c-26.5 0-48.1 21.8-47.1 48.2c.2 5.3 .4 10.6 .7 15.8L24 64C10.7 64 0 74.7 0 88c0 92.6 33.5 157 78.5 200.7c44.3 43.1 98.3 64.8 138.1 75.8c23.4 6.5 39.4 26 39.4 45.6c0 20.9-17 37.9-37.9 37.9L192 448c-17.7 0-32 14.3-32 32s14.3 32 32 32l192 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-26.1 0C337 448 320 431 320 410.1c0-19.6 15.9-39.2 39.4-45.6c39.9-11 93.9-32.7 138.2-75.8C542.5 245 576 180.6 576 88c0-13.3-10.7-24-24-24L446.4 64c.3-5.2 .5-10.4 .7-15.8C448.1 21.8 426.5 0 400 0zM48.9 112l84.4 0c9.1 90.1 29.2 150.3 51.9 190.6c-24.9-11-50.8-26.5-73.2-48.3c-32-31.1-58-76-63-142.3zM464.1 254.3c-22.4 21.8-48.3 37.3-73.2 48.3c22.7-40.3 42.8-100.5 51.9-190.6l84.4 0c-5.1 66.3-31.1 111.2-63 142.3z"/></svg>
            OutRage
          </a>
        </div>

        {/* Large Screen: Normal Toggle */}
        <div className="hidden lg:flex gap-4 lg:mr-5">
          <button
            className={`btn ${category === "courses" ? "btn bg-black text-white rounded-lg" : "btn-outline rounded-lg"}`}
            onClick={() => setCategory("courses")}
          >
            Courses
          </button>
          <button
            className={`btn ${category === "internships" ? "btn bg-black text-white rounded-lg" : "btn-outline rounded-lg"}`}
            onClick={() => setCategory("internships")}
          >
            Internships
          </button>
        </div>

        {/* Small Screen: Dropdown */}
        <div className="lg:hidden dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost bg-white text-black">
            {category === "courses" ? "Courses" : "Internships"} ▼
          </label>
          <ul
            tabIndex={0}
            className="dropdown-content menu p-2 shadow bg-white rounded-box w-48 border border-neutral-200"
          >
            <li>
              <button
                className={`btn bg-white text-black w-full text-left ${
                  category === "courses" ? "bg-black text-white" : ""
                }`}
                onClick={() => setCategory("courses")}
              >
                Courses
              </button>
            </li>
            <li>
              <button
                className={`btn bg-white text-black w-full text-left ${
                  category === "internships" ? "bg-black text-white" : ""
                }`}
                onClick={() => setCategory("internships")}
              >
                Internships
              </button>
            </li>
          </ul>
        </div>

        {/* Profile */}
        <div className="dropdown dropdown-end">
          <div className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <a href="/dashboard">
                <img alt="Profile" src="./Ashish-Kolhe.jpg" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
