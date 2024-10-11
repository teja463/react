import { useAtom } from "jotai";
import LoginForm from "./LoginForm";
import { isAuthenticatedAtom, logoutAtom } from "./store/userAtoms";

export default function Login() {
  const [isAuthenticated] = useAtom(isAuthenticatedAtom);
  const [,logout] = useAtom(logoutAtom);
  function handleLogout(){
    logout(null);
  }
  return (
    <div>
      {isAuthenticated ? (
        <div>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <LoginForm />
      )}
    </div>
  );
}
