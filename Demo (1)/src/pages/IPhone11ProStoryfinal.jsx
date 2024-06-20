import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./IPhone11ProStoryfinal.module.css";

const IPhone11ProStoryfinal = () => {
  const navigate = useNavigate();

  const onAgainButtonClick = useCallback(() => {
    navigate("/iphone-11-pro-story1");
  }, [navigate]);

  const onHomeButtonClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className={styles.iphone11ProStoryfinal}>
      <button className={styles.buttons}>
        <button className={styles.againButton} onClick={onAgainButtonClick}>
          <button className={styles.againWrapper}>
            <div className={styles.again}>Again</div>
          </button>
        </button>
        <button className={styles.againButton} onClick={onHomeButtonClick}>
          <button className={styles.againWrapper}>
            <div className={styles.again}>Home</div>
          </button>
        </button>
      </button>
      <button className={styles.back} onClick={onAgainButtonClick}>
        <div className={styles.backInner}>
          <button className={styles.backWrapper}>
            <div className={styles.back1}>Back</div>
          </button>
        </div>
      </button>
      <div className={styles.wrapper}>
        <div className={styles.div}>끝!</div>
      </div>
    </div>
  );
};

export default IPhone11ProStoryfinal;
