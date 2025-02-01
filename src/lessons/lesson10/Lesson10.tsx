import React, { useState, useEffect } from "react";
import styles from "../../styles/Lesson10.module.css";

interface CatFact {
  fact: string;
  image: string;
}

const Lesson10 = () => {
  const [facts, setFacts] = useState<CatFact[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchFact = async () => {
    setLoading(true);
    try {
      const factResponse = await fetch("https://catfact.ninja/fact");
      const factData = await factResponse.json();

      const imageResponse = await fetch(
        "https://api.thecatapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=false&order=RANDOM&page=0&limit=1"
      );
      const imageData = await imageResponse.json();

      setFacts((prev) => [
        ...prev,
        { fact: factData.fact, image: imageData[0]?.url || "" },
      ]);
    } catch (error) {
      console.error("Ошибка загрузки:", error);
    } finally {
      setLoading(false);
    }
  };

  const removeFact = (index: number) => {
    setFacts((prev) => prev.filter((_, i) => i !== index));
  };

  useEffect(() => {
    fetchFact(); // Загружаем факт и фото при первой загрузке
  }, []);

  return (
    <div className={styles.container}>
      <h2>Random Cat Facts</h2>
      {loading ? <p>Loading...</p> : null}
      <div className={styles.facts}>
        {facts.map((item, index) => (
          <div key={index} className={styles.factCard}>
            <p>{item.fact}</p>
            {item.image && <img src={item.image} alt="Cat" className={styles.image} />}
            <button onClick={() => removeFact(index)} className={styles.button}>
              Remove info
            </button>
          </div>
        ))}
      </div>
      <button onClick={fetchFact} className={styles.button}>
        GET MORE INFO
      </button>
    </div>
  );
};

export default Lesson10;
