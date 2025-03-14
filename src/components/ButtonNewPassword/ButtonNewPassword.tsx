type ButtonNewPasswordProps = {
  handleShowForm: () => void;
};

function ButtonNewPassword({ handleShowForm }: ButtonNewPasswordProps) {
  return (
    <div>
      <button onClick={ handleShowForm }>Cadastrar nova senha</button>
    </div>
  );
}

export { ButtonNewPassword };
