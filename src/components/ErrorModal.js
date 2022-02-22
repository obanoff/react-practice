import styles from './ErrorModal.module.css';
import Button from './UI/Button';

function ErrorModal(props) {
  return (
    <div className={styles['error-modal']} onClick={props.clickHandler}>
      <div className={styles['error-modal__window']}>
        <div className={styles['error-modal__label']}>Invalid input</div>
        <div className={styles['error-modal__body']}>
          <p>{props.message}</p>
          <Button onClick={props.clickHandler}>Okay</Button>
        </div>
      </div>
    </div>
  );
}

export default ErrorModal;
