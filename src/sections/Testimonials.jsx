import styles from "../style";
import { FeedbackCard } from "../components";
import { feedback } from "../constants";

const Testimonials = () => (
  <section
    id="clients"
    className={`relative ${styles.flexCenter} flex-col ${styles.paddingY}`}
  >
    <div
      className="absolute -right-[50%] bottom-40 w-[60%] h-[60%] blue__gradient
        rounded-full z-[0]"
    />
    <div
      className="relative flex md:flex-row flex-col justify-between items-center
     w-full sm:mb-16 mb-6 z-[1]"
    >
      <h2 className={styles.heading2}>
        What people are
        <br className="sm:block hidden" />
        saying about us
      </h2>

      <div className="w-full md:mt-0 mt-6">
        <p className={`max-w-[470px] ${styles.paragraph} text-left`}>
          Everything you need to accept card payments and grow your business
          anywhere on the planet.
        </p>
      </div>
    </div>

    <div
      className="relative flex flex-wrap sm:justify-start justify-center w-full
     feedback-container z-[1]"
    >
      {feedback.map((card) => (
        <FeedbackCard key={card.id} {...card} />
      ))}
    </div>
  </section>
);

export default Testimonials;
