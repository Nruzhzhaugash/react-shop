import { Input } from '@/shared/ui/Input/Input';
import styles from './Filter.module.scss';

export const Filter = (props) => {
  const { handleChange, title, price_max, price_min, onSubmit } = props

  return (
    <form className={styles.filters} onSubmit={onSubmit} >
      <div className={styles.filter}>
        <Input 
          type='text'
          name='title'
          onChange={handleChange}
          placeholder='Product Name'
          value={title}
        />
      </div>
      <div className={styles.filter}>
        <Input 
          type='text'
          name='price_min'
          onChange={handleChange}
          placeholder='Product Name'
          value={price_min}
        />
      </div>
      <div className={styles.filter}>
        <Input 
          type='text'
          name='price_max'
          onChange={handleChange}
          placeholder='Product Name'
          value={price_max}
        />
        <span>Price to</span>
      </div>
    </form>
  )
}

Filter.propTypes