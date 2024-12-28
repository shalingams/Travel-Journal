import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SignUp() {
  const [fullName, setFullName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handlePasswordChange = (event: any) => {
    setPassword(event.target.value);
  };

  const handleConfirmPasswordChange = (event: any) => {
    setConfirmPassword(event.target.value);
  };

  const handleFullNameChange = (event: any) => {
    setFullName(event.target.value);
  };

  const handleUsernameChange = (event: any) => {
    setUsername(event.target.value);
  };

  const passwordMatch = (): boolean => {
    setPasswordError("");
    if (password !== confirmPassword) {
      setPasswordError("Password does not match");
      return false;
    }
    return true;
  };

  const validatePassword = (): boolean => {
    let passwordPattern =
      /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
    if (password.length < 8) {
      setPasswordError("Minimum password length is 8");
      return false;
    }

    if (!passwordPattern.test(password)) {
      setPasswordError("Password is not complicated enough");
      return false;
    }
    return passwordMatch();
  };

  const validateInput = ():boolean => {
    if (fullName.length === 0){
      setError("Full name is required");
      return false
    } else if (username.length === 0) {
      setError("Username is required");
      return false;
    } else if (password.length === 0) {
      setError("Password is required");
      return false;
    } else {
      setError("")
    }
    return true;
  }

  const registration = () => {
    if (validateInput() && validatePassword()) {
      window.localStorage.setItem("tj-username", username);
      window.localStorage.setItem("tj-fullName", fullName);
      navigate("/profile");
    }
  };

  return (
    <div className="font-Overlock flex justify-center items-center h-screen">
      <div className="w-1/2 h-screen hidden lg:block">
        <img
          src="/images/SignUp.png"
          alt="Registration"
          className="object-cover w-full h-full"
        />
      </div>
      <div className="lg:p-36 md:p-52 sm:20 p-8 w-full lg:w-1/2">
        <h1 className="text-4xl font-semibold mb-4 uppercase text-pink-500">Sign Up</h1>
        <form action="#" method="POST" className="space-y-6 bg-sky-950 p-10 rounded-lg bg-opacity-70">
          <div className="mb-4">
            {error && (
              <span className="text-md text-red-800 italic">{error}</span>
            )}
          </div>
          <div className="mb-4">
            <label htmlFor="full_name" className="block text-pink-500 uppercase">
              Full name
            </label>
            <input
              type="text"
              id="full_name"
              name="full_name"
              className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
              autoComplete="off"
              value={fullName}
              onChange={handleFullNameChange}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="username" className="block text-pink-500 uppercase">
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
            {passwordError && (
              <span className="text-sm text-red-800 italic">
                {passwordError}
              </span>
            )}
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-pink-500 uppercase">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
              autoComplete="off"
              onChange={handlePasswordChange}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="confirm_password" className="block text-pink-500 uppercase">
              Confirm Password
            </label>
            <input
              type="password"
              id="confirm_password"
              name="confirm_password"
              className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
              autoComplete="off"
              onChange={handleConfirmPasswordChange}
            />
          </div>
          <button
            type="button"
            className="w-full 
              mt-10 text-white uppercase bg-pink-500 bg-opacity-70 py-4 text-base font-light px-10 border border-white hover:bg-purple-500 hover:bg-opacity-70
              transition duration-300 ease-in-out"
            onClick={registration}
          >
            Sign up
          </button>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
