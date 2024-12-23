import { Link, Outlet, useNavigate } from "react-router-dom";
import Footer from "./Footer";

function Header() {
  const navigate = useNavigate();
  const username = window.localStorage.getItem("tj-username");
  const fullName = window.localStorage.getItem("tj-fileName");

  const logout = () => {
    window.localStorage.removeItem("tj-username");
    window.localStorage.removeItem("tj-fullName");
    navigate("/login")
  }
  return (
    <div>
      <nav className="border-b border-gray-200 font-Overlock flex flex-col text-center content-center sm:flex-row sm:text-left sm:justify-between py-2 px-6 bg-white shadow sm:items-baseline w-full">
        <div className="mb-2 sm:mb-0 flex flex-row">
          <div className="h-10 w-10 self-center mr-2">
            <img
              className="h-10 w-10 self-center"
              src="/images/logo.png"
              alt="logo"
            />
          </div>
          <div>
            <Link
              to="/"
              className="text-2xl no-underline text-grey-darkest hover:text-blue-600 font-font-Overlock font-bold"
            >
              Travel Journal
            </Link>
            <br />
            <span className="text-xs text-grey-dark">
              Memories we made along the way
            </span>
          </div>
        </div>

        <div className="sm:mb-0 self-center">
          <div className="flex h-10 justify-center items-center">
            <Link
              to="/search"
              className="text-md no-underline text-black hover:text-blue-600 ml-2 px-1 hover:uppercase"
            >
              Travelers
            </Link>
            <Link
              to="/about"
              className="text-md no-underline text-black hover:text-blue-600 ml-2 px-1 hover:uppercase"
            >
              About
            </Link>
            <Link
              to="/contact"
              className="text-md no-underline text-grey-darker hover:text-blue-600 ml-2 px-1 hover:uppercase"
            >
              Contact
            </Link>
            {username ? (
              <>
                <Link
                  to="/profile"
                  className="text-md no-underline text-grey-darker hover:text-blue-600 ml-2 px-1 hover:uppercase hover:cursor-pointer"
                >
                  {fullName}
                </Link>
                {/* biome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
                <span
                  onClick={logout}
                  className="text-md no-underline text-grey-darker hover:text-blue-600 ml-2 px-1 hover:uppercase hover:cursor-pointer"
                >
                  Log out
                </span>
              </>
            ) : (
              <>
                <Link
                  to="/sign-up"
                  className="text-lg no-underline text-grey-darkest hover:text-blue-600 ml-2 hover:uppercase"
                >
                  Sign up
                </Link>
                <Link
                  to="/login"
                  className="text-md no-underline text-grey-darker hover:text-blue-600 ml-2 px-1 hover:uppercase"
                >
                  Login
                </Link>
              </>
            )}
          </div>
        </div>
      </nav>
      <Outlet />
      <Footer />
    </div>
  );
}

export default Header;
