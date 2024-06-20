import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./IPhone11ProStoryFifth.module.css";

const IPhone11ProStoryFifth = () => {
  const navigate = useNavigate();

  const onFrameButtonClick = useCallback(() => {
    navigate("/iphone-11-pro-story6");
  }, [navigate]);

  const onBackClick = useCallback(() => {
    navigate("/iphone-11-pro-story4");
  }, [navigate]);

  return (
    <div className={styles.iphone11ProStoryfifth}>
      <button
        className={styles.iphone11ProStoryfifthInner}
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
      <div className={styles.wrapper}>
        <div className={styles.div}>지웅이는 오늘도 즐거운 하루를 보내요!</div>
      </div>
    </div>
  );
};

export default IPhone11ProStoryFifth;
