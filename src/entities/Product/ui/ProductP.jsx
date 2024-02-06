import PropTypes from 'prop-types'
import styles from './ProductP.module.scss'

export const ProductDetails = (props) => {
  const { image, i, onClick } = props
  return (
    <div
      className={styles.image}
      key={i}
      style={{ backgroundImage: `url(${image})` }}
      onClick={onClick}
    />
  )
}

ProductDetails.propTypes = {
  image: PropTypes.string,
  i: PropTypes.string,
  onClick: PropTypes.func
}