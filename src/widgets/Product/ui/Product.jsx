import { ProductDetails } from '../../../entities/Product';
import PropTypes from 'prop-types'

import styles from './Product.module.scss'
import { Size } from '@/entities/Size';
import { Link } from 'react-router-dom';
import { ROUTES } from '@/app/appRouter';
import { AddToCart } from '@/features/AddToCart';
import { AddToFavourite } from '@/features/AddToFavourite';

const SIZES = [4, 4.5, 5];

export const Product = ({ title, price, images, description }) => {
  const currentImage = images[0];

  return (
    <section className={styles.product}>
      <div className={styles.images}>
        <div 
          className={styles.current}
          style={{ backgroundImage: `url(${currentImage})` }}
        />
        <div className={styles["images-list"]}>
          {images.map((image, i) => (
            <ProductDetails key={i} image={image} />
          ))}
        </div>
      </div>
      <div className={styles.info}>
        <h1>{title}</h1>
        <div className={styles.price}>
          {price}
        </div>
        <div className={styles.color}>
          <span>Color:</span> Blanc
        </div>
        <div className={styles.sizes}>
          <span>Sizes:</span>

          <div className={styles.list}>
            {SIZES.map(size => (
              <Size key={size}/>
            ))}
          </div>
        </div>

        <p className={styles.desc}>{description}</p>

        <div className={styles.actions}>
          <AddToCart />
          <AddToFavourite />
        </div>

        <div className={styles.bottom}>
          <div className={styles.purchase}>19 people purchased</div>

          <Link to={ROUTES.HOME}>
            Return to store
          </Link>
        </div>
      </div>
    </section>
  )
}

Product.propTypes = {
  title: PropTypes.string,
  images: PropTypes.arrayOf,
  price: PropTypes.number,
  description: PropTypes.string
}