import styles from './Input.module.scss';

const Input = ({ onEnterKeyPress, onKeyPress, ...rest}) => {

  const handleKeyPress = (e) => {
    if (onEnterKeyPress && e.key === 'Enter') {
      onEnterKeyPress(e);
    }
    if (onKeyPress) {
      onKeyPress(e);
    }
  };

  return (
    <input
      className={styles.input}
      {...rest}
      onKeyPress={handleKeyPress} />
  );
}

export default Input;