import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./IPhone11ProStory7.module.css";

const IPhone11ProStory7 = () => {
  const navigate = useNavigate();

  const onFrameButtonClick = useCallback(() => {
    navigate("/iphone-11-pro-storyfinal");
  }, [navigate]);

  const onBackClick = useCallback(() => {
    navigate("/iphone-11-pro-making");
  }, [navigate]);

  return (
    <div className={styles.iphone11ProStory10}>
      <button
        className={styles.iphone11ProStory10Inner}
        onClick={onFrameButtonClick}
      >
        <button className={styles.nextWrapper}>
          <div className={styles.next}>Next</div>
        </button>
      </button>
      <button className={styles.back} onClick={onBackClick}>
        <div className={styles.backInner}>
          <button className={styles.backWrapper}>
            <div className={styles.back1}>Back</div>
          </button>
        </div>
      </button>
      <div className={styles.iphone11ProStory10Child} />
    </div>
  );
};

export default IPhone11ProStory7;
