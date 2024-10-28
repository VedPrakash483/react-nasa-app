import Footer from "./components/Footer";
import Main from "./components/Main";
import SideBar from "./components/SideBar";
import { useEffect, useState } from "react";

function App() {
  const [showModal, setShowModal] = useState(false);
  const [apodData, setApodData] = useState(null);
  const [loading, setLoading] = useState(true); // Add loading state

  function handleToggleModal() {
    setShowModal(!showModal);
  }

  useEffect(() => {
    async function fetchAPIData() {
      const NASA_KEY = import.meta.env.VITE_NASA_API_KEY;
      const url = `https://api.nasa.gov/planetary/apod?api_key=${NASA_KEY}`;
      try {
        const res = await fetch(url);
        const data = await res.json();
        setApodData(data);
      } catch (e) {
        console.log(e.message);
      } finally {
        setLoading(false); // Set loading to false once data is fetched
      }
    }
    fetchAPIData();
  }, []);

  return (
    <div id="root">
      {loading ? (
        <div className="loadingState">
          <i className="fa-brands fa-nfc-directional"></i>        </div>
      ) : (
        <>
          <Main apodData={apodData} />
          {showModal && <SideBar apodData={apodData} handleToggleModal={handleToggleModal} />}
          <Footer apodData={apodData} showModal={showModal} handleToggleModal={handleToggleModal} />
        </>
      )}
    </div>
  );
}

export default App;
