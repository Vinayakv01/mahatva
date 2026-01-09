import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import image1 from "../../assets/image1.jpeg";
import image2 from "../../assets/image2.jpeg";

const AboutMahatva = () => {
  return (
    <section className="relative w-full text-white">
      {/* Container for the grid of images, acts as a background */}
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* Large image on the left, visible on all screen sizes */}
        <div className="relative h-[500px] lg:h-[700px]">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${image1})`
            }}
          />
        </div>

        {/* Two smaller images on the right, stacked vertically, hidden on mobile */}
        <div className="hidden lg:grid grid-rows-2 h-[700px]">
          <div className="relative">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `url(${image2})`
              }}
            />
          </div>
          <div className="relative">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `url(${image1})`
              }}
            />
          </div>
        </div>
      </div>

      {/* Text overlay content */}
      <div className="absolute inset-0 flex items-center justify-center lg:justify-start bg-gray-900/60 lg:bg-transparent">
        <div className="lg:ml-16 w-11/12 max-w-lg lg:max-w-xl xl:max-w-2xl bg-[rgba(0,0,0,0.75)] backdrop-blur-[2px] p-4 sm:p-6 md:p-10 lg:p-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-white mb-2 sm:mb-3">
            About Mahatva Engineering<sup className="text-white">®</sup>
          </h2>
          <p className="text-sm sm:text-base lg:text-lg font-medium text-white mb-3 sm:mb-4">
            Mahatva Engineering designing and manufacturing Mechanical Seals Since 1982
          </p>
          <div className="space-y-3 sm:space-y-4 text-xs sm:text-sm lg:text-base leading-relaxed">
            <p className="text-white">
              Offering the widest range of standard mechanical seal from any compnay anywhere. Mahatva Engineering developed Elastomer Bellow mechanical seal,O-ring pusher mechanical seal seal,Metal Bellow mechanical seal, PTFE Bellowmechanical seal and O.E.M Pump mechanical seal (Grundfos Pump seal,APV pumpseal, Alfa Laval pump seal).
            </p>
            <p className="text-white">
              Mahatva Engineering obtained patent certification for mechanical seal design "Liquid lubricating end surface sealing structurewith trans-scale surface texture characteristics"
            </p>
          </div>
          <Link
            to="/about"
            className="inline-flex items-center font-semibold text-white mt-4 sm:mt-6 md:mt-8 text-sm sm:text-base transition-colors duration-300 hover:text-accent group"
          >
            Learn More
            <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AboutMahatva;

