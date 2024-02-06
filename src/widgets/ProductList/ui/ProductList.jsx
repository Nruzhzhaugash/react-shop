import { Link } from 'react-router-dom';
import PropTypes from 'prop-types'; 
import styles from './ProductList.module.scss';
import { ProductCard } from '../../../entities/ProductCard';

export const ProductList = ({ title, products = [], amount, style = {} }) => {
  const list = products.filter((_, i) => i < amount);

  return (
    <section className={styles.products} style={style}>
      {title && <h2>{title}</h2>}

      <div className={styles.list}>
        {list.map(({ id, images, title, category: { name: cat }, price }) =>(
          <Link to={`/products/${id}`} key={id} className={styles.product}>
            <ProductCard images={images[0]} price={price} title={title} cat={cat}/>
          </Link>
        ))}
      </div>
    </section>
  );
}

ProductList.propTypes = {
  title: PropTypes.string, 
  products: PropTypes.arrayOf(PropTypes.shape({ 
    id: PropTypes.string, 
    images: PropTypes.arrayOf, 
    title: PropTypes.string.isRequired, 
    category: PropTypes.shape({
      name: PropTypes.string.isRequired 
    }).isRequired,
    price: PropTypes.number.isRequired, 
  })),
  amount: PropTypes.number,
  style: PropTypes.object 
}

