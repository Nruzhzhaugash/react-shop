import { Link } from 'react-router-dom'
import styles from './header.module.scss'
import { ROUTES } from '../../../app/appRouter'
import { Logo } from '../../../shared/ui/Icon/Icon'
import avatar from './../../../../public/avatar.jpg'

export const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.logo}>
        <Link to={ROUTES.HOME}>
          <Logo />
        </Link>
      </div>

      <div className={styles.info}>
        <div className={styles.user}>
          <div className={styles.avatar} style={{ backgroundImage: `url(${avatar})` }} >
            <div className={styles.username}>Guest</div>
          </div>
        </div>
      </div>
    </div>
  )
}