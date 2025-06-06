import React from "react";
// import "./Newsletter.css";

function Newsletter() {
    return (
        <section className="newsletter">
            <h2>GET OUR GYM'S SPECIAL OFFERS</h2>
            <form>
                <input type="email" placeholder="Your email address" />
                <button type="submit">Subscribe</button>
            </form>
            <div className="socials">
                <span>LET'S STAY CONNECTED</span>
                {/* Add social icons here */}
            </div>
        </section>
    );
}

export default Newsletter;
// This component renders a newsletter subscription section with an email input and a button.
// It also includes a placeholder for social media icons to encourage users to stay connected.