export default function SideBar(props) {
  const { handleToggleModal, apodData } = props;
    return (
      <div className="sidebar">
        <div onClick={()=>{
        handleToggleModal()
      }} className="bgOverlay"></div>
        <div className="sidebarContents">
          <h2>{apodData.title}</h2>
          <br />
          <div>
            <p>Description</p>
            <br />
            <p>
              {apodData.explanation}
            </p>
          </div>
          <button onClick={() => {
            handleToggleModal();
          }}>
            <i className="fa-solid fa-right-long"></i>
          </button>
        </div>
      </div>
    );
  }
  