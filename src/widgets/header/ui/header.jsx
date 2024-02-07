import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import { ROUTES } from '@/app/appRouter'
import { toogleForm } from '@/shared/model/user/userSlice'
import { HeartIcon, IconCart, Logo} from '@/shared/ui/Icon/Icon'
import { useGetProductsQuery } from '@/shared/api/apiSlice'
import { Dropdown } from '@/features/dropdown'
import { Search } from '@/features/Search'

import styles from './header.module.scss'
import AVATAR from '../../../../public/avatar.jpg'

export const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [searchValues, setSearchValues] = useState('');
  const { currentUser } = useSelector(({ user }) => user);
  const { data, isLoading } = useGetProductsQuery({ title: searchValues })
  const [values, setValues] = useState({ name: 'Sign Up', avatar: AVATAR })

  useEffect(() => {
    if(!currentUser) return;

    setValues(currentUser)
  }, [currentUser])

  const handleChange = ({ target: { value } }) => {
    setSearchValues(value)
  }

  const handleClick = () => {
    if(!currentUser) dispatch(toogleForm(true));
    else navigate(ROUTES.PROFILE);
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

        <Search value={searchValues} onChange={handleChange} >
          {searchValues && (
            <div className={styles.box}>
              {isLoading 
                ? "Loading..."
                : !data.length
                ? 'No results'
                : data.map(({ title, images, id }) => {
                  return (
                    <Dropdown onClick={() => setSearchValues('')} title={title} images={images[0]} key={id} />                  
                  );
                })}
            </div>
          )}
        </Search>

        

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
