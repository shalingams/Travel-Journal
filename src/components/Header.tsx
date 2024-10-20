import { Link, Outlet } from "react-router-dom";

function Header() {
  return (
    <div>
      <nav className="font-sans flex flex-col text-center content-center sm:flex-row sm:text-left sm:justify-between py-2 px-6 bg-white shadow sm:items-baseline w-full">
        <div
          className="mb-2 sm:mb-0 flex flex-row
      "
        >
          <div className="h-10 w-10 self-center mr-2">
            <img className="h-10 w-10 self-center" src="/images/logo.png" />
          </div>
          <div>
            <Link
              to="/"
              className="text-2xl no-underline text-grey-darkest hover:text-blue-dark font-sans font-bold"
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
          <div className="h-10">
            <Link
              to="/about"
              className="text-md no-underline text-black hover:text-blue-dark ml-2 px-1"
            >
              About
            </Link>
            <Link
              to="/contact"
              className="text-md no-underline text-grey-darker hover:text-blue-dark ml-2 px-1"
            >
              Contact
            </Link>
            <Link
              to="/sign-up"
              className="text-lg no-underline text-grey-darkest hover:text-blue-dark ml-2"
            >
              Sign up
            </Link>
            <Link
              to="/login"
              className="text-md no-underline text-grey-darker hover:text-blue-dark ml-2 px-1"
            >
              Login
            </Link>
          </div>
        </div>
      </nav>
      <Outlet />
    </div>
  );
}

export default Header;
