import React from "react";

const Classes = () => {
  return (
    <div className="mx-auto max-w-7xl mt-10 px-4">
      {/* Heading */}
      <div className="flex flex-col justify-center items-center text-center">
        <h1 className="text-[32px] sm:text-[40px] text-[#343A40] font-medium">
          Latest Classes
        </h1>
        <p className="text-sm sm:text-base">Sub Heading To Explain More</p>
      </div>

      {/* Tabs */}
      <div className="flex flex-wrap sm:flex-nowrap justify-center mt-10 mb-10 gap-4 sm:gap-10">
        {[
          "Beginners Yoga",
          "Stretching",
          "Fly-Yoga",
          "Yin Yoga",
          "Flo Yoga",
        ].map((item, index) => (
          <div
            key={index}
            className="hover:outline hover:outline-[#5F6F52] hover:text-[#5F6F52] px-4 py-2 rounded-lg cursor-pointer whitespace-nowrap"
          >
            <p>{item}</p>
          </div>
        ))}
      </div>

      {/* Class Section */}
      <div className="mt-6 sm:mt-[25px]">
        <div className="flex flex-col sm:flex-row items-start justify-center gap-10">
          <div className="flex justify-center sm:justify-start">
            <img
              src="https://res.cloudinary.com/dv5jjlsd7/image/upload/v1725784378/yoga-webdesign/ImageLeft_trfmlj.png"
              alt="latest-classes"
              className="w-full sm:w-[500px] object-contain"
            />
          </div>
          <div className="max-w-full sm:max-w-[500px]">
            <h1 className="text-[#343A40] text-[22px] sm:text-[24px] font-medium">
              Beginners Yoga
            </h1>
            <p className="text-[#495057] tracking-wider text-justify text-sm sm:text-base">
              Lorem ipsum dolor sit amet consectetur. Sed sagittis dis vitae
              suspendisse adipiscing magna arcu et nibh. Felis lectus sit
              aliquet gravida pretium dui netus et. Lacus in molestie in diam
              lorem.
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-10 mt-8 sm:mt-12">
              {[1, 2, 3, 4].map((num) => (
                <div key={num}>
                  <div className="w-[60px] h-[60px] outline outline-[#5F6F52] rounded-full flex justify-center items-center">
                    <h1 className="text-[32px] sm:text-[40px] font-light text-[#5F6F52]">
                      {num}
                    </h1>
                  </div>
                  <h1 className="text-[#495057] mt-4 text-[18px] font-medium">
                    {num % 2 === 0 ? "Changing Room" : "Free Rugs"}
                  </h1>
                  <p className="text-sm">
                    Felis lectus sit aliquet gravida pretium dui netus et. Lacus
                    in molestie in diam lorem.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Button */}
      <div className="flex justify-center items-center mt-10">
        <button className="text-white bg-[#5F6F52] px-6 py-3 rounded-lg text-sm sm:text-base">
          Get A Free Trial
        </button>
      </div>
    </div>
  );
};

export default Classes;
