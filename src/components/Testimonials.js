import style from './Testimonials.module.css';
import Andrew from '../assets/Andrew.avif';
import Thomas from '../assets/Thomas.avif';
import David from '../assets/David.avif';
import Kathrine from '../assets/kathrine.jpg';

const feedBacks = [
  {
    name: "Andrew",
    image: Andrew,
    rating: "⭐⭐⭐⭐⭐",
    comment: `"I was impressed by how balanced the dishes were; nothing felt too heavy, and every bite was enjoyable."`
  },
  {
    name: "Thomas",
    image: Thomas,
    rating: "⭐⭐⭐⭐⭐",
    comment: `“Everything we ordered was full of flavor, and the ingredients tasted really fresh and high quality.”`
  },
  {
    name: "David",
    image: David,
    rating: "⭐⭐⭐⭐⭐",
    comment: `“The food was absolutely delicious, especially the pasta — fresh, well-seasoned, and perfectly cooked.”`
  },
  {
    name: "Kathrine",
    image: Kathrine,
    rating: "⭐⭐⭐⭐⭐",
    comment: `“The food exceeded my expectations — beautifully presented and packed with authentic flavors.”`
  }
]

function Testimonials() {
  const FeedbackBox = ({ feedback }) => {
    return (
      <div className={style.feedbackBox} >
        <div className={style.starBox}>{feedback.rating}</div>
        <div className={style.profileBox}>
          <img src={feedback.image} alt={feedback.name} />
          <h3 className='section-title'>{feedback.name}</h3>
        </div>
        <p className='paragraph-text'>{feedback.comment}</p>
      </div>
    )
  }

  return (
    <section className={style.testimonials}>
      <h2 className='display-title'>Testimonials</h2>
      <div className={style.ratingContainer}>
        {feedBacks.map(feedback => {
          return <FeedbackBox
            key={feedback.name}
            feedback={feedback} />
        })}
      </div>
    </section>
  )
}

export default Testimonials;