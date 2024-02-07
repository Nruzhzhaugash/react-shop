import { useSelector } from 'react-redux';
import PropTypes from 'prop-types'
import { Button } from '@/shared/ui/Button/Button'
import styles from './form.module.scss';

export const UserForm = (props) => {
  const { values, onSubmit, onChange } = props
  const { formType } = useSelector(({ user }) => user);
  const data = [
    { type: 'email', name: 'email', placeholder: 'Your email' },
    { type: 'name', name: 'name', placeholder: 'Your name' },
    { type: 'password', name: 'password', placeholder: 'Your password' },
    { type: 'avatar', name: 'avatar', placeholder: 'Your avatar' },
  ];

  const filteredData = formType === 'signup' ? data : data.filter(field => field.name === 'email' || field.name === 'password');
  const labelData = formType === 'signup' ? 'Create an account' : 'Login'

  return (
    <form className={styles.form} onSubmit={onSubmit}>
      {filteredData.map(({ type, name, placeholder }, index) => (
        <div key={index} className={styles.group}>
          <input 
            type={type} 
            name={name}
            placeholder={placeholder}
            className={styles.input} 
            values={values}
            onChange={onChange}
            required
          />
        </div>
      ))}
      <Button label={labelData} className={styles.submit} type='submit' />
    </form>
  );
};

UserForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  values: PropTypes.string,
  onChange: PropTypes.func,
  setValues: PropTypes.string.isRequired,
  formType: PropTypes.oneOf(['signup', 'login']).isRequired,
};