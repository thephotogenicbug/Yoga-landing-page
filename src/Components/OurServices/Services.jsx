import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

const Services = () => {
  return (
    <div className="mx-auto max-w-7xl px-4">
      {/* Heading */}
      <div className="flex flex-col justify-center items-center text-center">
        <h1 className="text-[32px] sm:text-[40px] text-[#343A40] font-medium">
          Our Services
        </h1>
        <p className="text-sm sm:text-base">Sub Heading To Explain More</p>
      </div>

      {/* Carousel */}
      <div className="mt-6 sm:mt-0 relative">
        <Splide
          options={{
            type: "loop",
            perPage: 4,
            gap: "1rem",
            pagination: false,
            arrows: true,
            breakpoints: {
              480: {
                perPage: 1,
              },
              768: {
                perPage: 1,
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
          {[
            {
              title: "Spa Area",
              img: "https://res.cloudinary.com/dv5jjlsd7/image/upload/v1725783583/yoga-webdesign/material-symbols_spa_zhmrzq.png",
            },
            {
              title: "Changing Rooms",
              img: "https://res.cloudinary.com/dv5jjlsd7/image/upload/v1725783583/yoga-webdesign/towels_1_sibjex.png",
            },
            {
              title: "Free Lessons",
              img: "https://res.cloudinary.com/dv5jjlsd7/image/upload/v1725783583/yoga-webdesign/iconoir_yoga_sjmz6h.png",
            },
            {
              title: "Free Rugs",
              img: "https://res.cloudinary.com/dv5jjlsd7/image/upload/v1725783583/yoga-webdesign/towels_1_sibjex.png",
            },
          ].map((service, index) => (
            <SplideSlide key={index}>
              <div className="bg-[#F6F9FC] w-full max-w-[300px] mx-auto p-5 sm:m-5 flex flex-col justify-center items-center rounded-xl hover:cursor-pointer">
                <img
                  src={service.img}
                  alt={service.title}
                  className="mt-3 w-[50px]"
                />
                <h1 className="text-[20px] sm:text-[24px] text-[#343A40] font-semibold mt-4 text-center">
                  {service.title}
                </h1>
                <p className="text-center mt-3 text-sm sm:text-base">
                  Libero nunc facilisis auctor diam suspendisse pharetra nisi.
                  Mauris ornare imperdiet.
                </p>
                <button className="outline outline-[#5F6F52] px-6 py-2 mt-6 mb-3 rounded-lg text-sm">
                  Learn More
                </button>
              </div>
            </SplideSlide>
          ))}
        </Splide>
      </div>

      {/* Custom CSS for arrows */}
      <style jsx>{`
        .splide-custom .splide__arrow {
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
          left: -1rem;
        }

        .splide-custom .splide__arrow--next {
          right: -1rem;
        }

        .splide-custom .splide__arrow svg {
          fill: #343a40;
        }

        @media (max-width: 640px) {
          .splide-custom .splide__arrow--prev {
            left: 0;
          }
          .splide-custom .splide__arrow--next {
            right: 0;
          }
        }
      `}</style>
    </div>
  );
};

export default Services;
