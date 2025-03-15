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
    setFormValues(INITIAL_FORM_VALUES);
  };
  const handleClickRemoveItem = (item: FormInputTypes) => {
    const updateList = passwordsList.filter(
      (element) => element.service !== item.service,
    );
    setPasswordsList(updateList);
  };

  return (
    <main className="app-container">
      <Title />
      <section>
        {showForm ? (<Form
          handleShowForm={ handleShowForm }
          formValues={ formValues }
          setFormValues={ setFormValues }
          handleNewPassword={ handleNewPassword }
        />
        ) : (
          <ButtonNewPassword handleShowForm={ handleShowForm } />
        )}
      </section>

      <section>
        {passwordsList.length === 0 ? (
          <p>Nenhuma senha cadastrada</p>
        ) : (
          <article>
            <label htmlFor="check">Esconder senhas</label>
            <input
              type="checkbox"
              name="check"
              id="check"
              checked={ checked }
              onChange={ handleChangeCheckbox }
            />
            <ul>
              {passwordsList.map((pass) => (
                <li key={ pass.service }>
                  <PasswordList
                    data={ pass }
                    handleClickRemoveItem={ handleClickRemoveItem }
                    checked={ checked }
                  />
                </li>
              ))}
            </ul>
          </article>
        )}
      </section>
    </main>
  );
}

export default App;
