import { FormInputTypes } from '../../types';

type PasswordListProps = {
  data: FormInputTypes
  handleClickRemoveItem: (item: FormInputTypes) => void
  checked: boolean
};

function PasswordList({ data, handleClickRemoveItem, checked }: PasswordListProps) {
  const showPassword = checked ? '******' : data.password;

  return (
    <div>
      <div>
        <a href={ data.url } target="_blank" rel="noreferrer">{data.service}</a>
        <p>{data.login}</p>
        <p>{showPassword}</p>
        <button
          data-testid="remove-btn"
          onClick={ () => handleClickRemoveItem(data) }
        >
          Remover
        </button>
      </div>
    </div>
  );
}

export { PasswordList };
