import styles, { layout } from "../style";
import { apple, bill, google } from "../assets";

const Billing = () => (
  <section className={layout.sectionReverse}>
    <div className={layout.sectionImgReverse}>
      <img src={bill} alt="bill" className="relative z-[5] w-[100%] h-[100%]" />

      <div className="absolute w-[50%] h-[50%] -left-1/2 top-0 rounded-full white__gradient z-3"></div>
      <div className="absolute w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient z-0"></div>
    </div>

    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Easily control your <br className="sm:block hidden" /> billing &
        invoicing.
      </h2>
      
      <p className={`max-w-[470px] mt-5 ${styles.paragraph}`}>
        Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio aenean
        neque. Fusce ipsum orci rhoncus aliporttitor integer platea placerat.
      </p>

      <div className="flex flex-wrap sm:mt-10 mt-6">
        <img
          src={google}
          alt="google play"
          className="cursor-pointer w-[144.169px] h-[43.08px] mr-5 object-contain"
        />
        <img
          src={apple}
          alt="app store"
          className="cursor-pointer w-[128.862px] h-[42.05px] object-contain"
        />
      </div>
    </div>
  </section>
);

export default Billing;
