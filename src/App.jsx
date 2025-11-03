import './App.css';

// Contact Buttons Component
const ContactButtons = ({ delay = '', showTitle = true }) => {
  return (
    <div className={`flex flex-col items-center gap-4 relative top-40 mt-8 md:mt-0 ${delay}`}>
      {showTitle && (
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-2 drop-shadow-[2px_2px_4px_rgba(0,0,0,0.5)]">
          Reach us on
        </h2>
      )}
      <div className="flex gap-4 w-full max-w-3xl">
        <a 
          href="https://wa.me/919967205923" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-3 px-6 py-4 rounded-xl text-base md:text-lg font-semibold text-white bg-gradient-to-r from-[#25D366] to-[#128C7E] hover:from-[#128C7E] hover:to-[#25D366] shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 active:translate-y-0 relative overflow-hidden group"
        >
          <svg className="w-5 h-5 md:w-6 md:h-6 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.372a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
          </svg>
          <span className="hidden sm:inline">WhatsApp</span>
          <span className="sm:hidden">WA</span>
          <span className="absolute inset-0 w-0 h-0 bg-white/30 rounded-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 group-hover:w-[300px] group-hover:h-[300px] transition-all duration-[600ms]"></span>
        </a>
        
        <a 
          href="tel:+919967205923" 
          className="flex-1 flex items-center justify-center gap-3 px-4 py-4 rounded-xl text-base md:text-lg font-semibold text-white bg-gradient-to-r from-[#34C759] to-[#28A745] hover:from-[#28A745] hover:to-[#34C759] shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 active:translate-y-0 relative overflow-hidden group"
        >
          <svg className="w-5 h-5 md:w-6 md:h-6 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
            <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
          </svg>
          <span className="hidden sm:inline">Call</span>
          <span className="sm:hidden">📞</span>
          <span className="absolute inset-0 w-0 h-0 bg-white/30 rounded-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 group-hover:w-[300px] group-hover:h-[300px] transition-all duration-[600ms]"></span>
        </a>
        
        <a 
          href="mailto:info@mahatvaengineering.com" 
          className="flex-1 flex items-center justify-center gap-3 px-4 py-4 rounded-xl text-base md:text-lg font-semibold text-white bg-gradient-to-r from-[#FF6B6B] to-[#EE5A6F] hover:from-[#EE5A6F] hover:to-[#FF6B6B] shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 active:translate-y-0 relative overflow-hidden group"
        >
          <svg className="w-5 h-5 md:w-6 md:h-6 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
            <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
          </svg>
          <span className="hidden sm:inline">Email</span>
          <span className="sm:hidden">✉</span>
          <span className="absolute inset-0 w-0 h-0 bg-white/30 rounded-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 group-hover:w-[300px] group-hover:h-[300px] transition-all duration-[600ms]"></span>
        </a>
      </div>
    </div>
  );
};

function App() {
  return (
    <div className="w-full h-screen m-0 p-0 overflow-hidden flex items-center justify-center bg-black relative">
      {/* Desktop Layout - Image with Overlay Buttons */}
      <img 
        src="/under costruction.png" 
        alt="Under Construction" 
        className="hidden md:block w-full h-full object-cover"
      />
      
      {/* Desktop Contact Buttons Overlay */}
      <div className="hidden md:flex absolute inset-0 items-center justify-center z-10">
        <ContactButtons showTitle={true} />
      </div>
      
      {/* Mobile Layout - Animated Message */}
      <div className="md:hidden flex items-center justify-center w-full h-screen bg-gradient-to-br from-[#667eea] to-[#764ba2] absolute top-0 left-0 z-10">
        <div className="text-center px-8 text-white">
          <h1 className="text-5xl font-bold mb-6 animate-[fadeInDown_1s_ease-out,pulse_2s_ease-in-out_infinite_1s] drop-shadow-[2px_2px_4px_rgba(0,0,0,0.3)]">
            Sorry!
          </h1>
          <p className="text-2xl mb-4 animate-[fadeInUp_1s_ease-out_0.5s_both] font-medium drop-shadow-[1px_1px_2px_rgba(0,0,0,0.3)]">
            Our website is under construction
          </p>
          <p className="text-xl mb-10 animate-[fadeInUp_1s_ease-out_1s_both] italic opacity-90 drop-shadow-[1px_1px_2px_rgba(0,0,0,0.3)]">
            and will be coming soon...
          </p>
          
          <ContactButtons delay="animate-[fadeInUp_1s_ease-out_1.5s_both]" showTitle={true} />
        </div>
      </div>
    </div>
  );
}

export default App;
