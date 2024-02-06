import { useState } from 'react'
import { useDispatch } from 'react-redux'

import { loginUser } from '../model/login'
import { Button } from '@/shared/ui/Button/Button'
import { CloseIcon } from '@/shared/ui/Icon/Icon'
import { UserForm } from '@/widgets/Form/ui/form'

import styles from './LoginForm.module.scss'

export const LoginForm = ({ toogleCurrentFormType, closeForm }) => {
  const dispatch = useDispatch();
  const [values, setValues] = useState({
    email: '',
    password: '',
  });

  const handleChange = ({ target: { value, name } }) => {
    setValues({ ...values, [name]: value });
  };

  const handleSumbit = (e) => {
    e.preventDefault();

    const isEmpty = Object.values(values).every(val => val);

    if (isEmpty) return;
    dispatch(loginUser(values));
    closeForm();
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.close} onClick={closeForm}>
        <CloseIcon />
      </div>

      <div className={styles.title}>Log In</div>

      <UserForm values={values} onChange={handleChange} onSubmit={handleSumbit} />

      <div 
        className={styles.link}
        onClick={() => toogleCurrentFormType('signup')}
      >
        Create have an account
      </div>

      <Button label='Login' className={styles.submit} type='submit' />
    </div>
  )
}

LoginForm.propTypes