import { useState } from "react";
import styles from "./CoffeeSelector.module.css";

const CoffeeSelector = () => {
  const [coffeeType, setCoffeeType] = useState("");

  const handleCoffeeType = (event) => {
    setCoffeeType(event.target.value);
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Select coffee</h1>
      <label className={styles.label}>
        <input
          className={styles.input}
          type="radio"
          name="coffeeType"
          value="espresso"
          checked={coffeeType === "espresso"}
          onChange={handleCoffeeType}
        />
        Espresso
      </label>
      <label className={styles.label}>
        <input
          className={styles.input}
          type="radio"
          name="coffeeType"
          value="cappuccino"
          checked={coffeeType === "cappuccino"}
          onChange={handleCoffeeType}
        />
        Cappuccino
      </label>
      <label className={styles.label}>
        <input
          className={styles.input}
          type="radio"
          name="coffeeType"
          value="americano"
          checked={coffeeType === "americano"}
          onChange={handleCoffeeType}
        />
        Americano
      </label>
      <label className={styles.label}>
        <input
          className={styles.input}
          type="radio"
          name="coffeeType"
          value="latte"
          checked={coffeeType === "latte"}
          onChange={handleCoffeeType}
        />
        Latte
      </label>
    </div>
  );
};

export default CoffeeSelector;
