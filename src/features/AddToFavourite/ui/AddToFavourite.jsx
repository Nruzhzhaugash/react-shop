import styles from './AddToFavourite.module.scss'
import { Button } from "@/shared/ui/Button/Button"

export const AddToFavourite = () => {
  return (
    <Button 
      label='Add to favourites' 
      className={styles.favourite}
    />
  )
}