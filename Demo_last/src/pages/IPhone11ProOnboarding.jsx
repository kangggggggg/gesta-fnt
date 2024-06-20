import Nextbutton from "../components/Nextbutton";
import styles from "./IPhone11ProOnboarding.module.css";

const IPhone11ProOnboarding = () => {
  return (
    <div className={styles.iphone11ProOnboarding}>
      <Nextbutton />
      <div className={styles.makeYourOwnContainer}>
        <p className={styles.makeYourOwn}>
          Make your own safety story for your kid!
        </p>
        <p className={styles.makeYourOwn}>Try it now.</p>
      </div>
      <div className={styles.title}>
        <img className={styles.titleChild} alt="" src="/vector-1.svg" />
        <img className={styles.titleItem} alt="" src="/vector-2.svg" />
        <img className={styles.titleInner} alt="" src="/vector-3.svg" />
        <div className={styles.safetyStory}>
          <p className={styles.makeYourOwn}>
            <span className={styles.safetyStory2}>
              <span>Safety story</span>
            </span>
          </p>
          <p className={styles.onlyForYou}>
            <span className={styles.safetyStory2}>
              <span>only for you</span>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default IPhone11ProOnboarding;
