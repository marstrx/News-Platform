import { Link } from "react-router-dom";
import { JSX, useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../../Context/AuthContext";
import ProfileCard from "../../Components/Profile/ProfileCard";

function Header(): JSX.Element {
  const [isProfileClicked, setIsProfileClicked] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handelProfilClicked = () => {
    setIsProfileClicked(!isProfileClicked);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const { isAuth } = useContext(AuthContext);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 px-4 py-4 bg-[#132440] text-[#FDB5CE] text-lg font-mono">
        <nav className="flex justify-between items-center max-w-7xl mx-auto">
          <Link to="/">
            <svg
              width="30"
              height="30"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="w-6 h-6 sm:w-8 sm:h-8"
            >
              <path
                fill="#FFFFFF"
                d="M23 2v4h-1v6h-1v5h-1v1h-2v1h-2v1h-2v1h-2v-1h-1v-2h-1v-2H9v-2H8v1H7v1H6v1H5v2H4v1H3v1H2v1H1v-3h1v-4h1v-4h1V7h1V6h2V5h2V4h2V3h2v2h1v2h1v2h1v2h2V9h1V7h1V5h1V3h1V2z"
              />
            </svg>
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="lg:hidden p-2"
            aria-label="Toggle menu"
          >
            {!isMobileMenuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                viewBox="0 0 24 24"
              >
                <path
                  fill="none"
                  stroke="#FDB5CE"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M2.75 4.75h18.5M2.75 12h18.5m-18.5 7.25h18.5"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                viewBox="0 0 16 16"
              >
                <path
                  fill="#FDB5CE"
                  fillRule="evenodd"
                  d="M4.28 3.22a.75.75 0 0 0-1.06 1.06L6.94 8l-3.72 3.72a.75.75 0 1 0 1.06 1.06L8 9.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L9.06 8l3.72-3.72a.75.75 0 0 0-1.06-1.06L8 6.94L4.28 3.22Z"
                  clipRule="evenodd"
                />
              </svg>
            )}
          </button>

          {/* Desktop Menu */}
          <ul className="hidden lg:flex gap-6 items-center">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/news">News</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            {!isAuth ? (
              <>
                <li>
                  <Link to="/login">Login</Link>
                </li>
                <li>
                  <Link to="/register">Register</Link>
                </li>
              </>
            ) : (
              <li
                onClick={handelProfilClicked}
                className="flex justify-center items-center border border-white rounded px-3 cursor-pointer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  viewBox="0 0 24 24"
                  fill="#000000"
                >
                  <g fill="none" stroke="#fff" strokeWidth="1">
                    <path
                      strokeLinejoin="round"
                      d="M4 18a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2Z"
                    />
                    <circle cx="12" cy="7" r="3" />
                  </g>
                </svg>
                <svg
                  className="mt-1"
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  viewBox="0 0 48 48"
                >
                  <path
                    fill="none"
                    stroke="#fff"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M36 18L24 30L12 18"
                  />
                </svg>
              </li>
            )}
          </ul>
        </nav>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4">
            <ul className="flex flex-col gap-4">
              <li>
                <Link to="/" onClick={() => setIsMobileMenuOpen(false)}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/news" onClick={() => setIsMobileMenuOpen(false)}>
                  News
                </Link>
              </li>
              <li>
                <Link to="/about" onClick={() => setIsMobileMenuOpen(false)}>
                  About
                </Link>
              </li>
              {!isAuth ? (
                <>
                  <li>
                    <Link
                      to="/login"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Login
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/register"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Register
                    </Link>
                  </li>
                </>
              ) : (
                <li
                  onClick={() => {
                    handelProfilClicked();
                    setIsMobileMenuOpen(false);
                  }}
                  className="flex justify-start items-center gap-2 border border-white rounded px-3 py-2 cursor-pointer w-fit"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="#000000"
                  >
                    <g fill="none" stroke="#fff" strokeWidth="1">
                      <path
                        strokeLinejoin="round"
                        d="M4 18a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2Z"
                      />
                      <circle cx="12" cy="7" r="3" />
                    </g>
                  </svg>
                  <span>Profile</span>
                </li>
              )}
            </ul>
          </div>
        )}
      </header>

      {/* <div className="h-16 sm:h-20"></div> */}

      {isAuth && isProfileClicked && <ProfileCard />}
    </>
  );
}

export default Header;
