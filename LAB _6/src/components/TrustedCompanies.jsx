// Trusted Companies Section - Shows company logos
function TrustedCompanies() {
  // Array of company names
  const companies = [
    'Volkswagen',
    'Samsung',
    'Cisco',
    'Vimeo',
    'P&G',
    'Hewlett Packard Enterprise',
    'Citi',
    'Ericsson',
  ];

  return (
    <section className="trusted-companies-section">
      <div className="trusted-inner">
        {/* Section Text */}
        <p className="trusted-text">
          Trusted by over 17,000 companies and millions of learners around the world
        </p>
        
        {/* Company Logos - Loop through companies array */}
        <div className="company-logos">
          {companies.map(function(name, index) {
            return (
              <div key={index} className="company-logo">
                <span className="logo-placeholder">{name}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default TrustedCompanies;
