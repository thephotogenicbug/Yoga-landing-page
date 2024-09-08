import React from "react";
import { Icon } from "@iconify/react";
const Membership = () => {
  return (
    <div>
      <div className="h-full w-full relative mt-20">
        <img
          src="https://res.cloudinary.com/dv5jjlsd7/image/upload/v1725787199/yoga-webdesign/carl-barcelo-nqUHQkuVj3c-unsplash_huobro.jpg"
          className="w-full h-[600px]  object-cover object-[top] "
          alt="Background Image"
        />
        <div className="absolute inset-0  flex  flex-row justify-between items-start mt-[150px] px-4">
          <div></div>
          <div className=" bg-[#FFFFFF] rounded-lg p-10 ">
            <div>
              <h1 className=" text-[30px] font-medium">
                Free 30-Day Membership
              </h1>
              <p className=" w-[650px] tracking-wider">
                At arcu neque aliquet laoreet. Id egestas mauris tincidunt ut
                nulla cras. Non eget sem curabitur vehicula diam integer. Magna
                tortor dignissim imperdiet pulvinar ante sed metus consequat in.
                Feugiat id ipsum lacinia nec nunc odio pellentesque.
              </p>
            </div>
            <div className="mt-10 flex  items-center">
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
    </div>
  );
};

export default Membership;
