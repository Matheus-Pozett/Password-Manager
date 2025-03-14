type FormProps = {
  handleShowForm: () => void;
};

function Form({ handleShowForm }: FormProps) {
  return (
    <form>
      <label htmlFor="service">Nome do serviço</label>
      <input type="text" id="service" />

      <label htmlFor="login">Login</label>
      <input type="text" id="login" />

      <label htmlFor="password">Senha</label>
      <input type="password" id="password" />

      <label htmlFor="url">URL</label>
      <input type="text" id="url" />

      <button>Cadastrar</button>
      <button type="button" onClick={ handleShowForm }>Cancelar</button>
    </form>
  );
}

export { Form };
