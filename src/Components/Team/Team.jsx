import React from "react";

const Team = () => {
  return (
    <div className="mx-auto max-w-7xl mt-10 px-4">
      {/* Heading */}
      <div className="flex flex-col justify-center items-center text-center">
        <h1 className="text-[32px] sm:text-[40px] text-[#343A40] font-medium">
          Our Great Team
        </h1>
        <p className="text-sm sm:text-base">Sub Heading To Explain More</p>
      </div>

      {/* Description */}
      <p className="text-center mt-8 text-sm sm:text-base">
        At arcu neque aliquet laoreet. Id egestas mauris tincidunt ut nulla
        cras. Non eget sem curabitur vehicula diam integer. Magna tortor
        dignissim imperdiet pulvinar ante sed metus consequat in. Feugiat id
        ipsum lacinia nec nunc odio pellentesque.
      </p>

      {/* Team Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-10 mt-10 place-items-center">
        {[
          "https://res.cloudinary.com/dv5jjlsd7/image/upload/v1725791736/yoga-webdesign/Img_j9iaud.png",
          "https://res.cloudinary.com/dv5jjlsd7/image/upload/v1725791731/yoga-webdesign/Img_1_wgxeny.png",
          "https://res.cloudinary.com/dv5jjlsd7/image/upload/v1725791734/yoga-webdesign/Img_2_niffs0.png",
          "https://res.cloudinary.com/dv5jjlsd7/image/upload/v1725791736/yoga-webdesign/Img_3_ydqvyl.png",
          "https://res.cloudinary.com/dv5jjlsd7/image/upload/v1725791735/yoga-webdesign/Img_4_upi5yr.png",
          "https://res.cloudinary.com/dv5jjlsd7/image/upload/v1725791737/yoga-webdesign/Img_5_weqmea.png",
        ].map((url, index) => (
          <img
            key={index}
            src={url}
            alt={`team-member-${index + 1}`}
            className="w-full max-w-[300px] object-contain mt-3"
          />
        ))}
      </div>

      {/* Button */}
      <div className="flex justify-center items-center mt-10">
        <button className="outline outline-[#5F6F52] px-6 py-3 rounded-lg text-sm sm:text-base">
          Learn More About Us
        </button>
      </div>
    </div>
  );
};

export default Team;
