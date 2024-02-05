import PropTypes from 'prop-types'
import styles from './ProductCard.module.scss'

export const ProductCard = (props) => {
  const { images, title, price, cat } = props
  
  return (
    <>
      <div 
        className={styles.image} 
        style={{ backgroundImage: `url(${images})` }} 
      />
      <div className={styles.wrapper}>
        <h3 className={styles.title}>{title}</h3>
        <div className={styles.cat}>{cat}</div>
        <div className={styles.info}>
          <div className={styles.prices}>
            <div className={styles.price}>{price}$</div>
            <div className={styles.oldPrice}>
              {Math.floor(price * 0.8)}$
            </div>
          </div>

          <div className={styles.purchases}>
            {Math.floor(Math.random() * 20 + 1)} purchased
          </div>
        </div>
      </div>
    </>
  )
}

ProductCard.propTypes = {
  images: PropTypes.arrayOf,
  id: PropTypes.string,
  title: PropTypes.string,
  price: PropTypes.number,
  cat: PropTypes.string,
}
