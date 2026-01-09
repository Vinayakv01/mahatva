import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const certifications = [
  {
    src: "/UploadFiles/202206/20220601221703_966.png",
    alt: "ISO 9001 Certification",
    width: 110,
    height: 85,
  },
  {
    src: "/UploadFiles/202206/20220601221715_463.png",
    alt: "FDA Certification",
    width: 110,
    height: 86,
  },
  {
    src: "/UploadFiles/202206/20220601221727_262.png",
    alt: "REACH Compliant",
    width: 110,
    height: 86,
  },
  {
    src: "/UploadFiles/202206/20220601221739_708.png",
    alt: "RoHS Compliant",
    width: 110,
    height: 86,
  },
  {
    src: "/UploadFiles/202206/20220601221752_445.png",
    alt: "Food Contact Material Certification",
    width: 110,
    height: 86,
  },
  {
    src: "/UploadFiles/certifications/2024102115160816828551.png",
    alt: "Patent Certification Mark",
    width: 110,
    height: 86,
  },
];

const Certifications = () => {
  return (
    <section className="bg-background py-[120px] text-center">
      <div className="container mx-auto max-w-[1200px] px-5">
        <div className="mb-[60px]">
          <h2 className="mb-5 text-4xl font-semibold text-text-dark">
            <span className="text-accent">Mahatva Engineering®</span> CERTIFICATION
          </h2>
          <p className="mx-auto max-w-[800px] text-base text-muted-foreground">
            Mahatva Engineering have passed the EC European Food Industry Regulation
            requirements,FDA certification.Rohs and Reach certification
          </p>
        </div>

        <ul className="mb-[60px] flex flex-wrap items-center justify-center gap-[30px]">
          {certifications.map((cert, index) => (
            <li
              key={index}
              className="group flex h-40 w-40 items-center justify-center rounded-full bg-white shadow-[0px_5px_15px_0px_rgba(0,0,0,0.1)] transition-transform duration-300 ease-in-out hover:scale-105"
            >
              <img
                src={cert.src}
                alt={cert.alt}
                className="max-h-[86px] max-w-[110px] object-contain"
              />
            </li>
          ))}
        </ul>

        <div>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center rounded-[5px] border-2 border-accent px-10 py-2.5 text-base font-semibold text-accent transition-colors duration-300 hover:bg-accent hover:text-accent-foreground"
          >
            Get A Quote
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Certifications;

