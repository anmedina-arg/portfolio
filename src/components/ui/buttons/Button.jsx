import styles from './button.module.css';

const Button = ({reference, text}) => {
  return (
    <a className={styles.boton} href={reference} key='buton'>{text}</a>
  )
};

export default Button;