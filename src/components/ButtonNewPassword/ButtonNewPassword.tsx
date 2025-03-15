import './buttonNewPassword.css';

type ButtonNewPasswordProps = {
  handleShowForm: () => void;
};

function ButtonNewPassword({ handleShowForm }: ButtonNewPasswordProps) {
  return (
    <div className="buttonNewPassword-container">
      <button
        onClick={ handleShowForm }
        className="button-newpassword"
      >
        Cadastrar nova senha
      </button>
    </div>
  );
}

export { ButtonNewPassword };
