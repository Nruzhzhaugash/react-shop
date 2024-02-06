import styles from './AddToCart.module.scss'
import { Button } from "@/shared/ui/Button/Button"

export const AddToCart = () => {
  return (
    <Button 
      className={styles.add}
      label='Add to cart'
    />
  )
}