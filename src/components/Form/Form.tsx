import { useState } from 'react';
import { FormInputTypes, INITIAL_FORM_VALUES } from '../../types';

type FormProps = {
  handleShowForm: () => void;
  formValues: FormInputTypes;
  setFormValues: React.Dispatch<React.SetStateAction<FormInputTypes>>
  handleNewPassword: () => void
};

const LETTERS_NUMBERS_SPECIALS_REGEX = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[\W_]).+$/;

function Form(
  { handleShowForm, formValues, setFormValues, handleNewPassword }: FormProps,
) {
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
    handleNewPassword();
    setFormValues(INITIAL_FORM_VALUES);
    handleShowForm();
  };

  return (
    <>
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
      <div>
        {formValues.password.length >= 8 ? (
          <p className="valid-password-check">Possuir 8 ou mais caracteres</p>
        ) : (
          <p className="invalid-password-check">Possuir 8 ou mais caracteres</p>) }

        {formValues.password.length !== 0 && formValues.password.length <= 16 ? (
          <p className="valid-password-check">Possuir até 16 caracteres</p>
        ) : (
          <p className="invalid-password-check">Possuir até 16 caracteres</p>)}

        {LETTERS_NUMBERS_SPECIALS_REGEX.test(formValues.password) ? (
          <p className="valid-password-check">Possuir letras e números</p>
        ) : (
          <p className="invalid-password-check">Possuir letras e números</p>)}

        {LETTERS_NUMBERS_SPECIALS_REGEX.test(formValues.password) ? (
          <p className="valid-password-check">Possuir algum caractere especial</p>
        ) : (
          <p className="invalid-password-check">Possuir algum caractere especial</p>)}
      </div>
    </>
  );
}

export { Form };
