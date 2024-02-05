import PropTypes from 'prop-types';
import cn from 'classnames';
import styles from './Input.module.scss'

export const Input = (props) => {
  const { type, name, placeholder, className, value, onChange } = props;
  return (
    <input 
      type={type} 
      autoComplete='off' 
      className={cn(className ,styles.input, 'input')} 
      name={name} 
      value={value}
      onChange={onChange}
      placeholder={placeholder} 
    />
  );
};

Input.propTypes = {
  type: PropTypes.string,
  placeholder: PropTypes.string,
  name: PropTypes.string,
  className: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func
};
