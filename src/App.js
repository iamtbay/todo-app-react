import MainPage from "./MainPage";
import Navbar from "./Components/Navbar";
import "./Styling/styling.sass";
import Modal from "./Components/Modal";
import Button from "./Components/Button";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Button />
      <MainPage />
      <ToastContainer />
    </div>
  );
}

export default App;
