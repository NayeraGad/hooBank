import React from "react";

import GetStarted from "../components/GetStarted";
import styles from "../style";
import { robot, discount } from "../assets";

const Hero = () => (
  <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
    <div
      className={`${styles.flexStart} flex-1 flex-col xl:px-0 sm:px-16 px-6`}
    >
      <div
        className="flex flex-row items-center mb-2 px-4 py-[6px]
       bg-discount-gradient rounded-[10px]"
      >
        <img src={discount} alt="discount" className="w-[32px] h-[32px]" />
        <p className={`ml-2 ${styles.paragraph}`}>
          <span className="text-white">20% </span> DISCOUNT FOR{" "}
          <span className="text-white">1 MONTH</span> ACCOUNT
        </p>
      </div>

      <div className="flex flex-row justify-between items-center w-full">
        <h1
          className="flex-1 text-white font-poppins font-semibold text-[52px]
        ss:text-[72px] ss:leading-[100px] leading-[75px]"
        >
          The Next <br className="sm:block hidden" />{" "}
          <span className="text-gradient">Generation</span>
        </h1>

        <div className="ss:flex hidden md:mr-4 mr-0">
          <GetStarted />
        </div>
      </div>

      <h1
        className="text-white font-poppins font-semibold text-[52px]
        ss:text-[72px] ss:leading-[100px] leading-[75px]"
      >
        Payment Method.
      </h1>

      <p className={`max-w-[470px] mt-5 ${styles.paragraph}`}>
        Our team of experts uses a methodology to identify the credit cards most
        likely to fit your needs. We examine annual percentage rates, annual
        fees.
      </p>
    </div>

    <div className={`relative flex flex-1 ${styles.flexCenter} md:my-0 my-10`}>
      <img
        src={robot}
        alt="billing"
        className="relative w-[100%] h-[100%] z-[5]"
      />

      <div className="absolute top-0 w-[40%] h-[35%] z-0 pink__gradient" />
      <div className="absolute bottom-40 w-[80%] h-[80%] rounded-full z-1 white__gradient" />
      <div className="absolute right-20 bottom-20 w-[50%] h-[50%] z-0 blue__gradient" />
    </div>

    <div className={`ss:hidden ${styles.flexCenter}`}>
      <GetStarted />
    </div>
  </section>
);

export default Hero;
