import Button from "./Button";
import styles from "../style";

const CTA = () => (
  <section
    className={`sm:flex-row flex-col ${styles.flexCenter} ${styles.marginY}
  ${styles.padding} bg-black-gradient-2 rounded-[20px] box-shadow`}
  >
    <div className="flex flex-1 flex-col">
      <h2 className={styles.heading2}>Let’s try our service now!</h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Everything you need to accept card payments and grow your business
        anywhere on the planet.
      </p>
    </div>

    <div className={`${styles.flexCenter} sm:mt-0 mt-10 sm:ml-10 ml-0`}>
      <Button />
    </div>
  </section>
);

export default CTA;
