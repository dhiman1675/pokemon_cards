interface Props {
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
}
export const Header = ({ setSearchQuery }: Props) => {
  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value); // Update the search query in App
  };
  return (
    <nav className="navbar navbar-dark bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img
            src="public/pokemon_logo.svg"
            alt="Logo"
            width="150"
            height="30"
            className="d-inline-block align-text-top"
          />
        </a>
        <form className="d-flex" role="search">
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
            onChange={handleSearch}
          />
        </form>
      </div>
    </nav>
  );
};
