import Footer from "./components/Footer";
import Main from "./components/Main";
import SideBar from "./components/SideBar";
import { useEffect, useState } from "react";

function App() {
  const [showModal, setShowModal] = useState(false);
  const [apodData, setApodData] = useState(null);

  function handleToggleModal(){
    setShowModal(!showModal);
  }

  useEffect(() => {
    async function fetchAPIData(){
      const NASA_KEY = import.meta.env.VITE_NASA_API_KEY;
      const url ='https://api.nasa.gov/planetary/apod' + `?api_key=${NASA_KEY}`;
      try{
        const res = await fetch(url);
        const data = await res.json()
        // console.log('Data\n', data)
        setApodData(data);
      }catch(e){
        console.log(e.message);

      }
    }
    fetchAPIData()
  }, [])
  return (
    <div id="root">
      <Main apodData={apodData} />
      {showModal && <SideBar apodData={apodData} handleToggleModal={handleToggleModal}/>}
      <Footer apodData={apodData} showModal={showModal} handleToggleModal={handleToggleModal} />
    </div>
  );
}

export default App;
