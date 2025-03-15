import { useState } from 'react';
import './App.css';
import { ButtonNewPassword, Form, PasswordList, Title } from './components';
import { FormInputTypes, INITIAL_FORM_VALUES } from './types';

function App() {
  const [showForm, setShowForm] = useState(false);
  const [formValues, setFormValues] = useState<FormInputTypes>(INITIAL_FORM_VALUES);
  const [passwordsList, setPasswordsList] = useState<FormInputTypes[]>([]);

  const handleShowForm = () => {
    setShowForm(!showForm);
  };

  const handleNewPassword = () => {
    const newPassword = {
      service: formValues.service,
      login: formValues.login,
      password: formValues.password,
      url: formValues.url,
    };

    setPasswordsList([
      ...passwordsList,
      newPassword,
    ]);
  };

  return (
    <main>
      <Title />

      {showForm ? (<Form
        handleShowForm={ handleShowForm }
        formValues={ formValues }
        setFormValues={ setFormValues }
        handleNewPassword={ handleNewPassword }
      />
      ) : (
        <ButtonNewPassword handleShowForm={ handleShowForm } />
      )}
      {passwordsList.length === 0 ? (
        <p>Nenhuma senha cadastrada</p>
      ) : (
        passwordsList.map((pass) => (
          <PasswordList key={ pass.service } data={ pass } />
        ))
      )}
    </main>
  );
}

export default App;
