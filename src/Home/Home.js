import React from "react";
import { CountryContext } from "../CountryContext";
import Input from "../Inputs/Input";
import styles from "./Home.module.scss";

const Home = () => {
  const { data } = React.useContext(CountryContext);

  if (data === null) return null;
  return (
    <section>
      <Input />

      <div>
        <ul className={styles.card}>
          {data.map(
            ({ name, flag, numericCode, population, region, capital }) => (
              <li key={numericCode}>
                <div className={styles.wrapper}>
                  <img src={flag} alt={name} />
                </div>

                <div className={styles.description}>
                  <h2>{name}</h2>
                  <h4>
                    Population: <span>{population}</span>
                  </h4>
                  <h4>
                    Region: <span>{region}</span>
                  </h4>
                  <h4>
                    Capital: <span>{capital}</span>
                  </h4>
                </div>
              </li>
            )
          )}
        </ul>
      </div>
    </section>
  );
};

export default Home;
