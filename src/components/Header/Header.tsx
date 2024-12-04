export const Header = () => {
  return (
    <nav className="navbar navbar-dark bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">
      <img src="../../../public/pokemon_logo.svg" alt="Logo" width="30"
       height="24" className="d-inline-block align-text-top" />
       POKEMON
    </a>
    <form className="d-flex" role="search">
      <input className="form-control me-2" type="search" placeholder="Search"
       aria-label="Search" />
    </form>
  </div>
</nav>
  )
}
