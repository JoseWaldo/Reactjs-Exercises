import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="navbar w-3/4 bg-base-200 rounded-lg">
      <div className="flex-1">
        <a className="btn btn-ghost text-secondary font-extrabold text-4xl">
          ReactJS
        </a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1 gap-4">
          <li>
            <details>
              <summary>Teoría</summary>
              <ul className="p-2 bg-base-100 rounded-t-none">
                <li>
                  <a>Link 1</a>
                </li>
                <li>
                  <a>Link 2</a>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <details>
              <summary>Práctica</summary>
              <ul className="p-2 bg-base-100 rounded-t-none">
                <li>
                  <Link to="/pokeapp">PokeApp</Link>
                </li>
                <li>
                  <a>Link 2</a>
                </li>
              </ul>
            </details>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
