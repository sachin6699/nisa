import React from "react";
import styles from "./Info.module.scss";
// import img from "../../images/shoppic.jpg";

const Info = () => {
  return (
    <section className={styles.app}>
      <div className={styles.headers}>
        <h1>MARSH FARM NISA</h1>
        <h2>ABOUT</h2>
      </div>
    <section className={styles.main}>
      <div className={styles.info}>
        <p>From the days of the purley centre, to the newly revamped marsh farm shopping centre, our team have dedicated countless hours on providing you with the highest quality experience. 
        </p>
          <p>
          With a butchery, post office, pay-point, lottery and free to use ATM, we aim to satisfy your shopping needs in one local visit.
          </p>
          <p>Come in-store now and check out our range!</p>
          <button className={styles.viewmore}
            type="button"
              onClick={(e) => {e.preventDefault(); window.location.href='https://www.nisalocally.co.uk/';
              }}>View More</button>
      </div>
      <div className={styles.piccontainer}>
          {/* <div className={styles.shoppic}>
            <img src={ img } alt=""/>
         </div> */}
        </div>
      </section>


    </section>
  );
};

export default Info;
