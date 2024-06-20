import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./IPhone11ProQuestion2.module.css";

const IPhone11ProQuestion2 = () => {
  const navigate = useNavigate();

  const onFrameButtonClick = useCallback(() => {
    navigate("/iphone-11-pro-question3");
  }, [navigate]);

  const onBackClick = useCallback(() => {
    navigate("/iphone-11-pro-question1");
  }, [navigate]);

  return (
    <div className={styles.iphone11ProLibrary}>
      <button
        className={styles.iphone11ProLibraryInner}
        onClick={onFrameButtonClick}
      >
        <button className={styles.nextWrapper}>
          <div className={styles.next}>Next</div>
        </button>
      </button>
      <div className={styles.div}>
        <div className={styles.div1}>원하는 주제를 직접 입력해보아요</div>
        <textarea className={styles.child} placeholder="Write yourself!" />
      </div>
      <div className={styles.div2}>
        <div className={styles.div3}>지웅이의 도서관</div>
        <div className={styles.div4}>
          <button className={styles.parent}>
            <div className={styles.div5}>횡단보도에서는</div>
            <div className={styles.div6}>좌우를 살펴요!</div>
          </button>
          <button className={styles.group}>
            <div className={styles.div5}>불장난은</div>
            <div className={styles.div6}>위험해요!</div>
          </button>
          <button className={styles.container}>
            <div className={styles.div5}>횡단보도에서는</div>
            <div className={styles.div6}>좌우를 살펴요!</div>
          </button>
          <button className={styles.group}>
            <div className={styles.div5}>모르는 사람을</div>
            <div className={styles.div12}>쫓아가지 않아요!</div>
          </button>
        </div>
      </div>
      <button className={styles.back} onClick={onBackClick}>
        <div className={styles.backInner}>
          <img className={styles.groupChild} alt="" src="/frame-162@2x.png" />
        </div>
      </button>
    </div>
  );
};

export default IPhone11ProQuestion2;
