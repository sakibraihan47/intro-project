import { useState } from "react";
import styles from "../styles/Reckless.module.css";

const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <>
      <div className={styles.count_display}>{count}</div>
      <div className={styles.count_btn} onClick={() => setCount(count + 1)}>
        Add Item
      </div>
      <div
        className={styles.count_btn_remove}
        onClick={() => setCount(count - 1)}
      >
        Remove
      </div>
    </>
  );
};

export default Counter;
