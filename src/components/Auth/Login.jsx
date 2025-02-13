import React, { useState } from "react";

const Login = ({handelLogin}) => {
  // console.log(handelLogin);
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className="flex justify-center items-center h-screen  ">
      <div className="border-2  rounded-xl border-amber-400 p-20 ">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setEmail("");
            setPassword("");
            handelLogin(email, password);
          }}
          className="flex flex-col  items-center justify-center"
        >
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="border-2 border-amber-400 rounded-full py-3 px-4 text-white outline-none text-xl placeholder:text-gray-400"
            type="email"
            placeholder="Enter your email "
          />
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="border-2 border-amber-400 rounded-full py-3 px-4 mt-3 text-white outline-none text-xl placeholder:text-gray-400"
            type="password"
            placeholder="Enter password"
          />
          <button className=" bg-amber-400 mt-5 w-full rounded-full py-2 px-3 text-white outline-none text-xl placeholder:text-white">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
