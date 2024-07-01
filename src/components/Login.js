import { useState } from "react";
import Header from "./Header";
import { useNavigate } from "react-router-dom";
import { useUser } from "../utils/userContext";

const Login = () => {
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);
  const { setUser } = useUser();
  const navigate = useNavigate();

  const handleLogin = async (event) => {
    event.preventDefault();
    const response = await fetch("http://localhost:8080/login", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    });

    if (response.ok) {
      const data = await response.json();
      console.log("Success ", data);
      localStorage.setItem("token", data.token);
      setUser(data.user);
      navigate("/");
    } else {
      console.log("Login Failed");
    }
  };

  return (
    <div>
      <div className="mx-auto mt-[6%] w-4/12">
        <form
          onSubmit={handleLogin}
          className="bg-gray-800 text-white my-6 p-8 rounded-md"
        >
          <h1 className="w-1/2 text-center text-4xl mx-auto mt-2 mb-8">
            Login
          </h1>
          <label>Username: </label>
          <input
            className="w-full p-2 my-4 text-black"
            type="text"
            placeholder="Enter username"
            onChange={(e) => setUsername(e.target.value)}
          />
          <label>Password:</label>
          <input
            className="w-full p-2 my-4 text-black"
            type="password"
            placeholder="Enter Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type="submit"
            className="p-3 rounded-lg bg-red-700 text-white my-2"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
