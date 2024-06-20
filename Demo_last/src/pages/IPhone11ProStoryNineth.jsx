import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./IPhone11ProStoryNineth.module.css";

const IPhone11ProStoryNineth = () => {
  const navigate = useNavigate();

  const onFrameButtonClick = useCallback(() => {
    navigate("/iphone-11-pro-story10");
  }, [navigate]);

  const onBackClick = useCallback(() => {
    navigate("/iphone-11-pro-story8");
  }, [navigate]);

  return (
    <div className={styles.iphone11ProStorynineth}>
      <button
        className={styles.iphone11ProStoryninethInner}
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
      <div className={styles.iphone11ProStoryninethChild} />
    </div>
  );
};

export default IPhone11ProStoryNineth;
