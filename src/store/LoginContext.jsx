import { createContext, useState } from "react";

export let LoginContext = createContext({
  isLogged: false,
  role: "",
  seConnecter: () => {},
  seDeconnecter: () => {},
});

function LoginContextProvider(props) {
  const [isLogged, setIsLogged] = useState(false);
  const [role, setRole] = useState("");

  function seConnecter(newRole) {
    setIsLogged(true);
    setRole(newRole);
  }

  function seDeConnecter() {
    setIsLogged(false);
    setRole("");
  }

  let c = {
    isLogged: isLogged,
    role: role,
    seConnecter: seConnecter,
    seDeconnecter: seDeConnecter,
  };

  return (
    <LoginContextProvider value={c}>{props.children}</LoginContextProvider>
  );
}

export default LoginContextProvider;