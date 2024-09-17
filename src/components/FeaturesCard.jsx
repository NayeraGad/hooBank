import { features } from "../constants";
import styles from "../style";

const FeaturesCard = ({ icon, title, content, index }) => (
  <div
    className={`flex flex-row p-6 rounded-[20px] feature-card ${
      index !== features.length - 1 ? "mb-6" : "mb-0"
    }`}
  >
    <div
      className={`${styles.flexCenter} w-[64px] h-[64px]
      bg-dimBlue rounded-full`}
    >
      <img src={icon} alt={title} className="w-[50%] h-[50%] object-contain" />
    </div>

    <div className="flex flex-col flex-1 ml-3">
      <h4 className="mb-1 text-white text-[18px] font-poppins font-semibold">
        {title}
      </h4>
      <p
        className="text-dimWhite text-[16px] font-poppins font-normal
      leading-[24px]"
      >
        {content}
      </p>
    </div>
  </div>
);
export default FeaturesCard;
