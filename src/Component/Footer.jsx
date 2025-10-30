import "./Navbar.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-brand">
          <h2>Shop Non-Stop on Meesho</h2>
          <p>Trusted by crores of Indians</p>
          <p>Cash on Delivery | Free Delivery</p>

          <div className="app-links">
            <a href="#">Google Play Store</a>
            <a href="#">App Store</a>
          </div>
        </div>

        <div className="footer-links">
          <div>
            <h4>Company</h4>
            <ul>
              <li>
                <a href="#">Careers</a>
              </li>
              <li>
                <a href="#">Become a supplier</a>
              </li>
              <li>
                <a href="#">Hall of Fame</a>
              </li>
              <li>
                <a href="#">Sitemap</a>
              </li>
            </ul>
          </div>

          <div>
            <h4>Legal</h4>
            <ul>
              <li>
                <a href="#">Legal and Policies</a>
              </li>
              <li>
                <a href="#">Meesho Tech Blog</a>
              </li>
              <li>
                <a href="#">Notices and Returns</a>
              </li>
            </ul>
          </div>

          <div>
            <h4>Contact</h4>
            <ul>
              <li>
                <a href="#">Facebook</a>
              </li>
              <li>
                <a href="#">Instagram</a>
              </li>
              <li>
                <a href="#">YouTube</a>
              </li>
              <li>
                <a href="#">LinkedIn</a>
              </li>
              <li>
                <a href="#">Twitter</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          Meesho Technologies Private Limited
          <br />
          CIN: U62099KA2024PTC186568
          <br />
          3rd Floor, Wing-E, Helios Business Park, Kadubeesanahalli Village,
          Varthur Hobli, Outer Ring Road Bellandur, Bangalore, Karnataka, India,
          560103
        </p>
        <p>
          E-mail address: <a href="mailto:query@meesho.com">query@meesho.com</a>
        </p>
        <p>© 2015-2025 Meesho.com</p>
      </div>
    </footer>
  );
}
