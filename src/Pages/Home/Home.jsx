import styles from "./Home.module.css";

const Home = ({darkTheme}) => {
  return (
    <div className={darkTheme ? styles.cont : `${styles.cont} ${styles.light}`}>
      <content className={styles.firstContent}>
        <div className={styles.ovals}>
            <div className={darkTheme ? styles.oval1 : `${styles.oval1} ${styles.bgBlack}`}></div>
            <div className={darkTheme ? styles.oval2 : `${styles.oval2} ${styles.bgBlack}`}></div>
            <div className={darkTheme ? styles.oval3 : `${styles.oval3} ${styles.bgBlack}`}></div>
        </div>
        <div className={styles.firstContentLeft}>
          <span className={darkTheme ? styles.hi : `${styles.hi} ${styles.colBlack}`}>Hi !</span> <br />
          <span className={darkTheme ? styles.headNext : `${styles.headNext} ${styles.colBlack}`}><b style={{"font-size":"50px"}}>I</b>'m Aren</span>
        </div>
        <div className={styles.firstContentRight}>
            <img className={styles.avatar} src="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs3/98381915/original/88c2f61d8b8c88d91030e19d12ca832c72b1b99d/design-minimalist-flat-line-vector-avatar-of-you.jpg" alt="" />
        </div>
      </content>
    </div>
  );
};
export default Home;
