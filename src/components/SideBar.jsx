export default function SideBar(props) {
  const { handleToggleModal, apodData } = props;

  if (!apodData) return null;

  return (
    <div className="sidebar">
        <div onClick={handleToggleModal} className="bgOverlay"></div>
        <div className="sidebarContents">
            <h2>{apodData?.title}</h2>
            <div className="descriptionContainer">
                <p className="descriptionTitle">{apodData?.date}</p>
                <p>{apodData?.explanation}</p>
            </div>
            <button onClick={handleToggleModal}>
                <i className="fa-solid fa-arrow-right"></i>
            </button>
        </div>
    </div>
)
}
