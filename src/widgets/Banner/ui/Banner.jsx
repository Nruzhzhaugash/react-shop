import styles from './Banner.module.scss';
import banner from './../../../../public/banner.png'
import { Button } from '@/shared/ui/Button/Button';

export const Banner = () => {
  return (
    <section className={styles.banner}>
    <div className={styles.left}>
      <p className={styles.content}>
        NEW YEAR
        <span>SALE</span>
      </p>
      <Button className={styles.more} label='See more' />
    </div>

    <div
      className={styles.right}
      style={{ backgroundImage: `url(${banner})` }}
    >
      <p className={styles.discount}>
        save up to <span>50%</span> off
      </p>
    </div>
  </section>
  )
}