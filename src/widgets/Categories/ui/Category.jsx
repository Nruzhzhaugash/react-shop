import { Link } from 'react-router-dom';
import PropTypes from 'prop-types'; 

import { CategoriesCard } from '@/entities/CategoriesCard';

import styles from './Category.module.scss'

export const Categories = ({ title, products = [], amount }) => {
  const list = products.map((_, i) => i < amount);

  return (
    <section className={styles.section}>
      <h2>{title}</h2>
      <div className={styles.list}>
        {list.map(({ id, name, image }) => (
          <Link to={`/categories/${id}`} key={id} className={styles.item}>
            <CategoriesCard 
              image={image} 
              name={name} 
            />  
          </Link>
        ))}
      </div>
    </section>
  )
}

Categories.propTypes = {
  title: PropTypes.string.isRequired, 
  products: PropTypes.arrayOf(PropTypes.shape({ 
    id: PropTypes.string.isRequired, 
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired 
  })),
  amount: PropTypes.number.isRequired,
};