import Image from "next/image";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Courses from "./components/Courses";
import Footer from "./components/Footer";
import Intern from "./components/Intern";
import Ready from "./components/Ready";

export default function Home() {
  return (
    <>
   <div className=" lg:hidden">
   <Navbar/>

   </div>
<div className="">
<Navbar/>
<Hero/>
<Features/>
<Courses/>

<Intern/>
<Ready/>
<Footer/>
</div>
</>
  );
}
