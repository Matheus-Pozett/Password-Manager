import { useState } from 'react';
import './App.css';
import { ButtonNewPassword, Form, PasswordList, Title } from './components';
import { FormInputTypes, INITIAL_FORM_VALUES } from './types';

function App() {
  const [showForm, setShowForm] = useState(false);
  const [formValues, setFormValues] = useState<FormInputTypes>(INITIAL_FORM_VALUES);
  const [passwordsList, setPasswordsList] = useState<FormInputTypes[]>([]);
  const [checked, setChecked] = useState(false);

  const handleShowForm = () => {
    setShowForm(!showForm);
  };

  const handleChangeCheckbox = () => {
    setChecked(!checked);
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
  const handleClickRemoveItem = (item: FormInputTypes) => {
    const updateList = passwordsList.filter(
      (element) => element.service !== item.service,
    );
    setPasswordsList(updateList);
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
        <div>
          <label htmlFor="check">Esconder senhas</label>
          <input
            type="checkbox"
            name="check"
            id="check"
            checked={ checked }
            onChange={ handleChangeCheckbox }
          />
          {passwordsList.map((pass) => (
            <PasswordList
              key={ pass.service }
              data={ pass }
              handleClickRemoveItem={ handleClickRemoveItem }
              checked={ checked }
            />
          ))}
        </div>
      )}
    </main>
  );
}

export default App;
