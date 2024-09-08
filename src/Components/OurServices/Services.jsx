import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css"; // Import the Splide CSS

const Services = () => {
  return (
    <div className="mx-auto max-w-7xl">
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-[40px] text-[#343A40] font-medium">Our Services</h1>
        <p>Sub Heading To Explain More</p>
      </div>

      <div className="mt-0 relative">
        <Splide
          options={{
            type: "loop",
            perPage: 4,
            gap: "1rem", // Reduced gap between slides
            pagination: false,
            arrows: true,
            breakpoints: {
              768: {
                perPage: 1, // Adjust perPage for smaller screens
              },
              1024: {
                perPage: 2,
              },
              1280: {
                perPage: 3,
              },
            },
          }}
          className="splide-custom"
        >
          <SplideSlide>
            <div className="bg-[#F6F9FC] w-[300px] p-5 m-10 md:m-0 flex flex-col justify-center items-center rounded-xl hover:cursor-pointer">
              <img
                src="https://res.cloudinary.com/dv5jjlsd7/image/upload/v1725783583/yoga-webdesign/material-symbols_spa_zhmrzq.png"
                alt="icon-1"
                className="mt-3"
              />
              <h1 className="text-[24px] text-[#343A40] font-semibold">
                Spa Area
              </h1>
              <p className="text-center mt-3">
                Libero nunc facilisis auctor diam suspendisse pharetra nisi.
                Mauris ornare imperdiet.
              </p>
              <button className="outline outline-[#5F6F52] px-6 py-2 mt-7 mb-3 rounded-lg">
                Learn More
              </button>
            </div>
          </SplideSlide>
          <SplideSlide>
            <div className="bg-[#F6F9FC] w-[300px] p-5 m-10 md:m-0 flex flex-col justify-center items-center rounded-xl hover:cursor-pointer">
              <img
                src="https://res.cloudinary.com/dv5jjlsd7/image/upload/v1725783583/yoga-webdesign/towels_1_sibjex.png"
                alt="icon-2"
                className="mt-3"
              />
              <h1 className="text-[24px] text-[#343A40] font-semibold">
                Changing Rooms
              </h1>
              <p className="text-center mt-3">
                Libero nunc facilisis auctor diam suspendisse pharetra nisi.
                Mauris ornare imperdiet.
              </p>
              <button className="outline outline-[#5F6F52] px-6 py-2 mt-7 mb-3 rounded-lg">
                Learn More
              </button>
            </div>
          </SplideSlide>
          <SplideSlide>
            <div className="bg-[#F6F9FC] w-[300px] p-5 m-10 md:m-0 flex flex-col justify-center items-center rounded-xl hover:cursor-pointer">
              <img
                src="https://res.cloudinary.com/dv5jjlsd7/image/upload/v1725783583/yoga-webdesign/iconoir_yoga_sjmz6h.png"
                alt="icon-3"
                className="mt-3"
              />
              <h1 className="text-[24px] text-[#343A40] font-semibold">
                Free Lessons
              </h1>
              <p className="text-center mt-3">
                Libero nunc facilisis auctor diam suspendisse pharetra nisi.
                Mauris ornare imperdiet.
              </p>
              <button className="outline outline-[#5F6F52] px-6 py-2 mt-7 mb-3 rounded-lg">
                Learn More
              </button>
            </div>
          </SplideSlide>
          <SplideSlide>
            <div className="bg-[#F6F9FC] w-[300px] p-5 m-10 md:m-0 flex flex-col justify-center items-center rounded-xl hover:cursor-pointer">
              <img
                src="https://res.cloudinary.com/dv5jjlsd7/image/upload/v1725783583/yoga-webdesign/towels_1_sibjex.png"
                alt="icon-4"
                className="mt-3"
              />
              <h1 className="text-[24px] text-[#343A40] font-semibold">
                Free Rugs
              </h1>
              <p className="text-center mt-3">
                Libero nunc facilisis auctor diam suspendisse pharetra nisi.
                Mauris ornare imperdiet.
              </p>
              <button className="outline outline-[#5F6F52] px-6 py-2 mt-7 mb-3 rounded-lg">
                Learn More
              </button>
            </div>
          </SplideSlide>
        </Splide>
      </div>

      <style jsx>{`
        .splide-custom .splide__arrow {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 2.5rem;
          height: 2.5rem;
          background-color: #ffffff;
          border: 1px solid #ddd;
          border-radius: 50%;
          cursor: pointer;
          z-index: 10;
        }
        .splide-custom .splide__arrow--prev {
          margin-right: 0.5rem;
          top: 40px;
        }
        .splide-custom .splide__arrow--next {
          margin-left: 4.5rem;
          left: 20px;
        }
        .splide-custom .splide__arrow svg {
          fill: #343a40;
        }
      `}</style>
    </div>
  );
};

export default Services;
