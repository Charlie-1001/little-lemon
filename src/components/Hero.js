import style from './Hero.module.css';
import featuredImage from '../assets/restauranfood.jpg';
import {NavLink} from 'react-router-dom';

function Hero() {

  const LeadText = () => {
    return (
      <div className={style.leadText}>
        <h1 className='display-title'>Little Lemon</h1>
        <h2 className='sub-title'>Chicago</h2>
        <p className='lead-text'>
          We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern
          twist.
        </p>
        <NavLink to='/booking'>
          <button className='section-categories'>Reserve a Table</button>
        </NavLink>
      </div>
    )
  }

  const FeaturedImage = () => {
    return (
      <img className={style.featuredImage} src={featuredImage} alt='The featured food at Little Lemon restaurant'/>
    )
  }

  return (
    <section className={style.heroSection}>
      <LeadText></LeadText>
      <FeaturedImage></FeaturedImage>
    </section>
  )
}

export default Hero;