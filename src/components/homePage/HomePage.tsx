import React from "react";
import { Link } from "react-router-dom";
import styles from "./homepage.module.css";

export default function HomePage() {
  return (
    <div>
      <h2>Home page</h2>
      <div className={styles.gridContainer}>
        <Link to="">
          <div>lesson 1</div>
        </Link>
        <Link to="">
          <div>lesson 2</div>
        </Link>
        <Link to="">
          <div>lesson 3</div>
        </Link>
        <Link to="">
          <div>lesson 4</div>
        </Link>
        <Link to="">
          <div>lesson 5</div>
        </Link>
        <Link to="">
          <div>lesson 6</div>
        </Link>
        <Link to="">
          <div>lesson 7</div>
        </Link>
        <Link to="">
          <div>lesson 8</div>
        </Link>
        <Link to="">
          <div>lesson 9</div>
        </Link>
      </div>
    </div>
  );
}
