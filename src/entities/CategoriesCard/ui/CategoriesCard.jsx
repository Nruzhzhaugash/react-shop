import PropTypes from 'prop-types'
import styles from './Cart.module.scss'

export const CategoriesCard = (props) => {
  const { images, name } = props

  return (
    <>
      <div 
        className={styles.image}
        style={{ backgroundImage: `url(${images})` }}
        loading='lazy'
      />
      <h3 className={styles.title}>{name}</h3>
    </>
  )
}

CategoriesCard.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string),
  name: PropTypes.string.isRequired,
};