import React from "react";
import "./Giveaway.css";
import giveawayImage from "../../assets/g2.png";

export default function Giveaway() {
  return (
    <div id="giveaway" className="giveaway-container">
      {/* Left Side - Rules Text */}
      <div className="giveaway-text">
        <h1>🎁 Brand Karo Giveaway!</h1>
        <p>Giveaway mein participate karne ke liye kuch rules honge:</p>
        <ul>
          <li>1️⃣ Follow BrandKaro's Instagram page</li>
          <li>2️⃣ Tag 5 friends</li>
          <li>🎉 And you're a part of the giveaway!</li>
        </ul>
      </div>

      {/* Right Side - Image */}
      <div className="giveaway-image">
        {/* 🟡 Add your image in src/assets/giveaway.jpg */}
        <img src={giveawayImage} alt="Giveaway" />
      </div>
    </div>
  );
}
