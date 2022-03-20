import styles from './Label.module.scss';

const Label = ({ name, color, className }) => (
  <div className={`${styles.label} ${className}`}>
    { name }
  </div>
);

export default Label;
