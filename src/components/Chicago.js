import style from './Chicago.module.css';
import image1 from '../assets/restaurant chef B.jpg';
import image2 from '../assets/restaurant.jpg';

function About() {
  return (
    <section className={style.aboutSection}>
      <div className={style.textBox}>
        <h1 className='display-title'>Little Lemon</h1>
        <h2 className='sub-title'>Chicago</h2>
        <p className='lead-text'>
          Little Lemon in Chicago is a vibrant and welcoming restaurant where classic flavors meet
          modern flair. Nestled in the heart of the city, Little Lemon serves fresh, thoughtfully
          prepared dishes made with locally sourced ingredients. From bright, flavorful salads and
          handcrafted pastas to signature entrees that celebrate bold taste and quality, every meal
          reflects our passion for great food and warm hospitality. Whether you’re joining us for a
          casual lunch or a memorable dinner with friends and family, Little Lemon offers a relaxed
          atmosphere and a delicious taste of Chicago.
        </p>
      </div>
      <div className={style.imageBox}>
        <img className={style.image1} src={image1} alt='Chefs pictures' />
        <img className={style.image2} src={image2} alt='Restaurant environment' />
      </div>
    </section>
  )
}

export default About;