import PropTypes from 'prop-types'
import { useSelector } from 'react-redux';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import styles from './form.module.scss';

export const UserForm = (props) => {
  const { onSubmit, values, onChange } = props;
  const { formType } = useSelector(({ user }) => user);
  const data = [
    { type: 'text', name: 'name', placeholder: 'Your name', id: 'name' },
    { type: 'email', name: 'email', placeholder: 'Your email', id: 'email' },
    { type: 'password', name: 'password', placeholder: 'Your password', id: 'password' },
    { type: 'text', name: 'avatar', placeholder: 'Your avatar', id: 'avatar' },
  ];

  const filteredData = formType === 'signup' ? data : data.filter(field => field.name === 'email' || field.name === 'password');

  return (
    <Formik 
      initialValues={{
        email: values.email,
        name: values.name,
        password: values.password,
        avatar: values.avatar
      }}
      validationSchema={Yup.object().shape({
        name: formType === 'signup' ? Yup.string().min(3, 'Min 3 letters').required('Obligatory field') : null,
        email: Yup.string().email('Invalid email').required('Required'),
        password: Yup.string().min(8, 'Min 8 symbols').required('Obligatory field'),
        avatar: formType === 'signup' ? Yup.string().min(3, 'Min 3 symbols').required('Obligatory field') : null,
      })}
      onSubmit={values => console.log(JSON.stringify(values, null, 2))}
    >
      <Form className={styles.form} onSubmit={onSubmit}>
        {filteredData.map(({ type, name, id, placeholder }, index) => (
          <div key={index} className={styles.group}>
            <Field 
              id={id}
              name={name}
              type={type}
              className={styles.input}
              placeholder={placeholder}
              onChange={onChange}
            />
            <ErrorMessage name={name} component='h3' className={styles.error} />
          </div>
        ))}
      </Form>
    </Formik>
  );
};

UserForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  values: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  formType: PropTypes.oneOf(['signup', 'login']).isRequired,
};