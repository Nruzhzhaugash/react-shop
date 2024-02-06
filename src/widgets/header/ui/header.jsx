import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import { ROUTES } from '@/app/appRouter'
import { Input } from '@/shared/ui/Input/Input'
import { toogleForm } from '@/shared/model/user/userSlice'
import { HeartIcon, IconCart, Logo, SearchIcon } from '@/shared/ui/Icon/Icon'

import styles from './header.module.scss'
import AVATAR from '../../../../public/avatar.jpg'
import { useEffect, useState } from 'react'

export const Header = () => {
  const dispatch = useDispatch()
  const { currentUser } = useSelector(({ user }) => user);
  const [values, setValues] = useState({ name: 'Sign Up', avatar: AVATAR })

  useEffect(() => {
    if(!currentUser) return;

    setValues(currentUser)
  }, [currentUser])

  const handleClick = () => {
    if(!currentUser) dispatch(toogleForm(true));
  }

  return (
    <div className={styles.header}>
      <div className={styles.logo}>
        <Link to={ROUTES.HOME}>
          <Logo />
        </Link>
      </div>

      <div className={styles.info}>
        <div className={styles.user} onClick={handleClick}>
          <div
            className={styles.avatar}
            style={{ backgroundImage: `url(${values.avatar})` }}
          />
          <div className={styles.username}>{values.name}</div>
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

          <Link to={ROUTES.HOME} className={styles.cart}>
            <IconCart />
            <span className={styles.count}>2</span>
          </Link>
        </div>
      </div>
    </div>
  )
}