import { useRef } from "react";

interface Props {
  setSearchQuery: (item: string) => void;
}

export const Header = ({ setSearchQuery }: Props) => {
  const searchString = useRef<HTMLInputElement>(null);

  return (
    <nav className="navbar navbar-dark bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img
            src="/pokemon_logo.svg"
            alt="Logo"
            width="150"
            height="30"
            className="d-inline-block align-text-top"
          />
        </a>
        <form className="d-flex" role="search">
          <input
            ref={searchString}
            className="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
            onChange={() => {
              setSearchQuery(
                searchString.current !== null ? searchString.current.value : ""
              );
            }}
          />
        </form>
      </div>
    </nav>
  );
};
