import { useState } from "react";
import styles from "./CoffeeCondiments.module.css";

const CoffeeCondiments = () => {
  const [coffeeCondiment, setCoffeeCondiment] = useState({
    milk: false,
    syrop: false,
    cinnamon: false,
    any: false,
  });

  const handleCondiment = (event) => {
    const { name, checked } = event.target;

    setCoffeeCondiment((prev) => ({
      ...prev,
      [name]: checked,
    }));
  };

  const isSelected = Object.values(coffeeCondiment).some(Boolean);

  return (
    <div className={styles.container}>
      <label className={styles.label}>
        <input
          className={styles.input}
          type="checkbox"
          name="milk"
          checked={coffeeCondiment.milk}
          onChange={handleCondiment}
        />
        Milk
      </label>
      <label className={styles.label}>
        <input
          className={styles.input}
          type="checkbox"
          name="syrop"
          checked={coffeeCondiment.syrop}
          onChange={handleCondiment}
        />
        Sugar syrop
      </label>
      <label className={styles.label}>
        <input
          className={styles.input}
          type="checkbox"
          name="cinnamon"
          checked={coffeeCondiment.cinnamon}
          onChange={handleCondiment}
        />
        Cinnamon
      </label>
      <label className={styles.label}>
        <input
          className={styles.input}
          type="checkbox"
          name="any"
          checked={coffeeCondiment.any}
          onChange={handleCondiment}
        />
        No condiments
      </label>

      <button className={styles.button} type="button" disabled={!isSelected}>
        Order coffee
      </button>
    </div>
  );
};

export default CoffeeCondiments;