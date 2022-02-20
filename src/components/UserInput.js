import React from "react";

import styles from './UserInput.module.css';
import Button from "./UI/Button";

function UserInput(props) {
  return (
    <form className={styles['form-input']}>
      <div className={styles['form-input__item']}>
        <label>Username</label>
        <input type="text"></input>
      </div>
      <div className={styles['form-input__item']}>
        <label>Age(Years)</label>
        <input type="number"></input>
      </div>
      <Button>Add User</Button>
    </form>
  )
}

export default UserInput;