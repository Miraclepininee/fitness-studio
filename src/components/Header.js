import React from "react";
import "./Header.css"; // Create this file for styles

function Header() {
    return (
        <header className="header">
            <div className="logo">FITNESS & ZUMBA STUDIO</div>
            <nav>
                <a href="#programs">Programs</a>
                <a href="#coaches">Coaches</a>
                <a href="#equipment">Equipment</a>
                <a href="#posts">Posts</a>
                <a href="#gallery">Gallery</a>
                <a href="#contact">Contact</a>
            </nav>
        </header>
    );
}

export default Header;
