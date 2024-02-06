import PropTypes from 'prop-types'
import styles from './AddToCart.module.scss'
import { Button } from "@/shared/ui/Button/Button"

export const AddToCart = ({ disabled, onClick }) => {
  return (
    <Button 
      onClick={onClick}
      disabled={disabled}
      className={styles.add}
      label='Add to cart'
    />
  )
}

AddToCart.propTypes = {
  disabled: PropTypes.bool,
  onClick: PropTypes.func
} 