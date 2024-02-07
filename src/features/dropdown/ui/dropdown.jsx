import PropTypes from 'prop-types'

import { Link } from 'react-router-dom'
import styles from './dropdown.module.scss'

export const Dropdown = (props) => {
  const { images, title, key, onClick } = props

  return (
      <Link
        key={key}
        to={`products/${key}`}
        className={styles.item}
        onClick={onClick}
      >
        <div
          className={styles.image}
          style={{ backgroundImage: `url(${images})` }}
        />
        <div className={styles.title}>{title}</div>
      </Link>
  )
}

Dropdown.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
  title: PropTypes.string,
  key: PropTypes.string || PropTypes.number,
  onClick: PropTypes.func
}