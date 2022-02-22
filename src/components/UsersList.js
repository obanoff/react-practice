import React from 'react';

import styles from './UsersList.module.css';
import User from './User';

function UsersList(props) {
  return (
    <ul className={styles['users-list']}>
      {props.users.map((user) => (
        <User data={user} key={Math.random()} />
      ))}
    </ul>
  );
}

export default UsersList;
