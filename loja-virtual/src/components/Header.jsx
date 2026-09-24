function Header({ name }) {
  return (
    <header className="store-header">
      <div className="store-brand">
        <span className="store-logo">CN</span>
        <div>
          <h1>{name}</h1>
        <p>Produtos para uma rotina mais leve</p>
        </div>
      </div>
      <button className="highlight-button" type="button">
        Produtos em destaque
      </button>
    </header>
  )
}

export default Header
