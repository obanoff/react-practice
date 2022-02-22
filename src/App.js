import React from 'react';

import Card from './components/UI/Card';
import UserInput from './components/UserInput';
import UsersList from './components/UsersList';
import ErrorModal from './components/ErrorModal';

function App() {
  const [users, setUsers] = React.useState([]);
  const [state, setState] = React.useState(true);
  const [errorMessage, setErrorMessage] = React.useState('');

  const onClickHandler = (e) => {
    setState(true);
  };

  const addUserHandler = (user) => {
    setUsers((prev) => [...prev, user]);
  };

  const errorStateHandler = (message) => {
    setErrorMessage(message);
    setState(false);
  };

  return (
    <Card>
      <UserInput
        onAddUser={addUserHandler}
        state={state}
        setError={errorStateHandler}
      />
      {users.length > 0 && <UsersList users={users} />}
      {state || <ErrorModal clickHandler={onClickHandler} message={errorMessage} />}
    </Card>
  );
}

export default App;
