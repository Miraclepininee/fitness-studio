import React from "react";
// import "./Posts.css";

const posts = [
    { title: "Tanya Swift: New Female Athlete of the Month", img: "/images/post1.jpg" },
    { title: "Strength Programs and Crossfit", img: "/images/post2.jpg" },
    { title: "How to Handle THIS Weight?", img: "/images/post3.jpg" },
];

function Posts() {
    return (
        <section className="posts" id="posts">
            <h2>MOST RECENT FITNESS POSTS</h2>
            <div className="post-list">
                {posts.map((p) => (
                    <div className="post-card" key={p.title}>
                        <img src={p.img} alt={p.title} />
                        <h3>{p.title}</h3>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Posts;
