/* eslint-disable react/jsx-max-depth */
import { useState } from 'react';
import Swal from 'sweetalert2';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { FormInputTypes } from '../../types';
import './form.css';

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
  const [showPasswordForm, setShowPasswordForm] = useState(false);

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
    handleShowForm();

    Swal.fire({
      title: 'Serviço cadastrado com sucesso',
      icon: 'success',
      showConfirmButton: false,
      timer: 1500,
    });
  };
  const handleShowPasswordForm = () => {
    setShowPasswordForm(!showPasswordForm);
  };
  return (
    <div className="div-form-component">
      <form className="form-container" onSubmit={ handleSubmitForm }>
        <label
          htmlFor="service"
          className="labels-form"
        >
          Nome do serviço
          {' '}
          <span>*</span>
        </label>
        <input
          type="text"
          id="service"
          name="service"
          className="input-service-url"
          value={ formValues.service }
          onChange={ handleChange }
        />

        <div className="login-senha-container">
          <div className="login-container">
            <label
              htmlFor="login"
              className="labels-form"
            >
              Login
              {' '}
              <span>*</span>
            </label>
            <input
              type="text"
              id="login"
              name="login"
              className="input-login"
              value={ formValues.login }
              onChange={ handleChange }
            />
          </div>
          <div className="senha-container">
            <label
              htmlFor="password"
              className="labels-form"
            >
              Senha
              {' '}
              <span>*</span>
            </label>
            <div className="input-button-container">
              <input
                type={ showPasswordForm ? 'text' : 'password' }
                id="password"
                name="password"
                className="input-senha"
                value={ formValues.password }
                onChange={ handleChange }
              />
              <button
                type="button"
                data-testid="show-hide-form-password"
                className="button-hide-password"
                onClick={ handleShowPasswordForm }
              >
                {showPasswordForm ? <VisibilityOffIcon /> : <RemoveRedEyeIcon />}
              </button>
            </div>
          </div>
        </div>

        <label htmlFor="url" className="labels-form">URL</label>
        <input
          type="text"
          id="url"
          name="url"
          className="input-service-url"
          value={ formValues.url }
          onChange={ handleChange }
        />
        <p className="campos-obrigatorios">
          <span>*</span>
          {' '}
          Campos obrigatórios
        </p>
        <div className="buttons-form-container">
          <button
            type="button"
            onClick={ handleShowForm }
            className="button-cancelar"
          >
            Cancelar
          </button>
          <button
            disabled={ !disableButton }
            className="button-cadastrar"
          >
            Cadastrar
          </button>
        </div>
      </form>

      <div className="display-container">
        <p className="text-senha-deve">A senha deve: </p>
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
    </div>
  );
}

export { Form };
