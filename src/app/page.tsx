import Review from "@/types/review";
// Update this line
import styles from "../../components/ReviewSection.module.scss";

export default function Home() {
  const reviews: Review[] = [
    {
      rating: 4,
      text: "The team took time to understand our vision and delivered a sleek, professional site that not only looks great but also improved our conversion rates. Their design process was smooth, communication was clear, and they met all deadlines.",
      author: {
        name: "Maxin Will",
        position: "Product Manager",
        initials: "MW"
      }
    },
    {
      rating: 4,
      text: "The team took time to understand our vision and delivered a sleek, professional site that not only looks great but also improved our conversion rates. Their design process was smooth, communication was clear, and they met all deadlines.",
      author: {
        name: "Maxin Will",
        position: "Product Manager",
        initials: "MW"
      }
    }
  ];

  return (
    <div className={styles.reviewSection}>
      <section>
        <div className={styles.header}>
          <h1>What Users Say About Non Disclosure Agreement</h1>
          <p>Reviews from professional and business who have used this document template</p>
          <div className={styles.overallRating}>
            <div className={styles.ratingWrapper}>
              <span className={styles.ratingNumber}>4.5</span>
              <div className={styles.stars}>
                {[1, 2, 3, 4].map((star) => (
                  <span key={star} className={styles.starFilled}>★</span>
                ))}
                <span className={styles.starEmpty}>★</span>
              </div>
            </div>
            <p>Know Why Millions of Customers Believe in Us!</p>
          </div>
        </div>

        <div className={styles.reviewsContainer}>
          {reviews.map((review, index) => (
            <div key={index} className={styles.reviewCard}>
              <div className={styles.rating}>
                <div className={styles.stars}>
                  {[1, 2, 3, 4].map((star) => (
                    <span key={star} className={styles.starFilled}>★</span>
                  ))}
                  <span className={styles.starEmpty}>★</span>
                </div>
                <span className={styles.ratingText}>{review.rating}/5</span>
              </div>
              <p className={styles.reviewText}>{review.text}</p>
              <div className={styles.authorSection}>
                <div className={styles.author}>
                  <div className={styles.authorInitials}>
                    {review.author.initials}
                  </div>
                  <div className={styles.authorInfo}>
                    <h3>{review.author.name}</h3>
                    <p>{review.author.position}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
          <button className={styles.nextButton}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </div>
      </section>
    </div>
  );
}
