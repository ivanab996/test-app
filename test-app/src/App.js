import { useState } from "react";
import { GuestPage } from "./guest/containers/GuestPage";
import { OrdersPage } from "./orders/containers/OrdersPage";


function App() {
  const [ isSignedIn, setIsSignedIn ] = useState(false);

  function handleSignIn() {
    setIsSignedIn(true);
  }

  function handleSignOut() {
    setIsSignedIn(false)
  }

  return (
    <div>
     {!isSignedIn && <GuestPage onSignIn={handleSignIn} value="Sign in!" />}
     {isSignedIn && <OrdersPage onSignOut={handleSignOut} value = "Sign out!"/>}
    </div>
  );
}

export default App;
