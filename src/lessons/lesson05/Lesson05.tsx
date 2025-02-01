import { fellowship } from "./fellowship";
import React from "react";
import "./lesson05.css";

export default function Lesson05() {
  console.log(fellowship);

  return (
    <div>
      <h2>React map() components</h2>
      <div>
        {fellowship.map((hero) => (
          <div className="hero-card" key={hero.id}>
            <h3>{hero.name}</h3>
            <div
              className={`heroCardImgWrapper ${
                hero.isDark ? "hero-cardDark" : "hero-cardLight"
              }`}
            >
              <img width={100} src={hero.image} alt="" />
            </div>
            <p>{hero.age} age old </p>
            <p>{hero.isDark ? "Villan" : "Hero"}</p>
            <p>Weapons: {hero.weapons.map((weapon) => " | " + weapon)}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
