import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.logoContainer}>
          <img src="/assets/logo.png" alt="Company Logo" className={styles.logo} />
          <span className={styles.companyName}>Eden Pharmacy</span>
        </div>
      </header>

      <section className={styles.vitaminsSection}>
        <h1 className={styles.sectionHeading}>Essential Vitamins</h1>
        <div className={styles.vitaminsContent}>
          <div className={styles.textLeft}>
            <h5 className={styles.smallContent}>Online Medical Supplies</h5>
            <h3 className={styles.largeContent}>Get Your Vitamins <br />& Minerals</h3>
            <button className={styles.exploreButton}>Explore</button>
          </div>
          <img src="/Assets/f2-1.png.png" alt="Vitamins" className={styles.vitaminsImage} />
          <div className={styles.textRight}>
            <h5 className={styles.largeContent}>Vitamins</h5>
            <h6 className={styles.smallContent1}>Increased Vitamins<br />and minerals in your diet</h6>
            <h5 className={styles.largeContent}>Weight Loss</h5>
            <h6 className={styles.smallContent1}>Weight Loss <br />Find scientifically proven solutions</h6>
            <h5 className={styles.largeContent}>Functional Foods</h5>
            <h6 className={styles.smallContent1}>Functional Foods<br />From protein powers to baby formula</h6>
          </div>
        </div>
        <div className={styles.grayCircles}>
          <span className={styles.circle}></span>
          <span className={styles.circle}></span>
        </div>
      </section>

      <section className={styles.greenSection}>
        <h2 className={styles.greenSectionHeading}>Discover the Benefits</h2>
        <p className={styles.greenSectionText}>
          Learn how the right vitamins can transform your health. Explore a wide range of functional foods and supplements tailored to your lifestyle.
        </p>
      </section>

      <div className={styles.whiteStripe}></div>
      <footer className={styles.footer}></footer>
    </div>
  );
}
