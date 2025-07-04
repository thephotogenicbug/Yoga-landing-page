import React from "react";
import { Icon } from "@iconify/react";

const Membership = () => {
  return (
    <div>
      <div className="relative w-full mt-20">
        {/* Background Image */}
        <img
          src="https://res.cloudinary.com/dv5jjlsd7/image/upload/v1725787199/yoga-webdesign/carl-barcelo-nqUHQkuVj3c-unsplash_huobro.jpg"
          className="w-full h-[500px] sm:h-[600px] object-cover object-top"
          alt="Background"
        />

        {/* Content Box */}
        <div className="absolute inset-0 flex flex-col sm:flex-row justify-end items-center px-4 mt-10 sm:mt-[40px]">
          <div className="bg-[#5F6F52] rounded-lg p-6 sm:p-10 w-full max-w-[95%] sm:max-w-[600px] shadow-lg shadow-gray-800/60">
            <h1 className="text-[24px] text-white sm:text-[30px] font-medium mb-2">
              Free 30-Day Membership
            </h1>
            <p className="text-[14px] text-white sm:text-[16px] tracking-wide leading-relaxed">
              At arcu neque aliquet laoreet. Id egestas mauris tincidunt ut
              nulla cras. Non eget sem curabitur vehicula diam integer. Magna
              tortor dignissim imperdiet pulvinar ante sed metus consequat in.
              Feugiat id ipsum lacinia nec nunc odio pellentesque.
            </p>
            <div className="mt-6 sm:mt-10 flex flex-col sm:flex-row gap-4 sm:gap-6">
              <button className="bg-[#212529] text-white px-6 py-3 rounded-md font-medium">
                Book A Session
              </button>
              <button className="font-medium text-[16px] sm:text-[18px] text-[#ffff] px-6 py-3 rounded-md flex items-center gap-2">
                Contact Us <Icon icon="pepicons-print:arrow-right-circle" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Membership;
