import { useState } from 'react'
import { useDispatch } from 'react-redux'

import { createUser } from '@/shared/model/user/userSlice'
import { Button } from '@/shared/ui/Button/Button'
import { CloseIcon } from '@/shared/ui/Icon/Icon'
import { UserForm } from '@/widgets/Form/ui/form'

import styles from './SignUpForm.module.scss'

export const SignUpForm = ({ toogleCurrentFormType, closeForm }) => {
  const dispatch = useDispatch();
  const [values, setValues] = useState({
    email: '',
    name: '',
    password: '',
    avatar: ''
  });

  const handleChange = ({ target: { value, name } }) => {
    setValues({ ...values, [name]: value });
  };

  const handleSumbit = (e) => {
    e.preventDefault();

    const isEmpty = Object.values(values).every(val => val);

    if (isEmpty) return;
    dispatch(createUser(values));
    closeForm();
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.close} onClick={closeForm}>
        <CloseIcon />
      </div>

      <div className={styles.title}>
        Sign Up
      </div>

      <UserForm values={values} onChange={handleChange} onSubmit={handleSumbit} />

      <div 
        className={styles.link}
        onClick={() => toogleCurrentFormType('login')}
      >
        I already have an account
      </div>

      <Button label='Create an account' className={styles.submit} type='submit' />
    </div>
  )
}

SignUpForm.propTypes