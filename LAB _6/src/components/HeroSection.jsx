// Hero Section - Main banner with big title
function HeroSection() {
  return (
    <section className="hero-section">
      <div className="hero-inner">
        {/* Left side - Text content */}
        <div className="hero-content">
          <h1 className="hero-title">Jump into learning — for less</h1>
          <p className="hero-sub">
            If you're new to Udemy, we've got good news: For a limited time, 
            courses start at just £259.99 for new learners!
          </p>
          <button className="btn primary">Sign up now</button>
        </div>
        
        {/* Right side - Image placeholder */}
        <div className="hero-graphic">[Hero graphic placeholder]</div>
      </div>
    </section>
  );
}

export default HeroSection;
