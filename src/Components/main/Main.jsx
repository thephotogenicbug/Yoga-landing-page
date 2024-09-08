import React from "react";
import { Icon } from "@iconify/react";
import Services from "../OurServices/Services";
import Classes from "../OurClasses/Classes";
import Membership from "../Membership/Membership";
import Footer from "../Footer/Footer";
import Team from "../Team/Team";

const Main = () => {
  return (
    <>
      <div className="relative h-screen">
        <nav className="absolute top-0 left-0 w-full bg-transparent text-white p-4 z-10">
          <div className="mx-auto max-w-7xl flex justify-between">
            <div>
              <img
                src="https://res.cloudinary.com/dv5jjlsd7/image/upload/v1725778959/yoga-webdesign/PrimaryLogo_s1wl5r.png"
                className="w-[150px] object-contain"
                alt="logo"
              />
            </div>
            <div>
              <ul className="flex gap-10 text-[#343A40] items-center">
                <li>
                  <a href="#" className="font-medium">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="font-medium flex items-center gap-2">
                    Services <Icon icon="solar:round-alt-arrow-down-outline" />
                  </a>
                </li>
                <li>
                  <a href="#" className="font-medium flex items-center gap-2">
                    Our Facility
                    <Icon icon="solar:round-alt-arrow-down-outline" />
                  </a>
                </li>
                <li>
                  <a href="#" className="font-medium">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="font-medium">
                    Contact
                  </a>
                </li>
                <li>
                  <button className="bg-[#5F6F52] px-4 py-2 text-white font-semibold rounded-md flex items-center gap-2">
                    <Icon icon="mingcute:shopping-bag-3-fill" /> Shop Now
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <div className="h-full w-full relative">
          <img
            src="https://res.cloudinary.com/dv5jjlsd7/image/upload/v1725778961/yoga-webdesign/background_pvkwhw.png"
            className="w-full h-[900px] object-cover"
            alt="Background Image"
          />
          <div className="absolute inset-0 mx-auto max-w-7xl flex flex-col items-start mt-[250px] px-4">
            <h1 className="text-[60px] font-medium text-[#495057] tracking-wider">
              YOGA FIRST
            </h1>
            <p className="outline-text text-[60px] tracking-wider">
              FITNESS ALWAYS
            </p>
            <p className="text-[16px] font-medium w-[560px] tracking-wider">
              Welcome to Great Fitness, Los Angeles' premier destination for
              yoga and fitness enthusiasts. Nestled in the vibrant heart of the
              city, we offer a sanctuary where mind, body, and spirit align.
            </p>
            <div className="mt-10 flex justify-between items-center">
              <button className="bg-[#5F6F52] text-white px-6 py-3 rounded-md font-medium">
                Book A Session
              </button>
              <button className="font-medium text-[18px] text-[#212529] px-6 py-3 rounded-md flex items-center gap-2">
                Contact Us <Icon icon="pepicons-print:arrow-right-circle" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <Services />
      <Classes />
      <Team />
      <Membership />
      <Footer />
      <div className=" mb-10"></div>
    </>
  );
};

export default Main;
