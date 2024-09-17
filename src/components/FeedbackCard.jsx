import { quotes } from "../assets";

const FeedbackCard = ({ content, name, title, img }) => (
  <div
    className="flex flex-col justify-between max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-5
    px-10 py-12 rounded-[20px] feedback-card"
  >
    <img
      src={quotes}
      alt="quotes"
      className="w-[42.6px] h-[27.6px] object-contain"
    />

    <p className="my-10 text-[18px] font-poppins text-white leading-[32.4px]">
      {content}
    </p>

    <div className="flex flex-row">
      <img src={img} alt={name} className="w-[48px] h-[48px] rounded-full" />

      <div className="flex flex-col ml-4">
        <h4 className="text-white text-[20px] font-poppins font-semibold leading-[32px]">
          {name}
        </h4>
        <p className="text-dimWhite text-[16px] font-normal leading-[24px]">
          {title}
        </p>
      </div>
    </div>
  </div>
);

export default FeedbackCard;
