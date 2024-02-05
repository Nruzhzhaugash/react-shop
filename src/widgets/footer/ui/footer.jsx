import { Link } from 'react-router-dom'
import styles from './footer.module.scss'
import { InstaIcon, Logo } from '../../../shared/ui/Icon/Icon'

export const Footer = () => {
  return (
    <section className={styles.footer}>
      <div className={styles.logo}>
        <Link className={styles.logo}>
          <Logo />
        </Link>
      </div>

      <div className={styles.rights}>
        Developed by {" "}
        <a 
          href=""
          target='_blank'
          rel='noreferrer'
        >
          Nurzh
        </a>
      </div>

      <div className={styles.socials}>
        <a
          href="https://instagram.com"
          target='_blank'
          rel='noreferrer'
        >
          <InstaIcon />
        </a>
      </div>
    </section>
  )
}