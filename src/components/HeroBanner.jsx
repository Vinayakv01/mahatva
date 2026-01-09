import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Navigation } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";
import carousal1 from "../assets/carousal1.jpeg";
import carousal2 from "../assets/carousal2.jpeg";
import carousal3 from "../assets/carousal3.jpeg";
import carousal4 from "../assets/carousal4.jpeg";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";

const slides = [
  {
    src: carousal1,
    alt: "Mahatva Engineering Manufacturing capability with various mechanical seals displayed.",
    headline: "Mahatva Engineering<sup class='align-super text-3xl font-bold text-white'>®</sup> Are Able To Manufactory<br/>Any Type Of <span class='text-white'>Mechanical Seal</span>",
    subheading: "Including Standard Componet Seal<br/>And Speical Custom-Engineered Seals",
  },
  {
    src: carousal2,
    alt: "A collection of shiny metal mechanical seal components.",
    headline: "Mahatva Engineering<sup class='align-super text-3xl font-bold text-white'>®</sup> Are Able To Manufactory<br/>Any Type Of <span class='text-white'>Mechanical Seal</span>",
    subheading: "Including Standard Componet Seal<br/>And Speical Custom-Engineered Seals",
  },
  {
    src: carousal3,
    alt: "Close-up of a complex mechanical seal assembly.",
    headline: "Mahatva Engineering<sup class='align-super text-3xl font-bold text-white'>®</sup> Are Able To Manufactory<br/>Any Type Of <span class='text-white'>Mechanical Seal</span>",
    subheading: "Including Standard Componet Seal<br/>And Speical Custom-Engineered Seals",
  },
  {
    src: carousal4,
    alt: "Mechanical seal manufacturing and engineering.",
    headline: "Mahatva Engineering<sup class='align-super text-3xl font-bold text-white'>®</sup> Are Able To Manufactory<br/>Any Type Of <span class='text-white'>Mechanical Seal</span>",
    subheading: "Including Standard Componet Seal<br/>And Speical Custom-Engineered Seals",
  },
];

const HeroBanner = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section
      id="ibframe"
      className="relative w-full aspect-[1920/920] max-h-[920px] overflow-hidden group bg-gray-900"
    >
      <Swiper
        modules={[Autoplay, EffectFade, Navigation]}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        loop={true}
        navigation={{
          nextEl: ".swiper-button-next-hero",
          prevEl: ".swiper-button-prev-hero",
        }}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        className="w-full h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index} className="relative w-full h-full">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${slide.src})` }}
            />
            <div className="absolute inset-0 bg-[rgba(0,0,0,0.5)]"></div>
            <div className="absolute inset-0 flex items-center">
              <div className="container mx-auto px-5 md:px-10 lg:px-[60px]">
                <div
                  className="w-full md:w-3/5 lg:w-[45%] text-left text-white transition-all duration-1000 ease-out"
                  style={{
                    opacity: activeIndex === index ? 1 : 0,
                    transform:
                      activeIndex === index
                        ? "translateY(0)"
                        : "translateY(20px)",
                    transitionDelay: activeIndex === index ? "0.5s" : "0s",
                  }}
                >
                  {slide.headline && (
                    <h1
                      className="text-5xl font-bold leading-tight drop-shadow-md text-white"
                      dangerouslySetInnerHTML={{ __html: slide.headline }}
                    />
                  )}
                  {slide.subheading && (
                    <p
                      className="mt-6 text-xl leading-relaxed drop-shadow-md text-white"
                      dangerouslySetInnerHTML={{
                        __html: slide.subheading,
                      }}
                    />
                  )}
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="swiper-button-prev-hero absolute top-1/2 left-4 md:left-10 -translate-y-1/2 z-10 cursor-pointer p-2 rounded-full bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-black/40">
        <ChevronLeft className="w-8 h-8 md:w-10 md:h-10 text-white" />
      </div>
      <div className="swiper-button-next-hero absolute top-1/2 right-4 md:right-10 -translate-y-1/2 z-10 cursor-pointer p-2 rounded-full bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-black/40">
        <ChevronRight className="w-8 h-8 md:w-10 md:h-10 text-white" />
      </div>
    </section>
  );
};

export default HeroBanner;

