import PropTypes from 'prop-types';
import styles from './Input.module.scss'

export const Input = (props) => {
  const { type } = props;
  return (
    <input type={type} className={styles.input} />
  );
};

Input.propTypes = {
  type: PropTypes.string,
};
