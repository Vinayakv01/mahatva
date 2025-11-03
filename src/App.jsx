import './App.css';

function App() {
  return (
    <div className="under-construction-container">
      {/* Mobile Layout - Animated Message */}
      <div className="mobile-construction-message">
        <div className="message-content">
          <h1 className="sorry-text">Sorry!</h1>
          <p className="construction-text">Our website is under construction</p>
          <p className="coming-soon-text">and will be coming soon...</p>
        </div>
      </div>
      
      {/* Desktop Layout - Image */}
      <img 
        src="/under costruction.png" 
        alt="Under Construction" 
        className="under-construction-image"
      />
    </div>
  );
}

export default App;
