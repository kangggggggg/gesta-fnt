import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./IPhone11ProMaking.module.css";

const IPhone11ProMaking = () => {
  const navigate = useNavigate();

  const onFrameButtonClick = useCallback(() => {
    navigate("/iphone-11-pro-story1");
  }, [navigate]);

  const onBackClick = useCallback(() => {
    navigate("/iphone-11-pro-question4");
  }, [navigate]);

  return (
    <div className={styles.iphone11ProMaking}>
      <button
        className={styles.iphone11ProMakingInner}
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
      <div className={styles.ooContainer}>
        <p className={styles.oo}>{`OO이를 위한 재밌는 `}</p>
        <p className={styles.p}>안전동화를 만들고있어요!</p>
      </div>
      <div className={styles.iphone11ProMakingChild} />
    </div>
  );
};

export default IPhone11ProMaking;
