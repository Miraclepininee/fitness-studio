import React from "react";
// import "./Programs.css";

const programs = [
    { name: "Fitness Studio", img: "/images/fitness.jpg" },
    { name: "Zumba Classes", img: "/images/zumba.jpg" },
    { name: "Yoga Classes", img: "/images/yoga.jpg" },
    { name: "Crossfit Studio", img: "/images/crossfit.jpg" },
];

function Programs() {
    return (
        <section className="programs" id="programs">
            <h2>OUR PROGRAMS</h2>
            <div className="program-list">
                {programs.map((p) => (
                    <div className="program-card" key={p.name}>
                        <img src={p.img} alt={p.name} />
                        <h3>{p.name}</h3>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Programs;
