import PropTypes from 'prop-types'
import styles from './Button.module.scss';
import cn from 'classnames';

export const Button = (props) => {
  const { className, onClick, label } = props
  return (
    <button 
      className={cn(className, styles.button, 'button')}
      onClick={onClick}
    >
      {label}
    </button>
  )
}

Button.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes,
  label: PropTypes.string
};