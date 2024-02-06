import { useDispatch, useSelector } from 'react-redux';

import { SignUpForm } from '../../SignUpForm/ui/SignUpForm';
import { toogleForm } from '@/shared/model/user/userSlice';
import { toogleFormType } from '@/shared/model/user/userSlice';
import { LoginForm } from '../../login';

import styles from './userForm.module.scss';

export const UserForm = () => {
  const dispatch = useDispatch();
  const { showForm, formType } = useSelector(({ user }) => user);

  const closeForm = () => dispatch(toogleForm(false));
  const toogleCurrentFormType = (type) => dispatch(toogleFormType(type));

  return showForm ? (
    <>
      <div className={styles.overlay} onClick={closeForm} />
      {formType === 'signup' ? (
        <SignUpForm toogleCurrentFormType={toogleCurrentFormType} closeForm={closeForm} /> 
      ) : (
        <LoginForm toogleCurrentFormType={toogleCurrentFormType} closeForm={closeForm} />
      )}
    </>
  ) : (
    <></>
  );
};
