import "./Newsletter.scss";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Newsletter = () => {
  return (
    <div className="newsletter-section">
      <div className="newsletter-content">
        <span className="small-text">Newsletter</span>
        <span className="big-text">Sign up for latest updates and offers</span>
        <div className="form">
          <input type="text" placeholder="Enter your email address" />
          <button>Subscribe</button>
        </div>
        <div className="text">Will be used in accordance with our policy</div>
        <div className="social-icons">
          <div className="icon">
            <Link
              to="https://www.facebook.com/profile.php?id=100008276388210"
              target="_blank"
            >
              <FaFacebookF className="ic" size={14} />
            </Link>
          </div>
          <div className="icon">
            <Link to="https://twitter.com/Rahulyadav72049" target="_blank">
              <FaTwitter className="ic" size={14} />
            </Link>
          </div>
          <div className="icon">
            <Link to="https://www.instagram.com/rahul_25141/" target="_blank">
              <FaInstagram className="ic" size={14} />
            </Link>
          </div>
          <div className="icon">
            <Link
              to="https://www.linkedin.com/in/rahul-yadav-482156223/"
              target="_blank"
            >
              <FaLinkedinIn className="ic" size={14} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
