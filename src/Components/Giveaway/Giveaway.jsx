import React from "react";
import "./Giveaway.css";
import giveawayImage from "../../assets/g2.png";

export default function Giveaway() {
  return (
    <div id="giveaway" className="giveaway-container">
      {/* Left Side - Rules Text */}
      <div className="giveaway-text">
        <h1>Diwali Giveaway Challenge🧨</h1>
        <p>This festive season, we’re adding a spark to your celebrations ✨</p>
        <p>
          Complete any one of the challenges below, and if you meet the criteria,
          you’ll be the lucky winner to get your Instagram account managed by
          <strong> Brandkaro </strong> for 1 month (absolutely free) 🚀
        </p>

        <h3>Here are your challenges 👇</h3>
        <ul>
          <li>⿡ Comment the most on this Giveaway post.</li>
          <li>⿢ Tag 7 friends and ask them to follow our page in the Giveaway post.</li>
          <li>⿣ Tell us — Which is the best cracker you’ve ever busted in the Giveaway Post? (Best answer wins)</li>
          <li>⿤ Create and send us your Brandkaro logo design in DMs.</li>
          <li>⿥ Share your best Diwali memory in the Giveaway post comments.</li>
        </ul>

        <p className="giveaway-line">ये दिवाली Brandkaro वाली 🪔</p>

        <p>
          🎯 Follow our Instagram page:{" "}
          <a
            href="https://www.instagram.com/brandkaroo?igsh=MXJhZjBwOHI0MDAzOA=="
            target="_blank"
            rel="noopener noreferrer"
          >
            @brandkaroo
          </a>
        </p>
      </div>

      {/* Right Side - Image */}
      <div className="giveaway-image">
        <img src={giveawayImage} alt="Giveaway" />
      </div>
    </div>
  );
}
