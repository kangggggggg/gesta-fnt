import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./IPhone11ProQuestion1.module.css";

const IPhone11ProQuestion1 = () => {
  const navigate = useNavigate();

  const onFrameButtonClick = useCallback(() => {
    navigate("/iphone-11-pro-question4");
  }, [navigate]);

  const onBackClick = useCallback(() => {
    navigate("/iphone-11-pro-question2");
  }, [navigate]);

  return (
    <div className={styles.iphone11ProDifficulty}>
      <button
        className={styles.iphone11ProDifficultyInner}
        onClick={onFrameButtonClick}
      >
        <button className={styles.nextWrapper}>
          <div className={styles.next}>Next</div>
        </button>
      </button>
      <div className={styles.div}>
        <button className={styles.button}>
          <div className={styles.div1}>어려워요</div>
        </button>
        <button className={styles.button1}>
          <div className={styles.div1}>적당해요</div>
        </button>
        <button className={styles.button2}>
          <div className={styles.div3}>쉬워요</div>
        </button>
        <div className={styles.div4}>난이도를 골라 보아요</div>
      </div>
      <button className={styles.back} onClick={onBackClick}>
        <div className={styles.backInner}>
          <button className={styles.backWrapper}>
            <div className={styles.back1}>Back</div>
          </button>
        </div>
      </button>
    </div>
  );
};

export default IPhone11ProQuestion1;
