import React from "react";
// import "./Gallery.css";

const galleryImages = [
    "/images/gallery1.jpg",
    "/images/gallery2.jpg",
    "/images/gallery3.jpg",
    "/images/gallery4.jpg",
    "/images/gallery5.jpg",
];

function Gallery() {
    return (
        <section className="gallery" id="gallery">
            <h2>BROWSE OUR PHOTO GALLERY</h2>
            <div className="gallery-list">
                {galleryImages.map((src, idx) => (
                    <img src={src} alt={`Gallery ${idx + 1}`} key={idx} />
                ))}
            </div>
        </section>
    );
}

export default Gallery;

