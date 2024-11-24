import styles from '../styles/CallToAction.module.css';

export default function CallToAction() {
  return (
    <section className={styles.cta}>
      <h2>Join Us Today</h2>
      <p>Be part of the Eden Pharmacy community and enjoy exclusive benefits.</p>
      <button className={styles.ctaButton}>Call to Action</button>
    </section>
  );
}
