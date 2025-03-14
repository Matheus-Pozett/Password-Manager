import { useState } from 'react';
import './App.css';
import { ButtonNewPassword, Form, Title } from './components';

function App() {
  const [showForm, setShowForm] = useState(false);

  const handleShowForm = () => {
    setShowForm(!showForm);
  };

  return (
    <main>
      <Title />

      {showForm ? (<Form handleShowForm={ handleShowForm } />
      ) : (
        <ButtonNewPassword handleShowForm={ handleShowForm } />
      )}
    </main>
  );
}

export default App;
