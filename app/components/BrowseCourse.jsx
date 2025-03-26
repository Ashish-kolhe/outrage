"use client";
import React, { useState } from "react";
import Nav from "./Nav"; // Import the navbar

// Dummy Data for Courses
const coursesData = [
  { id: 1, title: "UI/UX Design Mastery", description: "Learn Figma, Adobe XD, and user-centered design principles.", duration: "2 Months" },
  { id: 2, title: "Data Science & Machine Learning", description: "Master Python, Pandas, NumPy, and ML algorithms with real-world projects.", duration: "4 Months" },
  { id: 3, title: "Full Stack Web Development", description: "Learn React, Node.js, MongoDB, and build scalable web applications.", duration: "6 Months" },
  { id: 4, title: "Cyber Security Fundamentals", description: "Understand ethical hacking, penetration testing, and network security.", duration: "3 Months" },
  { id: 5, title: "Android App Development", description: "Build native Android apps using Kotlin and Jetpack Compose.", duration: "5 Months" },
  { id: 6, title: "Artificial Intelligence Essentials", description: "Introduction to neural networks, deep learning, and AI ethics.", duration: "3 Months" },
  { id: 7, title: "Cloud Computing with AWS", description: "Learn AWS services, deployment strategies, and cloud security.", duration: "4 Months" },
  { id: 8, title: "Game Development with Unity", description: "Create 2D and 3D games using Unity and C# scripting.", duration: "5 Months" },
  { id: 9, title: "Blockchain & Web3 Development", description: "Explore Ethereum, smart contracts, and decentralized applications.", duration: "6 Months" },
  { id: 10, title: "DevOps & CI/CD Automation", description: "Learn Docker, Kubernetes, Jenkins, and infrastructure automation.", duration: "4 Months" },
];

// Dummy Data for Internships
const internshipsData = [
  { id: 1, title: "Frontend Developer Internship", description: "Work with React, Tailwind CSS, and Next.js to build modern web applications.", duration: "3 Months" },
  { id: 2, title: "Data Science Internship", description: "Gain hands-on experience in Python, Pandas, and machine learning techniques.", duration: "4 Months" },
  { id: 3, title: "Cyber Security Analyst Intern", description: "Learn ethical hacking, penetration testing, and network security.", duration: "2 Months" },
  { id: 4, title: "Mobile App Developer Internship", description: "Develop Android & iOS apps using Flutter and React Native.", duration: "5 Months" },
  { id: 5, title: "Backend Developer Internship", description: "Work with Node.js, Express, and MongoDB to build scalable APIs.", duration: "3 Months" },
  { id: 6, title: "UI/UX Design Internship", description: "Use Figma and Adobe XD to design user-friendly interfaces.", duration: "2 Months" },
  { id: 7, title: "AI/ML Internship", description: "Build AI models using TensorFlow, PyTorch, and OpenAI APIs.", duration: "6 Months" },
  { id: 8, title: "Game Development Internship", description: "Create 2D and 3D games with Unity and Unreal Engine.", duration: "4 Months" },
  { id: 9, title: "Blockchain Developer Internship", description: "Develop decentralized applications (DApps) using Solidity and Ethereum.", duration: "6 Months" },
  { id: 10, title: "DevOps Engineer Internship", description: "Learn Docker, Kubernetes, and CI/CD automation.", duration: "3 Months" },
];

const BrowsePage = () => {
  const [category, setCategory] = useState("courses"); // Default is "courses"
  const [search, setSearch] = useState("");

  const items = category === "internships" ? internshipsData : coursesData;

  const filteredItems = items.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      {/* Pass state setter to Nav */}
      <Nav setCategory={setCategory} category={category} />

      <div className="lg:pt-20 pt-8 bg-gradient-to-t from-white via-neutral-100 to-white">
        <div className="p-5 lg:p-10 pt-20">
          <input
            type="text"
            placeholder={`Search ${category}...`}
            className="input input-bordered w-full mb-5 rounded-2xl"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            {filteredItems.map((item) => (
              <div key={item.id} className="card bg-white border border-neutral-200 hover:shadow-sm text-black w-fit">
                <div className="card-body">
                  <h2 className="card-title">{item.title}</h2>
                  <p className="text-gray-500">{item.description}</p>
                  <div className="card-actions justify-between">
                    <div>
                      <p className="text-gray-500">Duration: {item.duration}</p>
                    </div>
                    <button className="btn btn-outline">Enroll</button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Show a message if no results are found */}
          {filteredItems.length === 0 && (
            <p className="text-gray-500 text-center mt-5">No {category} found.</p>
          )}
        </div>
      </div>
    </>
  );
};

export default BrowsePage;
