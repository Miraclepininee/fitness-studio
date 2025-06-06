import React from "react";
// import "./Equipment.css";

function Equipment() {
    return (
        <section className="equipment" id="equipment">
            <h2>MODERN FITNESS EQUIPMENT</h2>
            <div className="equipment-content">
                <img src="/images/equipment.jpg" alt="Fitness Equipment" />
                <p>
                    Our gym is equipped with the latest machines and tools to help you achieve your fitness goals safely and efficiently.
                </p>
            </div>
        </section>
    );
}

export default Equipment;
