import { Link } from 'react-router-dom'
import styles from './header.module.scss'
import { ROUTES } from '../../../app/appRouter'
import { HeartIcon, IconCart, Logo, SearchIcon } from '../../../shared/ui/Icon/Icon'
import avatar from './../../../../public/avatar.jpg'
import { Input } from '../../../shared/ui/Input/Input'

export const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.logo}>
        <Link to={ROUTES.HOME}>
          <Logo />
        </Link>
      </div>

      <div className={styles.info}>
        <div className={styles.user} onClick={() => {}}>
          <div
            className={styles.avatar}
            style={{ backgroundImage: `url(${avatar})` }}
          />
          <div className={styles.username}>Guest</div>
        </div>

        <form className={styles.form}>
          <div className={styles.icon}>
            <SearchIcon />
          </div>
          <div className={styles.input_inp}>
            <Input type='search' name='search' placeholder='Search for anything...' value={''}/>
          </div>
        </form>

        <div className={styles.account}>
          <Link to={ROUTES.HOME} className={styles.favourites}>
            <HeartIcon />
          </Link>

          <Link to={ROUTES.CART} className={styles.cart}>
            <IconCart />
            <span className={styles.count}>2</span>
          </Link>
        </div>
      </div>
    </div>
  )
}