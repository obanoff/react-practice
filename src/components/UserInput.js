import React from 'react';

import styles from './UserInput.module.css';
import Button from './UI/Button';

function UserInput(props) {
  const [user, setUser] = React.useState({ username: '', age: '' });

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (user.username.trim().length === 0 || user.age.length === 0) {
      console.log('Please enter a valid name and age (non-empty values).');
      props.setError('Please enter a valid name and age (non-empty values).');
      return;
    }
    if (+user.age < 0) {
      console.log('Please enter a valid age (> 0).');
      props.setError('Please enter a valid age (> 0).');
      return;
    }
    e.preventDefault();
    props.onAddUser(user);
    setUser({ username: '', age: '' });
  };

  const onChangeHandler = (e) => {
    if (e.target.name in user) {
      setUser((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    }
  };

  return (
    <form className={styles['form-input']} onSubmit={onSubmitHandler}>
      <div className={styles['form-input__item']}>
        <label>Username</label>
        <input
          type="text"
          onChange={onChangeHandler}
          name="username"
          value={user.username}
        ></input>
      </div>
      <div className={styles['form-input__item']}>
        <label>Age(Years)</label>
        <input
          type="number"
          onChange={onChangeHandler}
          name="age"
          value={user.age}
        ></input>
      </div>
      <Button type={'submit'}>Add User</Button>
    </form>
  );
}

export default UserInput;
