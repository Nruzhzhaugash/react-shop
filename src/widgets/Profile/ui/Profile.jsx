import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'

import { Button } from '@/shared/ui/Button/Button'
import { updateUser } from '../model/updateUser';
import { UserForm } from '../../Form/ui/form'

import styles from './Profile.module.scss'

export const UserProfile = () => {
  const dispatch = useDispatch();
  const { currentUser } = useSelector(({ user }) => user);

  const [values, setValues] = useState({
    email: '',
    name: '',
    password: '',
    avatar: ''
  })

  useEffect(() => {
    if (!currentUser) return;

    setValues(currentUser);
  }, [currentUser])

  const handleChange = ({ target: { value, name } }) => {
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const isNotEmpty = Object.values(values).every((val) => val);

    if(!isNotEmpty) return;
    dispatch(updateUser(values));
  }

  return (
    <section className={styles.profile}>
      {!currentUser ? (
        <span>You need to log in</span>
      ) : (
        <>
          <UserForm values={values} onChange={handleChange} onSubmit={handleSubmit} /> 
          <Button label='Update' type='submit' className={styles.submit} />
        </>
      )}
    </section>
  )
}