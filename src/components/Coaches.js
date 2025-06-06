import React from "react";
// import "./Coaches.css";

const coaches = [
    { name: "Elisa Hangelo", desc: "Fitness coach", img: "/images/coach1.jpg" },
    { name: "Mark Wally", desc: "Crossfit expert", img: "/images/coach2.jpg" },
    { name: "Michael Weber", desc: "Yoga instructor", img: "/images/coach3.jpg" },
    { name: "Jane Moreno", desc: "Zumba trainer", img: "/images/coach4.jpg" },
];

function Coaches() {
    return (
        <section className="coaches" id="coaches">
            <h2>COACHES</h2>
            <div className="coach-list">
                {coaches.map((c) => (
                    <div className="coach-card" key={c.name}>
                        <img src={c.img} alt={c.name} />
                        <h3>{c.name}</h3>
                        <p>{c.desc}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Coaches;
