import { FormInputTypes } from '../../types';
import './passwordList.css';

type PasswordListProps = {
  data: FormInputTypes
  handleClickRemoveItem: (item: FormInputTypes) => void
  checked: boolean
};

function PasswordList({ data, handleClickRemoveItem, checked }: PasswordListProps) {
  const showPassword = checked ? '******' : data.password;

  return (
    <div className="passwordItem-container">
      <div className="link-container">
        <img src="/icon_lock.svg" alt="imagem de cadeado" />
        <div className="link-container-2">
          <a href={ data.url } target="_blank" rel="noreferrer">{data.service}</a>
          <img src="/icon_link.svg" alt="link para url" />
        </div>
      </div>

      <div className="login-senha-item">
        <p>
          <span>Login:</span>
          {' '}
          {data.login}
        </p>
        <hr className="line-item" />
        <p>
          <span>Senha:</span>
          {' '}
          {showPassword}
        </p>
        <hr className="line-item" />
      </div>
      <div className="button-remove-container">
        <button
          data-testid="remove-btn"
          onClick={ () => handleClickRemoveItem(data) }
          className="button-removeItem"
        >
          <img src="/trash.svg" alt="botao de apagar" />
        </button>
      </div>
    </div>
  );
}

export { PasswordList };
