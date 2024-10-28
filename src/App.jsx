import Footer from "./components/Footer";
import Main from "./components/Main";
import SideBar from "./components/SideBar";
import { useState } from "react";

function App() {
  const [showModal, setShowModal] = useState(false);

  function handleToggleModal(){
    setShowModal(!showModal);
  }
  return (
    <div id="root">
      <Main />
      {showModal && <SideBar handleToggleModal={handleToggleModal}/>}
      <Footer showModal={showModal} handleToggleModal={handleToggleModal} />
    </div>
  );
}

export default App;
