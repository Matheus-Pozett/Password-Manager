import { FormInputTypes } from '../../types';

type PasswordListProps = {
  data: FormInputTypes
  handleClickRemoveItem: (item: FormInputTypes) => void
};

function PasswordList({ data, handleClickRemoveItem }: PasswordListProps) {
  return (
    <div>
      <a href={ data.url } target="_blank" rel="noreferrer">{data.service}</a>
      <p>{data.login}</p>
      <p>{data.password}</p>
      <button
        data-testid="remove-btn"
        onClick={ () => handleClickRemoveItem(data) }
      >
        Remover
      </button>
    </div>
  );
}

export { PasswordList };
