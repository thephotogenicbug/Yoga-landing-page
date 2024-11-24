import React from "react";
import { Icon } from "@iconify/react";
const Footer = () => {
  return (
    <div className=" mx-auto max-w-7xl">
      <div className=" flex flex-row justify-between items-center p-10">
        <div>
          <img
            src="https://res.cloudinary.com/dv5jjlsd7/image/upload/v1725778959/yoga-webdesign/PrimaryLogo_s1wl5r.png"
            className="w-[150px] object-contain"
            alt="logo"
          />
        </div>
        <div>
          <ul className=" flex flex-row gap-10">
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

      <hr class="h-px my-1 bg-gray-200 border-0 dark:bg-gray-700" />
      <div className=" flex justify-between items-center pl-10 pr-10 mt-5">
        <div className=" flex flex-row gap-4">
          <Icon
            icon="lets-icons:insta"
            className=" text-[25px] text-[#5F6F52]"
          />
          <Icon
            icon="ph:facebook-logo"
            className=" text-[25px] text-[#5F6F52]"
          />
          <Icon
            icon="ri:twitter-x-fill"
            className=" text-[25px] text-[#5F6F52]"
          />
          <Icon icon="mdi:youtube" className="text-[25px] text-[#5F6F52]" />
        </div>
        <div>
          <p>
            &copy; {new Date().getFullYear()} Naveen Kumar. All rights reserved.{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
