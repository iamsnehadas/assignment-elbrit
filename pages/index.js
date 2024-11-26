import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.logoContainer}>
          <img src="/Assets/E__2_-removebg-preview.png" alt="Company Logo" className={styles.logo} />
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
        <br />
        <div className={styles.grayCircles}>
          <span className={styles.grayCircle}></span>
          <span className={styles.grayCircle}></span>
        </div>
      </section>

      <section className={styles.greenSection}>        
        
        <div className={styles.circlesContainer}>
          <div className={styles.circleItem}>
            <div className={styles.circle}></div>
            <div className={styles.circleText}>
              <h3 className={styles.newLarge}>Clinicaly Studied</h3>              
              <h5 className={styles.newSmall}> All products that we offer have undergone lab and safety tests</h5>
            </div>
          </div>
          <div className={styles.circleItem}>
            <div className={styles.circle}></div>
            <div className={styles.circleText}>
              <h3 className={styles.newLarge}>Vegitarian Friendly</h3>
              <h5 className={styles.newSmall}>We have a wide selection of vegetarian products to meet your need</h5>
            </div>
          </div>
          <div className={styles.circleItem}>
            <div className={styles.circle}></div>
            <div className={styles.circleText}>
              <h3 className={styles.newLarge}>Made In India</h3>
              <h5 className={styles.newSmall}>Shop local and explore health products made right here in India</h5>
              <br />
            </div>
          </div>
        </div>
        <div className={styles.circlesContainer}>
          <div className={styles.circleItem}>
            <div className={styles.circle}></div>
            <div className={styles.circleText}>
              <h3 className={styles.newLarge}>Free Shipping</h3>
              <h5 className={styles.newSmall}>We deliver to your door with no shipping costs on your orders</h5>
              <br />
            </div>
          </div>
          <div className={styles.circleItem}>
            <div className={styles.circle}></div>
            <div className={styles.circleText}>
              <h3 className={styles.newLarge}>No Risk</h3>
              <h5 className={styles.newSmall}> We ensure that all products are safe and within their use-by date</h5>
              <br />
            </div>
          </div>
          <div className={styles.circleItem}>
            <div className={styles.circle}></div>
            <div className={styles.circleText}>
              <h3 className={styles.newLarge}>GMO Free</h3>
              <h5 className={styles.newSmall}>Natural, no modified products and derivatives for those who need it</h5>
              <br />
            </div>
          </div>
        </div>
      </section>

      <section className={styles.ingredientsSection}>
      {/* Row 1: Heading + First Two Boxes */}
      <div className={styles.row}>
        <div className={styles.ingredientsHeading}>
          <h5 className={styles.ingredientsSubtitle}>INGREDIENTS</h5>
          <h2 className={styles.ingredientsTitle}>Better Ingredients</h2>
          <p className={styles.ingredientsDescription}>
            Only the best when you choose products offered on our platform - high-quality ingredients for high-quality products!
          </p>
        </div>

        <div className={styles.ingredientCard}>
          <div className={styles.textContent}>
            <h3 className={styles.ingredientName}>Vitamin C</h3>
            <p className={styles.ingredientText}>Vitamin C as ascorbic acid</p>
            <a href="#" className={styles.seeMoreLink}>SEE MORE</a>
          </div>
          <img src="/Assets/h2-b1.jpg-removebg-preview.png" alt="Vitamin C" className={styles.cardImage} />
        </div>

        <div className={styles.ingredientCard}>
          <div className={styles.textContent}>
            <h3 className={styles.ingredientName}>Vitamin B3</h3>
            <p className={styles.ingredientText}>Niacin for healthy gut and skin</p>
            <a href="#" className={styles.seeMoreLink}>SEE MORE</a>
          </div>
          <img src="/Assets/bn2-2.jpg-removebg-preview.png" alt="Vitamin B3" className={styles.cardImage} />
        </div>
      </div>

      
      <div className={styles.row}>
        <div className={styles.ingredientCard}>
          <div className={styles.textContent}>
            <h3 className={styles.ingredientName}>Magnesium</h3>
            <p className={styles.ingredientText}>Boost energy and support muscle function</p>
            <a href="#" className={styles.seeMoreLink}>SEE MORE</a>
          </div>
          <img src="/Assets/bn2-3.jpg-removebg-preview.png" alt="Magnesium" className={styles.cardImage} />
        </div>

        <div className={styles.ingredientCard}>
          <div className={styles.textContent}>
            <h3 className={styles.ingredientName}>Hyaluronic Acid</h3>
            <p className={styles.ingredientText}>For smooth, supple, and soft skin!</p>
            <a href="#" className={styles.seeMoreLink}>SEE MORE</a>
          </div>
          <img src="/Assets/bn2-4.jpg-removebg-preview.png" alt="Hyaluronic Acid" className={styles.cardImage} />
        </div>

        <div className={styles.ingredientCard}>
          <div className={styles.textContent}>
            <h3 className={styles.ingredientName}>Lactobacillus</h3>
            <p className={styles.ingredientText}>Invigorate your gut microbiome</p>
            <a href="#" className={styles.seeMoreLink}>SEE MORE</a>
          </div>
          <img src="/Assets/bn2-5.jpg-removebg-preview.png" alt="Lactobacillus" className={styles.cardImage} />
        </div>

        <img src="/Assets/Untitled_design-removebg-preview.png" alt="Decoration" className={styles.smallImage} />
      </div>
    </section>
    
    <section className={styles.newsSection}>
    <div className={styles.flexContainer}>
      {/* Column 1 */}
      <div className={styles.column}>
        <div className={`${styles.flexItem} ${styles.large}`}>
          <img src="/Assets/blog1-450x580.jpg.png" alt="Turmeric & Ginger" />
          <div className={styles.overlay}>
            <span className={styles.date}>20 APR</span>
            <h3 className={styles.title}>The Covid-19 Epidemic in 2022 Is Back</h3>
          </div>
        </div>
        <div className={`${styles.flexItem} ${styles.small}`}>
          <img src="/Assets/blog2-450x580.jpg.png" alt="Capsules in Hand" />
          <div className={styles.overlay}>
            <span className={styles.date}>20 APR</span>
            <h3 className={styles.title}>The Covid-19 Epidemic in 2023 Is Back</h3>
          </div>
        </div>
      </div>

      {/* Column 2 */}
      <div className={styles.column}>
        <div className={`${styles.flexItem} ${styles.small}`}>
          <img src="/Assets/blog1-450x580.jpg.png" alt="Capsules in Hand" />
          <div className={styles.overlay}>
            <span className={styles.date}>17 MAR</span>
            <h3 className={styles.title}>Hac hendrerit mus nons semper</h3>
          </div>
        </div>
        <div className={`${styles.flexItem} ${styles.large}`}>
          <img src="/Assets/blog2-450x580.jpg.png" alt="Turmeric & Ginger" />
          <div className={styles.overlay}>
            <span className={styles.date}>20 APR</span>
            <h3 className={styles.title}>The Covid-19 Epidemic in 2022 Is Back</h3>
          </div>
        </div>
      </div>
      {/*Column 3*/}
      <div className={styles.column}>
        <div className={`${styles.flexItem} ${styles.large}`}>
          <img src="/Assets/blog1-450x580.jpg.png" alt="Turmeric & Ginger" />
          <div className={styles.overlay}>
            <span className={styles.date}>20 APR</span>
            <h3 className={styles.title}>The Covid-19 Epidemic in 2022 Is Back</h3>
          </div>
        </div>
        <div className={`${styles.flexItem} ${styles.small}`}>
          <img src="/Assets/blog2-450x580.jpg.png" alt="Capsules in Hand" />
          <div className={styles.overlay}>
            <span className={styles.date}>20 APR</span>
            <h3 className={styles.title}>The Covid-19 Epidemic in 2023 Is Back</h3>
          </div>
        </div>
      </div>
      {/*Column 4*/}
      <div className={styles.column}>
        <div className={`${styles.flexItem} ${styles.small}`}>
          <img src="/Assets/blog1-450x580.jpg.png" alt="Capsules in Hand" />
          <div className={styles.overlay}>
            <span className={styles.date}>17 MAR</span>
            <h3 className={styles.title}>Hac hendrerit mus nons semper</h3>
          </div>
        </div>
        <div className={`${styles.flexItem} ${styles.large}`}>
          <img src="/Assets/blog2-450x580.jpg.png" alt="Turmeric & Ginger" />
          <div className={styles.overlay}>
            <span className={styles.date}>20 APR</span>
            <h3 className={styles.title}>The Covid-19 Epidemic in 2022 Is Back</h3>
          </div>
        </div>
      </div>
    </div>
  </section>

      <footer className={styles.footer}>
        {/* Row 1: Three Semi-Transparent Boxes */}
        <div className={styles.footerRow}>
          <div className={styles.footerBox}>
            <p> Phone Number <br />
            +974 3118 1843</p>
          </div>
          <div className={styles.footerBox}>
            <p> Email Address <br />
            Elbrithcqhr@gmail.com</p>
          </div>
          <div className={styles.footerBox}>
            <p> Office Location <br />
            Ambassador Street, Zone 61,</p>
          </div>
        </div>

        
        <div className={styles.footerImageRow}>
          <img
            src="/Assets/E.png"
            alt="Footer Image"
            className={styles.footerImage}
          />
          <h5 className={styles.footerText}> Your health, physical and emotional well-being is important  to us. We are always by your side and have made it even  easier for you to find the necessary vitamins.</h5>
        </div>

        
        <div className={styles.footerPlainText}>
          <p>
          Elbrit Life Sciences Private Limited. C20, BKC, G Block, Mumbai 400051
          </p>
        </div>
      </footer>

      <div className={styles.whiteStripe}></div>
    </div>
  );
}
