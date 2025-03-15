import { FormInputTypes } from '../../types';

type PasswordListProps = {
  data: FormInputTypes
};

function PasswordList({ data }: PasswordListProps) {
  return (
    <div>
      <a href={ data.url } target="_blank" rel="noreferrer">{data.service}</a>
      <p>{data.login}</p>
      <p>{data.password}</p>
    </div>
  );
}

export { PasswordList };
