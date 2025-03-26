import { useState } from "react";
import { useNavigate } from "react-router-dom";

const LogIn = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [fillin, setFillin] = useState('');
  const [pass, setPass] = useState('');
  const navigate = useNavigate();

  const handleFill = (e) =>{
    setFillin(e.target.value)
  }
  const handlePass = (e) =>{
    setPass(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
      setFillin(e.target.value)
      setPass(e.target.value)
    
    // Simulate authentica  tion delay
    setTimeout(() => {
      setIsLoading(false);
      navigate("/dash");
    }, 1000);
  };

  return (
    <div className="mt-10 bg-white rounded-md border border-blue-600 p-5 shadow-sm shadow-blue-600">
      <div className="text-left space-y-2 mb-4">
        <h3 className="text-indigo-600 text-2xl font-semibold tracking-tighter text-center">
          Login
        </h3>
        <p className="text-indigo-600 leading-[1.3] text-sm">
          Enter your credentials to access the patient management <br /> system
        </p>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="text-left flex flex-col gap-y-2 mb-4">
          <label htmlFor="username" className="text-indigo-600 font-semibold">
            Username
          </label>
          <input
            type="text"
            id="username"
            value={fillin}
            placeholder="Enter your username"
            className="border border-indigo-600 p-2 rounded-md placeholder:text-sm placeholder:text-blue-600"
            onChange={handleFill}
            required
          />
        </div>

        <div className="text-left flex flex-col gap-y-2">
          <label htmlFor="password" className="text-indigo-600 font-semibold">
            Password
          </label>
          <input
            type="password"
            id="password"
            value={pass}
            placeholder="Enter your password"
            className="border border-indigo-600 p-2 rounded-md placeholder:text-sm placeholder:text-blue-600"
            onChange={handlePass}
            required
          />
        </div>
        {/* <div></div> */}

        <button
          className="bg-indigo-700 py-2 px-4 text-center rounded-md text-white text-md font-medium w-full mt-5 transition-colors duration-300 hover:bg-indigo-600 active:scale-105"
          disabled={isLoading}
        >
          {isLoading ? "Logging in..." : "Login"}
        </button>
      </form>
      <p className="text-indigo-600 text-sm pt-4 hover:bg-indigo-200 transition-all">
        For demo purposes, you can click Login with any credentials
      </p>
    </div>
  );
};

export default LogIn;
