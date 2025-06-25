import React, { useState } from "react";
import { Icon } from "@iconify/react";
import Services from "../OurServices/Services";
import Classes from "../OurClasses/Classes";
import Membership from "../Membership/Membership";
import Footer from "../Footer/Footer";
import Team from "../Team/Team";

const Main = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <div className="relative h-screen">
        {/* Backdrop Overlay when Menu is Open */}
        {menuOpen && (
          <div
            onClick={() => setMenuOpen(false)}
            className="fixed inset-0 z-0 bg-black/30 backdrop-blur-sm sm:hidden"
          ></div>
        )}

        {/* Navbar */}
        <nav className="absolute top-0 left-0 w-full bg-transparent text-white p-4 z-10">
          <div className="mx-auto max-w-7xl flex flex-col sm:flex-row justify-between items-center gap-y-4">
            {/* Logo & Hamburger */}
            <div className="w-full flex justify-between items-center sm:w-auto">
              <img
                src="https://res.cloudinary.com/dv5jjlsd7/image/upload/v1725778959/yoga-webdesign/PrimaryLogo_s1wl5r.png"
                className="w-[120px] sm:w-[150px] object-contain"
                alt="logo"
              />
              <button
                className="sm:hidden text-[#343A40] text-3xl"
                onClick={() => setMenuOpen(!menuOpen)}
              >
                <Icon icon={menuOpen ? "ic:round-close" : "ci:menu-alt-01"} />
              </button>
            </div>

            {/* Nav Links */}
            <ul
              className={`flex flex-col sm:flex-row gap-4 sm:gap-10 text-[#343A40] items-center transition-all duration-300 ${
                menuOpen ? "block" : "hidden"
              } sm:flex`}
            >
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
        </nav>

        {/* Hero Section */}
        {/* Hero Section */}
        <div className="h-full w-full relative">
          {/* Mobile Portrait Image */}
          <img
            src="https://res.cloudinary.com/dv5jjlsd7/image/upload/v1750835828/yoga-webdesign/sonnie-hiles-rX8gBeg2WM0-unsplash_xjdjup.jpg"
            className="w-full h-[700px] object-cover sm:hidden"
            alt="Hero Mobile"
          />
          {/* Desktop/Tablet Landscape Image */}
          <img
            src="https://res.cloudinary.com/dv5jjlsd7/image/upload/v1725778961/yoga-webdesign/background_pvkwhw.png"
            className="w-full h-[800px] md:h-[900px] object-cover hidden sm:block"
            alt="Hero Desktop"
          />

          <div className="absolute inset-0 mx-auto max-w-7xl flex flex-col items-center sm:items-start justify-center px-4 mt-32 sm:mt-[250px] text-center sm:text-left">
            <h1 className="text-[32px] sm:text-[48px] md:text-[60px] font-medium text-[#495057] tracking-wide">
              YOGA FIRST
            </h1>
            <p className="outline-text text-[28px] sm:text-[48px] md:text-[60px] tracking-wide">
              FITNESS ALWAYS
            </p>
            <p className="text-[14px] sm:text-[16px] font-medium max-w-[90%] sm:max-w-[560px] tracking-wide mt-2">
              Welcome to Great Fitness, Los Angeles' premier destination for
              yoga and fitness enthusiasts. Nestled in the vibrant heart of the
              city, we offer a sanctuary where mind, body, and spirit align.
            </p>
            <div className="mt-6 sm:mt-10 flex flex-col sm:flex-row gap-4 sm:gap-8">
              <button className="bg-[#5F6F52] text-white px-6 py-3 rounded-md font-medium">
                Book A Session
              </button>
              <button className="font-medium text-[16px] sm:text-[18px] text-[#212529] px-6 py-3 rounded-md flex items-center gap-2">
                Contact Us <Icon icon="pepicons-print:arrow-right-circle" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Other Sections */}
      <Services />
      <Classes />
      <Team />
      <Membership />
      <Footer />
      <div className="mb-10"></div>
    </>
  );
};

export default Main;
