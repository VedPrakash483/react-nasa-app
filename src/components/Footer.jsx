export default function Footer(props) {
  const{ showModal, handleToggleModal, apodData } = props;
    return (
      <footer>
        <div className="bgGradient"></div>
        <div>
          <h2>{apodData.title}</h2>
          <h1>APOD PROJECT</h1>
        </div>
        <button onClick={() => {
          handleToggleModal();
        }}>
          <i className="fa-solid fa-circle-info"></i>
        </button>
      </footer>
    );
  }
  