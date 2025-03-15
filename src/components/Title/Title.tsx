import './title.css';

function Title() {
  return (
    <header className="header-container">
      <h1 className="header-title">
        Gerenciador
        {' '}
        <span className="asterisco">*</span>
        {' '}
        de
        {' '}
        <span className="asterisco">*</span>
        {' '}
        senhas

      </h1>
    </header>
  );
}

export { Title };
