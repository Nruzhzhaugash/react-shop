import PropTypes from './Size.module.scss'
import styles from './Size.module.scss'

export const Size = (props) => {
  const { size, children, onClick, className } = props

  return (
    <div onClick={onClick} className={`${styles.size} ${className ? styles.active : ''}`} key={size}>
      {children}
    </div> 
  )
}

Size.propTypes = {
  size: PropTypes.number,
  children: PropTypes.node,
  onClick: PropTypes.func,
  className: PropTypes.string
}

