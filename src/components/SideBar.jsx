export default function SideBar(props) {
  const { handleToggleModal } = props;
    return (
      <div className="sidebar">
        <div onClick={()=>{
        handleToggleModal()
      }} className="bgOverlay"></div>
        <div className="sidebarContents">
          <h2>The Brutal Martian Landscape</h2>
          <div>
            <p>Description</p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex hic
              minima tempore, voluptates sint perspiciatis quasi quos molestiae
              eum voluptatem excepturi saepe, porro dolores labore. Dignissimos
              ducimus modi nesciunt vero!Lorem
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
  