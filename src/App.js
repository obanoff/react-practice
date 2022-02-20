import React from 'react';

import styles from './App.module.css';
import UserInput from './components/UserInput';
import UsersList from './components/UsersList';

function App() {
  return (
    <div className={styles.container}>
      <UserInput />
      <UsersList />
    </div>
  );
}

export default App;
