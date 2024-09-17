import styles from "../style";
import { clients } from "../constants";

const Clients = () => (
  <section className={`${styles.flexCenter} my-4`}>
    <div className={`${styles.flexCenter} flex-wrap w-full`}>
      {clients.map((client) => (
        <div
          key={client.id}
          className={`${styles.flexCenter} flex-1 sm:min-w-[192px] min-w-[120px] m-5`}
        >
          <img
            src={client.logo}
            alt={client.id}
            className="sm:w-[192px] w-[100px] object-contain hover:scale-150"
          />
        </div>
      ))}
    </div>
  </section>
);

export default Clients;
