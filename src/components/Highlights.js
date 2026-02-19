import style from './Highlights.module.css';
import greekSalad from '../assets/greek salad.jpg';
import bruchetta from '../assets/bruchetta.svg';
import lemonDessert from '../assets/lemon dessert.jpg';

const specialsData = [
  {
    name: "Greek Salad",
    price: "$ 12.99",
    description: "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.", 
    image: greekSalad,
  },
  {
    name: "Bruschetta",
    price: "$ 5.99",
    description: "Our Bruschetta is made from grilled bread that has been rubbed with garlic and seasoned with salt and olive oil.", 
    image: bruchetta,
  },
  {
    name: "Lemon Dessert",
    price: "$ 5.00",
    description: "Fresh lemon dessert with a light, airy meringue topping and a hint of citrus.",
    image: lemonDessert,
  }
]

function Highlights() {

  const Headline = () => {
    return (
      <div className={style.headline}>
        <h2 className='display-title'>This weeks specials!</h2>
        <button className='section-categories'>Order Online</button>
      </div>
    )
  }

  const Specials = () => {
    const Cards = ({data}) => {
      return (
        <article className={style.cards}>
          <img src={data.image} alt={data.name} />
          <div className={style.cardHeader}>
            <h3 className='card-title'>{data.name}</h3>
            <span className='highlight-text'>{data.price}</span>
          </div>
          <p>{data.description}</p>
          <div className={style.cardFooter}>
            <button className='section-categories'>Order a delivery</button>
            <span aria-hidden="true">🚲</span> {/*This emoji is for the decoration only. */}
          </div>
        </article>
      )
    }

    return (
      <div className={style.specials}>
        { specialsData.map((item) => {
            return <Cards
              key={item.name}
              data={item}
            />
          }) }
      </div>
    )
  }

  return (
    <section className={style.features} >
      <Headline></Headline>
      <Specials></Specials>
    </section>
  )
}

export default Highlights;