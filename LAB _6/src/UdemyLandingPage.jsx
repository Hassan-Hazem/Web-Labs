// Import all the section components
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import SkillsSection from './components/SkillsSection';
import AIEraSection from './components/AIEraSection';
import CourseList from './components/CourseList';
import TrustedCompanies from './components/TrustedCompanies';
import Footer from './components/Footer';

// Main component that puts everything together
function UdemyLandingPage() {
  return (
    <div className="udemy-landing-page">
      {/* Promotional Banner at the top */}
      <div className="promo-banner">
        <div className="promo-content">
          <span className="promo-text">
            <strong>New-learner offer</strong> | Courses from £E259.99. Click button to see savings.
          </span>
          <span className="promo-timer">Ends in 5h 56m 33s.</span>
        </div>
        <button className="btn-redeem">Click to redeem</button>
      </div>
      
      {/* Header Component */}
      <Header />
      
      {/* Main Content - All sections */}
      <main className="main-content">
        <HeroSection />
        <SkillsSection />
        <AIEraSection />
        <CourseList />
        <TrustedCompanies />
      </main>
      
      {/* Footer Component */}
      <Footer />
    </div>
  );
}

export default UdemyLandingPage;
