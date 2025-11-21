// Footer Component - Bottom section with links and info
function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        {/* Footer Links Grid */}
        <div className="footer-links">
          {/* About Section */}
          <div className="footer-column">
            <h3 className="footer-title">About</h3>
            <ul className="footer-list">
              <li><a href="#" className="footer-link">About us</a></li>
              <li><a href="#" className="footer-link">Careers</a></li>
              <li><a href="#" className="footer-link">Contact us</a></li>
              <li><a href="#" className="footer-link">Blog</a></li>
              <li><a href="#" className="footer-link">Investors</a></li>
            </ul>
          </div>

          {/* Discover Udemy Section */}
          <div className="footer-column">
            <h3 className="footer-title">Discover Udemy</h3>
            <ul className="footer-list">
              <li><a href="#" className="footer-link">Get the app</a></li>
              <li><a href="#" className="footer-link">Teach on Udemy</a></li>
              <li><a href="#" className="footer-link">Plans and Pricing</a></li>
              <li><a href="#" className="footer-link">Affiliate</a></li>
              <li><a href="#" className="footer-link">Help and Support</a></li>
            </ul>
          </div>

          {/* Udemy for Business Section */}
          <div className="footer-column">
            <h3 className="footer-title">Udemy for Business</h3>
            <ul className="footer-list">
              <li><a href="#" className="footer-link">Udemy Business</a></li>
            </ul>
          </div>

          {/* Legal & Accessibility Section */}
          <div className="footer-column">
            <h3 className="footer-title">Legal & Accessibility</h3>
            <ul className="footer-list">
              <li><a href="#" className="footer-link">Accessibility statement</a></li>
              <li><a href="#" className="footer-link">Privacy policy</a></li>
              <li><a href="#" className="footer-link">Sitemap</a></li>
              <li><a href="#" className="footer-link">Terms</a></li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom - Logo and Copyright */}
        <div className="footer-bottom">
          <div className="footer-logo">Udemy</div>
          <div className="footer-copyright">© 2025 Udemy, Inc.</div>
          <div className="footer-settings">
            <a href="#" className="footer-link">Cookie settings</a>
          </div>
          <div className="footer-language">Eng</div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
