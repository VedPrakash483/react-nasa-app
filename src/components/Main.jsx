export default function Main(props) {
  const { apodData } = props;
    return (
      <div className="imgContainer">
        <img src={apodData.hdurl} alt="apodData.title" className="bgImage" />
      </div>
    );
  }
  