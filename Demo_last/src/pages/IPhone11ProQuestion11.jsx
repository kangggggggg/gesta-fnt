import { useCallback } from "react";
import Backbutton from "../components/Backbutton";
import { useNavigate } from "react-router-dom";
import styles from "./IPhone11ProQuestion11.module.css";

const IPhone11ProQuestion11 = () => {
  const navigate = useNavigate();

  const onFrameButtonClick = useCallback(() => {
    navigate("/iphone-11-pro-question2");
  }, [navigate]);

  return (
    <div className={styles.iphone11ProNameage}>
      <div className={styles.ageFrame}>
        <div className={styles.div}>나이를 선택해보아요</div>
        <select className={styles.parent}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
          <option value="11">11</option>
          <option value="12">12</option>
          <option value="13">13</option>
        </select>
      </div>
      <div className={styles.nameFrame}>
        <div className={styles.div1}>이름을 입력해보아요</div>
        <input
          className={styles.nameFrameChild}
          placeholder="Name"
          type="text"
        />
      </div>
      <div className={styles.back}>
        <div className={styles.backInner}>
          <Backbutton />
        </div>
      </div>
      <button
        className={styles.iphone11ProNameageInner}
        onClick={onFrameButtonClick}
      >
        <button className={styles.nextWrapper}>
          <div className={styles.next}>Next</div>
        </button>
      </button>
    </div>
  );
};

export default IPhone11ProQuestion11;
