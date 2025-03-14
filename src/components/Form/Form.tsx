import { useState } from 'react';
import { FormInputTypes } from '../../types';

type FormProps = {
  handleShowForm: () => void;
};

const INITIAL_FORM_VALUES: FormInputTypes = {
  service: '',
  login: '',
  password: '',
  url: '',
};

function Form({ handleShowForm }: FormProps) {
  const [formValues, setFormValues] = useState<FormInputTypes>(INITIAL_FORM_VALUES);
  const [disableButton, setDisableButton] = useState(false);

  const formValidate = (values: FormInputTypes) => {
    const serviceIsValid = values.service.trim() !== '';
    const loginIsValid = values.login.trim() !== '';
    const passwordIsValid = values.password.trim() !== '';
    const passwordRegex = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[\^$*.[\]{}()!@#%&/\\,><':;|_~+=]).{8,16}$/;
    const passwordRegexValidate = passwordRegex.test(values.password);
    setDisableButton(
      serviceIsValid
      && loginIsValid
      && passwordIsValid
      && passwordRegexValidate,
    );
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    const updatedFormValues = {
      ...formValues,
      [name]: value,
    };
    setFormValues(updatedFormValues);
    formValidate(updatedFormValues);
  };

  const handleSubmitForm = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };
  return (
    <form onSubmit={ handleSubmitForm }>
      <label htmlFor="service">Nome do serviço</label>
      <input
        type="text"
        id="service"
        name="service"
        value={ formValues.service }
        onChange={ handleChange }
      />

      <label htmlFor="login">Login</label>
      <input
        type="text"
        id="login"
        name="login"
        value={ formValues.login }
        onChange={ handleChange }
      />

      <label htmlFor="password">Senha</label>
      <input
        type="password"
        id="password"
        name="password"
        value={ formValues.password }
        onChange={ handleChange }
      />

      <label htmlFor="url">URL</label>
      <input
        type="text"
        id="url"
        name="url"
        value={ formValues.url }
        onChange={ handleChange }
      />

      <button disabled={ !disableButton }>Cadastrar</button>
      <button type="button" onClick={ handleShowForm }>Cancelar</button>
    </form>
  );
}

export { Form };
