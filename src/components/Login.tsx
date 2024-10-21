import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [error, setError] = useState("");

  const navigate = useNavigate();
  
  const handleUsernameChange = (event: any): void => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event: any): void => {
    setPassword(event.target.value);
  };
  const loginUser = (event: any) => {
    setError("");
    if (username === "shalinga" && password === "1234567890") {
      window.localStorage.setItem("tj-username", username)
      navigate("/profile")
    } else {
      setError("Invalid username or password");
    }
  };

  return (
    <div className="font-Overlock bg-sky-100 flex justify-center items-center h-screen">
      <div className="w-1/2 h-screen hidden lg:block">
        <img
          src="/images/travel.png"
          alt="Login user"
          className="object-cover w-full h-full"
        />
      </div>
      <div className="lg:p-36 md:p-52 sm:20 p-8 w-full lg:w-1/2">
        <h1 className="text-4xl font-semibold mb-4 uppercase">Login</h1>
        {error && (
          <span className="text-red-800 text-sm italic p-5">{error}</span>
        )}
        <form>
          <div className="mb-4 bg-sky-100">
            <label htmlFor="username" className="block text-gray-600">
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
              autoComplete="off"
              value={username}
              onChange={handleUsernameChange}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-800">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
              autoComplete="off"
              value={password}
              onChange={handlePasswordChange}
            />
          </div>
          <div className="mb-4 flex items-center">
            <input
              type="checkbox"
              id="remember"
              name="remember"
              className="text-red-500"
            />
            <label htmlFor="remember" className="text-green-900 ml-2">
              Remember Me
            </label>
          </div>
          <div className="mb-6 text-blue-500">
            <a href="/forgot-password" className="hover:underline">
              Forgot Password?
            </a>
          </div>
          <button
            type="button"
            className="bg-red-500 hover:bg-blue-600 text-white font-semibold rounded-md py-2 px-4 w-full"
            onClick={loginUser}
          >
            Login
          </button>
        </form>
        <div className="mt-6 text-green-500 text-center">
          <a href="/sign-up" className="hover:underline">
            Sign up Here
          </a>
        </div>
      </div>
    </div>
  );
}

export default Login;
