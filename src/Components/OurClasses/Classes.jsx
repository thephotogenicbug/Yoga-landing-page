import React from "react";

const Classes = () => {
  return (
    <div className="mx-auto max-w-7xl mt-10">
      <div className=" flex flex-col justify-center items-center">
        <h1 className=" text-[40px] text-[#343A40] font-medium">
          Latest Classes
        </h1>
        <p>Sub Heading To Explain More</p>
      </div>
      <div className=" flex flex-row justify-center mt-10 mb-10  space-x-10">
        <div className=" hover:outline  hover:outline-[#5F6F52] hover:text-[#5F6F52] px-4 py-2 rounded-lg cursor-pointer">
          <p>Beginners Yoga</p>
        </div>
        <div className=" hover:outline  hover:outline-[#5F6F52] hover:text-[#5F6F52] px-4 py-2 rounded-lg cursor-pointer">
          <p>Stretching</p>
        </div>
        <div className=" hover:outline  hover:outline-[#5F6F52] hover:text-[#5F6F52] px-4 py-2 rounded-lg cursor-pointer">
          <p>Fly-Yoga</p>
        </div>
        <div className=" hover:outline  hover:outline-[#5F6F52] hover:text-[#5F6F52] px-4 py-2 rounded-lg cursor-pointer">
          <p>Yin Yoga</p>
        </div>
        <div className=" hover:outline  hover:outline-[#5F6F52] hover:text-[#5F6F52] px-4 py-2 rounded-lg cursor-pointer">
          <p>Flo Yoga</p>
        </div>
      </div>
      <div className="mt-[25px]">
        <div className="flex items-start justify-start gap-10">
          <div>
            <img
              src="https://res.cloudinary.com/dv5jjlsd7/image/upload/v1725784378/yoga-webdesign/ImageLeft_trfmlj.png"
              alt="latest-classes"
              className="w-[500px] object-contain"
            />
          </div>
          <div className="max-w-[500px]">
            <h1 className="text-[#343A40] text-[24px] font-medium">
              Beginners Yoga
            </h1>
            <p className="text-[#495057] tracking-wider text-justify">
              Lorem ipsum dolor sit amet consectetur. Sed sagittis dis vitae
              suspendisse adipiscing magna arcu et nibh. Felis lectus sit
              aliquet gravida pretium dui netus et. Lacus in molestie in diam
              lorem.
            </p>
            <div className=" grid grid-cols-2 gap-10 mt-12">
              <div>
                <div className=" w-[60px] h-[60px] outline outline-[#5F6F52] rounded-full flex justify-center items-center">
                  <h1 className=" text-[40px] font-light text-[#5F6F52]">1</h1>
                </div>
                <h1 className="text-[#495057] mt-5 text-[20px] font-medium">
                  Free Rugs
                </h1>
                <p>
                  Felis lectus sit aliquet gravida pretium dui netus et. Lacus
                  in molestie in diam lorem.
                </p>
              </div>
              <div className="">
                <div className=" w-[60px] h-[60px] outline outline-[#5F6F52] rounded-full flex justify-center items-center">
                  <h1 className=" text-[40px] font-light text-[#5F6F52]">2</h1>
                </div>
                <h1 className="text-[#495057] mt-5 text-[20px] font-medium">
                  Changing Room
                </h1>
                <p>
                  Felis lectus sit aliquet gravida pretium dui netus et. Lacus
                  in molestie in diam lorem.
                </p>
              </div>
              <div>
                <div className=" w-[60px] h-[60px] outline outline-[#5F6F52] rounded-full flex justify-center items-center">
                  <h1 className=" text-[40px] font-light text-[#5F6F52]">3</h1>
                </div>
                <h1 className="text-[#495057] mt-5 text-[20px] font-medium">
                  Free Rugs
                </h1>
                <p>
                  Felis lectus sit aliquet gravida pretium dui netus et. Lacus
                  in molestie in diam lorem.
                </p>
              </div>
              <div>
                <div className=" w-[60px] h-[60px] outline outline-[#5F6F52] rounded-full flex justify-center items-center">
                  <h1 className=" text-[40px] font-light text-[#5F6F52]">4</h1>
                </div>
                <h1 className="text-[#495057] mt-5 text-[20px] font-medium">
                  Changing Room
                </h1>
                <p>
                  Felis lectus sit aliquet gravida pretium dui netus et. Lacus
                  in molestie in diam lorem.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" flex justify-center items-center mt-10">
        <button className="text-white bg-[#5F6F52] px-4 py-2 rounded-lg">
          Get A Free Trail
        </button>
      </div>
    </div>
  );
};

export default Classes;
