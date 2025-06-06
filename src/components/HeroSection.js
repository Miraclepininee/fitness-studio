import React from "react";
import "./HeroSection.css";

function HeroSection() {
    return (
        <section className="hero">
            <img src="/images/hero-athlete.png" alt="Athlete" className="hero-img" />
            <div className="hero-text">
                <h2>STATE-OF-THE-ART GYM</h2>
                <h1>ENJOY THE FIT</h1>
                <p>
                    Discover your potential with our modern equipment, expert trainers,
                    and a variety of fitness programs. Join us and start your fitness journey today!
                </p>
                <button>GET STARTED TODAY</button>
            </div>
        </section>
    );
}

export default HeroSection;
