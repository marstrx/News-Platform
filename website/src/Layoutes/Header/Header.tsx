import { Link } from "react-router-dom";
import { JSX } from "react";
import { useContext } from "react";
import { AuthContext } from "../../Context/AuthContext";


function Header(): JSX.Element {
  const { isAuth, logout } = useContext(AuthContext);
  return (
    <header className="px-4 py-4 bg-[#132440] text-[#FDB5CE] text-lg font-mono">
      <nav className="flex justify-between">
        <Link to="/">
          <svg
            width="30"
            height="30"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path
              fill="#FFFFFF"
              d="M23 2v4h-1v6h-1v5h-1v1h-2v1h-2v1h-2v1h-2v-1h-1v-2h-1v-2H9v-2H8v1H7v1H6v1H5v2H4v1H3v1H2v1H1v-3h1v-4h1v-4h1V7h1V6h2V5h2V4h2V3h2v2h1v2h1v2h1v2h2V9h1V7h1V5h1V3h1V2z"
            />
          </svg>
        </Link>

        <ul className="flex gap-6">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/news">News</Link></li>
          <li><Link to="/about">About</Link></li>
          {!isAuth ? (
            <>
              <li><Link to="/login">Login</Link></li>
              <li><Link to="/register">Register</Link></li>
            </>
          ) : (
            <>
              <li><Link to="/profile">Profile</Link></li>
              <li>
                <button onClick={logout} className="hover:underline">
                  Logout
                </button>
              </li>
            </>
          )}

        </ul>
      </nav>
    </header>
  );
}

export default Header;