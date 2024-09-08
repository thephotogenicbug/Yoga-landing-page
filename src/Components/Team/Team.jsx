import React from "react";

const Team = () => {
  return (
    <div className=" mx-auto max-w-7xl mt-10">
      <div className=" flex flex-col justify-center items-center">
        <h1 className=" text-[40px] text-[#343A40] font-medium">
          Our Great Team
        </h1>
        <p>Sub Heading To Explain More</p>
      </div>
      <p className=" text-center mt-10">
        At arcu neque aliquet laoreet. Id egestas mauris tincidunt ut nulla
        cras. Non eget sem curabitur vehicula diam integer. Magna tortor
        dignissim imperdiet pulvinar ante sed metus consequat in. Feugiat id
        ipsum lacinia nec nunc odio pellentesque.
      </p>
      <div className=" grid grid-cols-3  gap-y-10 mt-10">
        <div>
          <img
            src="https://res.cloudinary.com/dv5jjlsd7/image/upload/v1725791736/yoga-webdesign/Img_j9iaud.png"
            alt="image-1"
            className=" mt-3 w-[350px] object-contain"
          />
        </div>
        <div>
          <img
            src="https://res.cloudinary.com/dv5jjlsd7/image/upload/v1725791731/yoga-webdesign/Img_1_wgxeny.png"
            alt="image-2"
            className=" mt-3 w-[350px] object-contain"
          />
        </div>
        <div>
          <img
            src="https://res.cloudinary.com/dv5jjlsd7/image/upload/v1725791734/yoga-webdesign/Img_2_niffs0.png"
            alt="image-3"
            className=" mt-3 w-[350px] object-contain"
          />
        </div>
        <div>
          <img
            src="https://res.cloudinary.com/dv5jjlsd7/image/upload/v1725791736/yoga-webdesign/Img_3_ydqvyl.png"
            alt="image-4"
            className=" mt-3 w-[350px] object-contain"
          />
        </div>
        <div>
          <img
            src="https://res.cloudinary.com/dv5jjlsd7/image/upload/v1725791735/yoga-webdesign/Img_4_upi5yr.png"
            alt="image-5"
            className=" mt-3 w-[350px] object-contain"
          />
        </div>
        <div>
          <img
            src="https://res.cloudinary.com/dv5jjlsd7/image/upload/v1725791737/yoga-webdesign/Img_5_weqmea.png"
            alt="image-6"
            className=" mt-3 w-[350px] object-contain"
          />
        </div>
      </div>
      <div className="flex justify-center items-center mt-10">
        <button className=" outline outline-[#5F6F52] px-4 py-2  rounded-lg">
          Learn More About Us
        </button>
      </div>
    </div>
  );
};

export default Team;
