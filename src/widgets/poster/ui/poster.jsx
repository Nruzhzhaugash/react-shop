import styles from './poster.module.scss'

import { Button } from '../../../shared/ui/Button/Button'
import { Computer } from '../../../shared/ui/Icon/Icon'

export const Poster = () => {
  return (
    <section className={styles.home}>
      <div className={styles.title}>BIG SALE 20%</div>
      <div className={styles.product}>
        <div className={styles.text}>
          <div className={styles.subtitle}>the bestseller of 2024</div>
          <h1 className={styles.head}>LENNON r2d2 with NVIDIA 5090 TI</h1>
          <Button label='Shop now' className={styles.btn} />
        </div>
        <div className={styles.image}>
          <Computer />
        </div>
      </div>
    </section>
  )
}