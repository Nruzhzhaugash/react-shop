import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types'
import { useEffect, useState } from 'react';

import styles from './Product.module.scss';

import { ProductDetails } from '@/entities/Product';
import { Link } from 'react-router-dom';
import { ROUTES } from '@/app/appRouter';
import { AddToCart } from '@/features/AddToCart';
import { AddToFavourite } from '@/features/AddToFavourite';
import { Size } from '@/features/Size/ui/Size';
import { addItemToCart } from '@/shared/model/user/userSlice';

const SIZES = [4, 4.5, 5];

export const Product = (item) => {
  const { title, price, images, description } = item;
  
  const dispatch = useDispatch()
  
  const [currentImage, setCurrentImage] = useState()
  const [currentSize, setCurrentSize] = useState()

  useEffect(() => {
    if (!images.length) return;

    setCurrentImage(images[0]);
  }, [images]);

  const addToCart = () => {
    dispatch(addItemToCart(item))
  }

  return (
    <section className={styles.product}>
      <div className={styles.images}>
        <div 
          className={styles.current}
          style={{ backgroundImage: `url(${currentImage})` }}
        />
        <div className={styles["images-list"]}>
          {images.map((image, i) => (
            <ProductDetails key={i} onClick={() => setCurrentImage(image)} image={image} />
          ))}
        </div>
      </div>
      <div className={styles.info}>
        <h1>{title}</h1>
        <div className={styles.price}>{price}$</div>
        <div className={styles.color}><span>Color:</span> Blanc</div>
        <div className={styles.sizes}>
          <span>Sizes:</span>

          <div className={styles.list}>
            {SIZES.map((size) => (
              <Size key={size} onClick={() => setCurrentSize(size)} className={currentSize === size } >{size}</Size>
            ))}
          </div>
        </div>

        <p className={styles.desc}>{description}</p>

        <div className={styles.actions}>
          <AddToCart onClick={addToCart} disabled={!currentSize}/>
          <AddToFavourite />
        </div>

        <div className={styles.bottom}>
          <div className={styles.purchase}>19 people purchased</div>

          <Link to={ROUTES.HOME}>Return to store</Link>
        </div>
      </div>
    </section>
  )
}

Product.propTypes = {
  title: PropTypes.string,
  images: PropTypes.arrayOf(PropTypes.string),
  price: PropTypes.number,
  description: PropTypes.string
}