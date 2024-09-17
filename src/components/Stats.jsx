import { stats } from "../constants";
import styles from "../style";

const Stats = () => (
  <section className={`${styles.flexCenter} flex-row flex-wrap sm:mb-20 mb-6`}>
    {stats.map((stat, index) => (
      <div
        key={stat.id}
        className={`flex flex-1 flex-row justify-start items-center m-3`}
      >
        <h4
          className="text-white xs:text-[40.89px] text-[30.89px] 
        font-poppins font-semibold  xs:leading-[53.16px] leading-[43.16px] "
        >
          {stat.value}
        </h4>
        <p
          className="ml-3 text-gradient xs:text-[20.45px] text-[15.4px] 
        font-poppins font-normal xs:leading-[26.58px] leading-[21.5px] uppercase"
        >
          {stat.title}
        </p>
        <div
          className={`w-[13.63px] h-[0px] rotate-90 
          ${index === stats.length - 1 ? "hidden" : "hidden lg:flex"}
          border-2 border-white border-opacity-60 mx-auto`}
        />
      </div>
    ))}
  </section>
);

export default Stats;
