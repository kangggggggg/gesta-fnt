import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import styles from "./Backbutton.module.css";

const Backbutton = ({ className = "" }) => {
  const navigate = useNavigate();

  const onFrameButtonClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <button
      className={[styles.backWrapper, className].join(" ")}
      onClick={onFrameButtonClick}
    >
      <div className={styles.back}>Back</div>
    </button>
  );
};

Backbutton.propTypes = {
  className: PropTypes.string,
};

export default Backbutton;
