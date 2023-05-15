import React from "react";
import { GitHubIcon, InstagramIcon, LinkedInIcon, TwitterIcon } from "assets";
import "./footer.css";
function Footer() {
  return (
    <div>
      <footer id="contact">
        <p className="footer-header">
          Made with <span className="footer-logo">{`</>`}</span> by Prajwal
          Zingare
        </p>
        <div className="social-icons-container">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/prajwalzingare"
            className="social-icons"
          >
            <GitHubIcon className="social-icon" />
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://twitter.com/zingareprajwal"
            className="social-icons"
          >
            <TwitterIcon className="social-icon" />
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.instagram.com/prajwalzingare/"
            className="social-icons"
          >
            <InstagramIcon className="social-icon" />
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/prajwal-zingare-a022a8169/"
            className="social-icons"
          >
            <LinkedInIcon className="social-icon" />
          </a>
        </div>
        <p className="footer-bottom">© 2023 | Organico</p>
      </footer>
    </div>
  );
}

export { Footer };
