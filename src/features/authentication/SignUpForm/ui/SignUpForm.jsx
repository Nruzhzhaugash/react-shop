import { useState } from 'react'
import { useDispatch } from 'react-redux'

import { CloseIcon } from '@/shared/ui/Icon/Icon'
import { UserForm } from '@/widgets/Form/ui/form'
import { createUser } from '../model/signup'

import styles from './SignUpForm.module.scss'

export const SignUpForm = ({ toogleCurrentFormType, closeForm }) => {
  const dispatch = useDispatch();
  const [values, setValues] = useState({
    name: '',
    email: '',
    password: '',
    avatar: ''
  })

  const handleChange = ({ target: {value, name} }) => {
    setValues({ ...values, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const isNotEmpty = Object.values(values).every((val) => val);

    if(!isNotEmpty) return;
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

      <UserForm values={values} onChange={handleChange} onSubmit={handleSubmit} />

      <div 
        className={styles.link}
        onClick={() => toogleCurrentFormType('login')}
      >
        I already have an account
      </div>
    </div>
  )
}

SignUpForm.propTypes