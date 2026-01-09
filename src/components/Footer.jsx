import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Facebook, Youtube, Linkedin, MapPin, Phone, Mail } from "lucide-react";
import companyLogo from "../assets/companylogo.png";

const TikTokIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    {...props}
  >
    <path d="M16.6 5.82a4.47 4.47 0 0 1-3.23 3.23V3.62a4.47 4.47 0 0 1 3.23 2.2zM13.37 14.55v-2.8a1.24 1.24 0 0 0-1.24-1.24H9.52v5.32a2.79 2.79 0 0 0 2.79 2.79h.16a2.63 2.63 0 0 0 2.62-2.62v-1.45zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.6 9.42a4.57 4.57 0 0 0-1.8-1.1v-2.5a6.89 6.89 0 0 0-5.1-5.1v2.85a4.47 4.47 0 0 1 4.47 4.47v2.8a2.63 2.63 0 0 1-2.62 2.62h-.16a2.79 2.79 0 0 1-2.79-2.79v-5.32H5.32v5.32a5.4 5.4 0 0 0 5.4 5.4h.16a5.24 5.24 0 0 0 5.23-5.23v-4.25a1.24 1.24 0 0 0-.47-.95z" />
  </svg>
);

const CookieConsentBanner = ({ onAccept, onReject }) => {
    return (
        <div className="fixed bottom-4 left-4 right-4 sm:left-5 sm:right-auto bg-[#333333] text-white p-4 sm:p-5 rounded-md shadow-2xl max-w-sm sm:max-w-sm z-50 mx-auto sm:mx-0">
            <h4 className="font-semibold text-base mb-2">We value your privacy</h4>
            <p className="text-sm text-gray-300 mb-4">
                We use cookies to enhance your browsing experience, serve personalized ads or content, and analyze our traffic. By clicking "Accept All", you consent to our use of cookies.
            </p>
            <div className="flex justify-end gap-2">
                <button
                    onClick={onReject}
                    className="px-5 py-2 text-sm font-medium text-white bg-[#555555] hover:bg-gray-500 rounded"
                >
                    Reject
                </button>
                <button
                    onClick={onAccept}
                    className="px-5 py-2 text-sm font-medium text-white bg-black hover:bg-gray-800 rounded"
                >
                    Accept All
                </button>
            </div>
        </div>
    );
};

const FooterSection = () => {
    const [showCookieBanner, setShowCookieBanner] = useState(false);

    // Check if cookie consent is valid (within 2 days)
    const isCookieConsentValid = () => {
        const consentData = localStorage.getItem('cookieConsent');
        if (!consentData) return false;
        
        try {
            const { expirationDate } = JSON.parse(consentData);
            const now = new Date().getTime();
            const expiration = new Date(expirationDate).getTime();
            
            return now < expiration;
        } catch (error) {
            return false;
        }
    };

    // Set cookie consent with 2 days expiration
    const setCookieConsent = () => {
        const expirationDate = new Date();
        expirationDate.setDate(expirationDate.getDate() + 2); // 2 days from now
        
        const consentData = {
            accepted: true,
            expirationDate: expirationDate.toISOString()
        };
        
        localStorage.setItem('cookieConsent', JSON.stringify(consentData));
        setShowCookieBanner(false);
    };

    // Check on component mount
    useEffect(() => {
        if (!isCookieConsentValid()) {
            setShowCookieBanner(true);
        }
    }, []);

    const handleAcceptCookies = () => {
        setCookieConsent();
    };

    const handleRejectCookies = () => {
        setCookieConsent();
    };

    const socialLinks = [
        { Icon: Facebook, href: "#" },
        { Icon: Youtube, href: "#" },
        { Icon: Linkedin, href: "#" },
        { Icon: TikTokIcon, href: "#" },
    ];

    const helpLinks = [
        { name: "Home", href: "/" },
        { name: "About", href: "/about" },
        { name: "Products", href: "/products" },
        { name: "Blog", href: "/products" },
        { name: "support", href: "/about" },
        { name: "FAQ", href: "/contact" },
        { name: "Contact", href: "/contact" },
    ];

    const productLinks = [
      { name: "O-ring Pusher Mechanical Seals", href: "/products" },
      { name: "Multiple Spring Mechanical Seals", href: "/products" },
      { name: "Wave Spring Mechanical Seals", href: "/products" },
      { name: "Cartridge Mechanical seal", href: "/products" },
      { name: "Metal Bellows Mechanical Seals", href: "/products" },
      { name: "Elastomer Bellows Mechanical Seal", href: "/products" },
      { name: "Brand Pump Seals -General Industrial", href: "/products" },
      { name: "Brand Pump Seals - Food and Beverage Industry", href: "/products" },
    ];

    return (
        <>
            <footer className="bg-[#202020] text-gray-300 font-sans pt-12 sm:pt-16 md:pt-20">
                <div className="max-w-[1200px] mx-auto px-5 lg:px-0">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-12">
                        <div className="lg:col-span-1">
                            <Link to="/" className="inline-block">
                                <img
                                    src={companyLogo}
                                    alt="Mahatva Engineering Logo"
                                    className="h-[51px] w-auto"
                                />
                            </Link>
                            <p className="mt-4 sm:mt-6 text-sm text-[#cccccc] leading-6">
                                Mahatva Engineering has been designing and producing Mechanical Seals Since 2025 having 10+ years of experience in the industry.
                            </p>
                            <div className="flex items-center space-x-3 mt-6">
                                {socialLinks.map(({ Icon, href }, index) => (
                                    <a
                                        key={index}
                                        href={href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-9 h-9 flex items-center justify-center border border-[#777777] rounded-full text-white hover:bg-white hover:text-black transition-colors duration-300"
                                    >
                                        <Icon className="h-4 w-4" />
                                    </a>
                                ))}
                            </div>
                        </div>

                        <div>
                            <h3 className="text-xl font-medium text-white mb-6">Help Link</h3>
                            <ul className="space-y-1">
                                {helpLinks.map((link) => (
                                    <li key={link.name}>
                                        <Link to={link.href} className="text-sm text-[#cccccc] hover:text-white hover:underline leading-7">
                                            <span>- {link.name}</span>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-xl font-medium text-white mb-6">Company Info</h3>
                            <ul className="space-y-4">
                                <li className="flex items-start">
                                    <MapPin className="w-5 h-5 text-white mr-3 mt-1 flex-shrink-0" />
                                    <span className="text-sm text-[#cccccc] leading-6">
                                        PRANAVI ESTATE, MHATRE NAGAR, BEHIND RELIANCE PETROL PUMP, KALYAN-BHIWANDI ROAD, KON GOAN, BHIWANDI, MAHARASHTRA, PIN CODE: 421311
                                    </span>
                                </li>
                                <li className="flex items-center">
                                    <Phone className="w-4 h-4 text-white mr-3" />
                                    <span className="text-sm text-[#cccccc] leading-6">9967205923</span>
                                </li>
                                <li className="flex items-center">
                                    <Mail className="w-4 h-4 text-white mr-3" />
                                    <div className="flex flex-col">
                                        <a href="mailto:mhtv.engineering1@gmail.com" className="text-sm text-[#cccccc] leading-6 hover:text-white hover:underline">
                                            mhtv.engineering1@gmail.com
                                        </a>
                                        <a href="mailto:info@mahatvaengieneering.com" className="text-sm text-[#cccccc] leading-6 hover:text-white hover:underline">
                                            info@mahatvaengieneering.com
                                        </a>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-xl font-medium text-white mb-6">Mahatva Engineering Products</h3>
                            <ul className="space-y-1">
                                {productLinks.map((link) => (
                                    <li key={link.name}>
                                        <Link to={link.href} className="text-sm text-[#cccccc] hover:text-white hover:underline leading-7">
                                            <span>- {link.name}</span>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div className="mt-8 sm:mt-12 md:mt-14 pt-6 sm:pt-8 pb-6 sm:pb-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-center gap-4">
                        <p className="text-xs text-[#999999] mb-4 md:mb-0">
                            Copyright © {new Date().getFullYear()} Mahatva Engineering All rights reserved.
                        </p>
                        <div className="text-xs text-[#999999] flex flex-wrap justify-center items-center gap-x-2">
                            <Link to="/privacy" className="hover:text-white">Privacy Policy</Link>
                            <span className="hidden sm:inline">|</span>
                            <Link to="/terms" className="hover:text-white">Sitemaps</Link>
                        </div>
                    </div>
                </div>
                {showCookieBanner && <CookieConsentBanner onAccept={handleAcceptCookies} onReject={handleRejectCookies} />}
            </footer>
        </>
    );
};

export default FooterSection;
