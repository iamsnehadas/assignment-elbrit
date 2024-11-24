import styles from '../styles/FeaturesSection.module.css';

export default function FeaturesSection() {
  const features = [
    { title: 'Affordable Prices', description: 'Get medicines at the best prices' },
    { title: 'Trusted Brands', description: 'We only stock certified products' },
    { title: 'Fast Delivery', description: 'Quick delivery to your doorstep' },
  ];

  return (
    <section className={styles.features}>
      <h2>Why Choose Us?</h2>
      <div className={styles.featuresList}>
        {features.map((feature, index) => (
          <div key={index} className={styles.featureCard}>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
