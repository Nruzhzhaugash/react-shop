import { useState } from 'react'
import { useDispatch } from 'react-redux'

import { loginUser } from '../model/login'
import { CloseIcon } from '@/shared/ui/Icon/Icon'

import styles from './LoginForm.module.scss'
import { UserForm } from '../../../../widgets/Form/ui/form'

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

    const isNotEmpty = Object.values(values).every(val => val);

    if (!isNotEmpty) return;
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

    </div>
  )
}

LoginForm.propTypes