import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import AOS from "aos";

import "swiper/css";
import "swiper/css/navigation";
import "aos/dist/aos.css";

const applications = [
  {
    name: "Food",
    icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/d6064255-48bc-4eb5-b1fc-2e0647dd5996-tngseal-com/assets/images/og2024102210065465415794_png-22.webp",
    delay: 0,
  },
  {
    name: "Chemcial",
    icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/d6064255-48bc-4eb5-b1fc-2e0647dd5996-tngseal-com/assets/images/og2024102210071171190731_png-23.webp",
    delay: 100,
  },
  {
    name: "Pharmaceutical",
    icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/d6064255-48bc-4eb5-b1fc-2e0647dd5996-tngseal-com/assets/images/og2024102210072472463158_png-24.webp",
    delay: 200,
  },
  {
    name: "Water",
    icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/d6064255-48bc-4eb5-b1fc-2e0647dd5996-tngseal-com/assets/images/og202410221007397398442_png-25.webp",
    delay: 300,
  },
];

const FieldsOfApplication = () => {
  useEffect(() => {
    AOS.init({
      easing: "ease-out-back",
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <section
      id="frame3"
      className="relative bg-cover bg-center py-20 lg:py-[120px]"
      style={{ 
        backgroundImage: "url('/images/bg3.jpg.webp')", 
        backgroundColor: "#1f2937", 
        backgroundPosition: "center", 
        backgroundRepeat: "no-repeat", 
        backgroundSize: "cover" 
      }}
    >
      <div className="container mx-auto px-5 relative z-10">
        <div className="text-center mb-12" data-aos="zoom-in">
          <h2 
            className="text-accent text-2xl sm:text-3xl md:text-4xl lg:text-[36px] font-semibold leading-tight mb-3 sm:mb-4"
          >
            FIELDS OF APPLICATION
          </h2>
          <p className="text-white text-base sm:text-lg">
            Provide sealing solutions for customers in the global industrial feilds
          </p>
        </div>
        
        <div className="relative max-w-full lg:max-w-[1100px] mx-auto">
          <Swiper
            modules={[Navigation]}
            spaceBetween={30}
            slidesPerView={1}
            loop={true}
            breakpoints={{
              640: { slidesPerView: 2 },
              768: { slidesPerView: 3 },
              1024: { slidesPerView: 4 },
            }}
            navigation={{
              nextEl: ".swiper-button-next-custom-fields",
              prevEl: ".swiper-button-prev-custom-fields",
            }}
            className="!pb-2"
          >
            {applications.map((app, index) => (
              <SwiperSlide key={index}>
                <div 
                  data-aos="fade-up" 
                  data-aos-delay={app.delay}
                >
                  <a href="#" className="block text-center p-4 sm:p-6 border border-white/20 bg-white/5 h-[160px] sm:h-[190px] flex flex-col justify-center items-center group hover:scale-105 transition-transform duration-300">
                    <div className="mb-3 sm:mb-5">
                      <img src={app.icon} alt={app.name} className="w-[50px] h-[50px] sm:w-[60px] sm:h-[60px] object-contain" />
                    </div>
                    <h3 className="text-white text-base sm:text-xl font-medium">{app.name}</h3>
                  </a>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <button className="swiper-button-prev-custom-fields absolute top-1/2 -translate-y-1/2 left-2 sm:left-4 md:-left-12 text-white p-1.5 sm:p-2 rounded-full border border-white/50 hover:bg-white/10 transition-colors z-20 bg-black/20">
            <ChevronLeft size={24} className="sm:w-8 sm:h-8" />
          </button>
          <button className="swiper-button-next-custom-fields absolute top-1/2 -translate-y-1/2 right-2 sm:right-4 md:-right-12 text-white p-1.5 sm:p-2 rounded-full border border-white/50 hover:bg-white/10 transition-colors z-20 bg-black/20">
            <ChevronRight size={24} className="sm:w-8 sm:h-8" />
          </button>
        </div>

        <div className="text-center mt-12" data-aos="fade-up" data-aos-delay="400">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 text-accent border border-accent rounded-sm px-6 py-2.5 text-base font-semibold hover:bg-accent hover:text-white transition-colors"
          >
            Get A Quote
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FieldsOfApplication;

