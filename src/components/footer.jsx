import "/src/components/style/footer.css";

export default function Footer (){
    return (
      <>
        <footer>
          <div className="footer-container">
            <div className="footer-section">
              <h4>Features</h4>
              <ul>
                <li>Contactless Payments</li>
                <li>Every Card Network</li>
                <li>Multi-Currency</li>
                <li>Discovery, Ips & Taxes</li>
              </ul>
            </div>
            <div className="footer-section">
              <h4>Industry</h4>
              <ul>
                <li>Retail</li>
                <li>Food And Restaurants</li>
                <li>Professionals Service</li>
                <li>Healthcare</li>
              </ul>
            </div>
            <div className="footer-section">
              <h4>Scale</h4>
              <ul>
                <li>Growing Startups</li>
                <li>Enterprise</li>
                <li>High-Growth</li>
              </ul>
            </div>
            <div className="footer-section">
              <h4>Subscribe to our Newsletter</h4>
              <p>
                We built Norood for Businesses of all shapes and sizes, with
                varied needs.
              </p>
              <form>
                <input type="email" placeholder="Enter your email" /> 
                <div>

                <button type="submit">Subscribe</button>
                </div>
              </form>
            </div>
          </div>
        </footer>
      </>
    );
}