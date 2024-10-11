import { useState } from "react";
import { useAtom } from "jotai";
import { loginAtom } from "./store/userAtoms";

export default function LoginForm() {
  const [userName, setUsername] = useState();
  const [pwd, setPwd] = useState();
  const [,login] = useAtom(loginAtom);

  function handleLogin() {
    login(userName);
  }
  return (
    <div>
      <div>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          name="username"
          id="username"
          value={userName}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          value={pwd}
          onChange={(e) => setPwd(e.target.value)}
        />
      </div>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}
