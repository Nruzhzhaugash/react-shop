import PropTypes from 'prop-types'
import styles from './Cart.module.scss'

export const CategoriesCard = (props) => {
  const { image, name } = props

  return (
    <>
      <div 
        className={styles.image}
        style={{ backgroundImage: `url(${image})` }}
        loading='lazy'
      />
      <h3 className={styles.title}>{name}</h3>
    </>
  )
}

CategoriesCard.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};