import { createContext, useState } from "react";

export let LoginContext = createContext({
  isLogged: false,
  role: "",
  seConnecter: () => {},
  seDeconnecter: () => {},
});

function LoginContextProvider(props) {
  const [isLogged, setIsLogged] = useState(
    localStorage.getItem("myRole") ? true : false
  );
  const [role, setRole] = useState(localStorage.getItem("myRole"));

  function seConnecter(newRole) {
    setIsLogged(true);
    setRole(newRole);
    localStorage.setItem("myRole", newRole);
  }

  function seDeConnecter() {
    setIsLogged(false);
    setRole("");
    localStorage.removeItem("myRole");
  }

  let c = {
    isLogged: isLogged,
    role: role,
    seConnecter: seConnecter,
    seDeconnecter: seDeConnecter,
  };

  return (
    <LoginContext.Provider value={c}>{props.children}</LoginContext.Provider>
  );
}

export default LoginContextProvider;