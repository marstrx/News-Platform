import { Link } from "react-router-dom";
import { JSX, useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../../Context/AuthContext";
import ProfileCard from "../../Components/Profile/ProfileCard";


function Header(): JSX.Element {
  const [isProfileClicked, setIsProfileClicked] = useState(false);
  const handelProfilClicked = () => {
    if (!isProfileClicked) {
      setIsProfileClicked(true);
    } else {
      setIsProfileClicked(false);
    }
  }
  const { isAuth } = useContext(AuthContext);
  return (
    <>
      <header className="px-4 py-4 bg-[#132440] text-[#FDB5CE] text-lg font-mono">
        <nav className="flex justify-between items-center">
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
                <li onClick={handelProfilClicked} className="flex justify-center items-center border border-white rounded px-3 cursor-pointer">

                  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="#000000"><g fill="none" stroke="#fff" stroke-width="1"><path stroke-linejoin="round" d="M4 18a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2Z" /><circle cx="12" cy="7" r="3" /></g></svg>
                  <svg className="mt-1" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 48 48"><path fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M36 18L24 30L12 18" /></svg>

                </li>


              </>
            )}

          </ul>
        </nav>

      </header>
      {
        isAuth && isProfileClicked && (
          <ProfileCard />
        )
      }
    </>
  );
}

export default Header;