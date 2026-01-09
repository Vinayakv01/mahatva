import { useState, useEffect } from "react";
import { FaEnvelope, FaWhatsapp, FaPhone, FaArrowUp } from "react-icons/fa";

/**
 * A fixed-position vertical sidebar with action buttons for quick contact and page navigation.
 * It includes buttons for email, WhatsApp, phone, and a scroll-to-top action.
 * The scroll-to-top button only appears after the user has scrolled down the page.
 */
const SideActionButtons = () => {
    const [isScrollButtonVisible, setScrollButtonVisible] = useState(false);

    useEffect(() => {
        /**
         * Toggles the visibility of the scroll-to-top button based on the window's scroll position.
         */
        const toggleVisibility = () => {
            if (window.scrollY > 300) {
                setScrollButtonVisible(true);
            } else {
                setScrollButtonVisible(false);
            }
        };

        window.addEventListener("scroll", toggleVisibility);

        // Cleanup the event listener on component unmount
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    /**
     * Smoothly scrolls the window to the top of the page.
     */
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    // Common Tailwind CSS classes for the action buttons to ensure a consistent look and feel.
    // Conforms to the 40-50px square size, shadow, and hover effects from the design instructions.
    const buttonBaseClasses = 
        "w-10 h-10 sm:w-11 sm:h-11 flex items-center justify-center rounded-sm text-white shadow-[0_2px_8px_rgba(0,0,0,0.1)] transition-all duration-300 ease-in-out hover:scale-110";

    return (
        <div className="fixed right-2 sm:right-4 bottom-20 sm:bottom-32 z-50 flex flex-col items-center gap-2">
            {/* Email Contact Button - Opens the default mail client. */}
            <a
                href="mailto:mhtv.engineering1@gmail.com"
                aria-label="Email Us"
                className={`${buttonBaseClasses} bg-accent hover:bg-orange-dark`}
            >
                <FaEnvelope className="w-4 h-4 sm:w-5 sm:h-5" />
            </a>
            
            {/* WhatsApp Chat Button - Opens a new tab to a WhatsApp chat. */}
            <a
                href="https://wa.me/919967205923"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat on WhatsApp"
                className={`${buttonBaseClasses} bg-[#25D366] hover:bg-[#1EBE57]`}
            >
                <FaWhatsapp className="w-4 h-4 sm:w-5 sm:h-5" />
            </a>

            {/* Phone Call Button - Initiates a call on compatible devices. */}
            <a
                href="tel:+919967205923"
                aria-label="Call Us"
                className={`${buttonBaseClasses} bg-accent hover:bg-orange-dark`}
            >
                <FaPhone className="w-4 h-4 sm:w-5 sm:h-5" />
            </a>

            {/* Scroll to Top Button - Appears on scroll and smoothly returns the user to the top. */}
            <button
                onClick={scrollToTop}
                aria-label="Scroll to top"
                className={`${buttonBaseClasses} bg-accent hover:bg-[#D32F2F] ${
                    isScrollButtonVisible
                        ? "opacity-100 scale-100"
                        : "opacity-0 scale-0 pointer-events-none"
                }`}
            >
                <FaArrowUp className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
        </div>
    );
};

export default SideActionButtons;

