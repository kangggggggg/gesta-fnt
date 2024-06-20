import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./IPhone11ProQuestion.module.css";

const IPhone11ProQuestion = () => {
  const navigate = useNavigate();

  const onFrameButtonClick = useCallback(() => {
    navigate("/iphone-11-pro-making");
  }, [navigate]);

  const onBackClick = useCallback(() => {
    navigate("/iphone-11-pro-question3");
  }, [navigate]);

  return (
    <div className={styles.iphone11ProVoice}>
      <button
        className={styles.iphone11ProVoiceInner}
        onClick={onFrameButtonClick}
      >
        <button className={styles.nextWrapper}>
          <div className={styles.next}>Next</div>
        </button>
      </button>
      <div className={styles.div}>
        <button className={styles.button}>
          <div className={styles.div1}>멋있어요</div>
        </button>
        <button className={styles.button1}>
          <div className={styles.div1}>차분해요</div>
        </button>
        <button className={styles.button2}>
          <div className={styles.div3}>신나요</div>
        </button>
        <div className={styles.div4}>목소리를 골라 보아요</div>
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

export default IPhone11ProQuestion;
