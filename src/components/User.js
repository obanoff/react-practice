import styles from './User.module.css';

function User({ data }) {
  return (
    <li className={styles['list-item']}>
    {`${data.username} (${data.age} years old)`}
    </li>
  )
}

export default User;
