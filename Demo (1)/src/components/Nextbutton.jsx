import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import styles from "./Nextbutton.module.css";

const Nextbutton = ({ className = "" }) => {
  const navigate = useNavigate();

  const onFrameButtonClick = useCallback(() => {
    navigate("/iphone-11-pro-question1");
  }, [navigate]);

  return (
    <button
      className={[styles.iphone11ProOnboardingInner, className].join(" ")}
      onClick={onFrameButtonClick}
    >
      <div className={styles.nextWrapper}>
        <div className={styles.next}>Next</div>
      </div>
    </button>
  );
};

Nextbutton.propTypes = {
  className: PropTypes.string,
};

export default Nextbutton;
