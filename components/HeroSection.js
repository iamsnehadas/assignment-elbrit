import Image from 'next/image';
import styles from '../styles/HeroSection.module.css';

export default function HeroSection() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroText}>
        <h1>Welcome to Eden Pharmacy</h1>
        <p>Your trusted community health partner</p>
        <button className={styles.ctaButton}>See More</button>
      </div>
      <div className={styles.heroImage}>
        <Image
          src="/assets/hero-image.jpg"
          alt="Pharmacy Illustration"
          width={600}
          height={400}
          priority={false}
        />
      </div>
    </section>
  );
}
