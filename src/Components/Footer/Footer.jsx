import React from "react";
import { Icon } from "@iconify/react";

const Footer = () => {
  return (
    <div className="mx-auto max-w-7xl px-4">
      {/* Top Section */}
      <div className="flex flex-col sm:flex-row justify-between items-center p-6 sm:p-10 gap-6 sm:gap-0">
        <div>
          <img
            src="https://res.cloudinary.com/dv5jjlsd7/image/upload/v1725778959/yoga-webdesign/PrimaryLogo_s1wl5r.png"
            className="w-[120px] sm:w-[150px] object-contain"
            alt="logo"
          />
        </div>
        <div>
          <ul className="flex flex-col sm:flex-row gap-4 sm:gap-10 text-center sm:text-left">
            <li>
              <a href="#" className="font-medium">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="font-medium">
                Services
              </a>
            </li>
            <li>
              <a href="#" className="font-medium">
                Our Facility
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
          </ul>
        </div>
      </div>

      <hr className="h-px my-4 bg-gray-200 border-0 dark:bg-gray-700" />

      {/* Bottom Section */}
      <div className="flex flex-col sm:flex-row justify-between items-center px-4 sm:px-10 py-4 gap-4 text-center">
        <div className="flex gap-4">
          <Icon
            icon="lets-icons:insta"
            className="text-[24px] text-[#5F6F52]"
          />
          <Icon
            icon="ph:facebook-logo"
            className="text-[24px] text-[#5F6F52]"
          />
          <Icon
            icon="ri:twitter-x-fill"
            className="text-[24px] text-[#5F6F52]"
          />
          <Icon icon="mdi:youtube" className="text-[24px] text-[#5F6F52]" />
        </div>
        <div className="text-sm text-gray-600">
          <p>
            &copy; {new Date().getFullYear()} Naveen Kumar. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
