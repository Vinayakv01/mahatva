import { useState } from "react";
import { X } from "lucide-react";

const companyLogoUrl = "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/d6064255-48bc-4eb5-b1fc-2e0647dd5996-tngseal-com/assets/icons/GCimg-1.png";

const FloatingContactPopup = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = () => setIsOpen(!isOpen);

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const data = Object.fromEntries(formData.entries());
        console.log("Form submitted:", data);
        alert('Thank you for your message! (Submission simulated)');
        setIsOpen(false);
        e.currentTarget.reset();
    };

    return (
        <div className="fixed bottom-4 right-4 md:bottom-8 md:right-8 z-50 flex flex-col items-end">
            {/* Popup Form */}
            {isOpen && (
                <div 
                    className="w-[340px] bg-secondary rounded-lg shadow-2xl mb-4 animate-in fade-in-0 slide-in-from-bottom-5 duration-300"
                >
                   {/* Header */}
                   <div className="flex justify-between items-center p-4 border-b border-border">
                       <img src={companyLogoUrl} alt="Mahatva Engineering Logo" className="h-[21px] w-auto" />
                       <button onClick={handleToggle} className="text-muted-foreground hover:text-foreground transition-colors">
                           <X size={24} />
                       </button>
                   </div>

                   {/* Form */}
                   <form onSubmit={handleSubmit} className="p-6 space-y-4">
                        <input
                            name="name"
                            type="text"
                            placeholder="Name*"
                            required
                            className="w-full p-3 bg-card border border-input rounded-sm text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring"
                        />
                        <input
                            name="email"
                            type="email"
                            placeholder="E-mail*"
                            required
                            className="w-full p-3 bg-card border border-input rounded-sm text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring"
                        />
                         <input
                            name="phone"
                            type="tel"
                            placeholder="Phone"
                            className="w-full p-3 bg-card border border-input rounded-sm text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring"
                        />
                        <textarea
                            name="message"
                            placeholder="Message*"
                            required
                            rows={4}
                            className="w-full p-3 bg-card border border-input rounded-sm text-sm resize-none placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring"
                        ></textarea>

                        <button
                            type="submit"
                            className="w-full bg-accent text-accent-foreground py-3 px-4 rounded-sm font-semibold hover:bg-orange-dark transition-colors"
                        >
                            Submit
                        </button>
                   </form>
                </div>
            )}


            {/* Trigger Button */}
            <button
                onClick={handleToggle}
                className="w-16 h-16 bg-accent rounded-full flex items-center justify-center shadow-lg cursor-pointer transform transition-transform hover:scale-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ring-offset-background"
                aria-label={isOpen ? "Close contact form" : "Open contact form"}
            >
                <img src={companyLogoUrl} alt="Mahatva Engineering Contact" className="h-[10px] w-auto" />
            </button>
        </div>
    );
};

export default FloatingContactPopup;

