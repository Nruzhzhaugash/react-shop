import PropTypes from './Size.module.scss'
import styles from './Size.module.scss'

export const Size = (props) => {
  const { size } = props

  return (
    <div onClick={() => {}} className={`${styles.size}`} key={size}>
      {size}
    </div> 
  )
}

Size.propTypes = {
  size: PropTypes.string
}

