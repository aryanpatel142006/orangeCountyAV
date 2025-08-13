import React from "react";
import "./footer.css";
const Footer = () => {
  return (
    <footer className="footer">
     
      <div class="new-footer_bottom">
        <div class="bottom-container">
            <div class="bottom-social-container">
                <div class="bottom-social bottom-twitter" style={{ color: "red", fontSize: "200px" }}>
                    {/* <img src="https://d35408cyocioye.cloudfront.net/new3/ic-tw.svg" alt="1"></img> */}
                    <a target="_blank" href="https://www.instagram.com/hinesh.patel/">
                    <img src="/src/assets/telegram.svg" alt="1"></img>
                    </a>
                </div>
                <div class="bottom-social bottom-facebook">
                    <a target="_blank" href="https://www.facebook.com/hineshp">
                    <img src="/src/assets/facebook.svg" alt="2"></img>
                    </a>
                </div>
                <div class="bottom-social bottom-instagram">
                    <a target="_blank" href="https://www.instagram.com/hinesh.patel/">
                    <img id="instaLogo" src="/src/assets/instagram.svg" alt="3"></img>
                    {/* <img src="/src/assets/home-theater.jpg" alt="" /> */}
                    </a>
                </div>

            </div>

        <div class="bottom-link-container desk-bottom-links">
            <a href="/privacy-policy/"><div class="bottom-link bottom-privacy">Privacy</div>
            </a>
            <a href="/terms/"> <div class="bottom-link bottom-terms">Terms of Service</div>
            </a>
            <div class="bottom-link bottom-copyright">
            Copyright ©
            <script>document.write((new Date).getFullYear());</script>2025
            Orange County AV Inc.
            </div>
        </div>
      
        
      </div>
      {/* <div class="bottom-link-container mobile-bottom-links">
        <a href="/privacy/"><div class="bottom-link bottom-privacy">Privacy Policy</div>
        </a>
        <a href="/terms/"><div class="bottom-link bottom-terms">Terms of Service</div>
        </a>
        <div class="bottom-link bottom-copyright">
          Copyright ©
          <script>document.write((new Date).getFullYear());</script>2025
          Josh.ai Inc.
        </div>
      </div> */}

      
      
    </div>

        {/* <img src="/src/assets/home-theater.jpg" alt="" /> */}
    </footer>
  );
}

export default Footer;