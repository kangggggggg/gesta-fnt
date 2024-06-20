import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./IPhone11ProStorySeventh.module.css";

const IPhone11ProStorySeventh = () => {
  const navigate = useNavigate();

  const onFrameButtonClick = useCallback(() => {
    navigate("/iphone-11-pro-story8");
  }, [navigate]);

  const onBackClick = useCallback(() => {
    navigate("/iphone-11-pro-story6");
  }, [navigate]);

  return (
    <div className={styles.iphone11ProStoryseventh}>
      <button
        className={styles.iphone11ProStoryseventhInner}
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
      <div className={styles.iphone11ProStoryseventhChild} />
    </div>
  );
};

export default IPhone11ProStorySeventh;
