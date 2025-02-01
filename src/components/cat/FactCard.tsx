import React from "react";
import styles from "../../styles/FactCard.module.css";

interface FactCardProps {
  text: string;
}

const FactCard: React.FC<FactCardProps> = ({ text }) => {
  return <div className={styles.card}>{text}</div>;
};

export default FactCard;
