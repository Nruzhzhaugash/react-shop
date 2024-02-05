import PropTypes from 'prop-types'
import styles from './ProductP.module.scss'

export const ProductDetails = (props) => {
  const { image, i } = props

  return (
    <div
      className={styles.image}
      key={i}
      style={{ backgroundImage: `url(${image})` }}
      onClick={() => {}}
    />
  )
}

ProductDetails.propTypes = {
  image: PropTypes.arrayOf,
  i: PropTypes.string
}