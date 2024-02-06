import PropTypes from 'prop-types'

import cn from 'classnames';

import styles from './Button.module.scss';

export const Button = (props) => {
  const { className, onClick, label, disabled, type } = props
  return (
    <button 
      className={cn(className, styles.button, 'button')}
      onClick={onClick}
      disabled={disabled}
      type={type}
    >
      {label}
    </button>
  )
}

Button.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes,
  label: PropTypes.string,
  disabled: PropTypes.bool,
  type: PropTypes.string
};