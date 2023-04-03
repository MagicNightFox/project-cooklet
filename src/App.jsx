import { Route, Routes } from "react-router-dom";
import Homepage from "./components/pages/Home";
import Account from "./components/pages/Account";
import Navbar from "./components/Navbar";

function App() {
  return (
  <>
  <Navbar />
  <Routes>
    <Route path="/" element={<Homepage />}></Route>
    <Route path="/Account" element={<Account />}></Route>
  </Routes>
  </>

  );
}

export default App;
