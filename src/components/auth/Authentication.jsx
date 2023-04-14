import { useState } from "react";
//importlé komponenty
import Login from "./Login";
import Register from "./Register";

function Auth() {
  const [hasAccount, setHasAccount] = useState(true); 
function hasAccountHandler(){
setHasAccount(!hasAccount); //při přepínání mezi registrací a přihlášením se zadané hodnoty resetují
}

    return (<div>
      {hasAccount ? <Login switchToRegister = {hasAccountHandler}/> : <Register switchToLogin = {hasAccountHandler}/>}
  </div>
  );
};

export default Auth;

