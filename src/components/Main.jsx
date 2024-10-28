export default function Main(props) {
  const { apodData } = props;

  if (!apodData) return null;

  return (
    <div className="imgContainer">
      <img src={apodData.hdurl} alt={apodData.title} className="bgImage" />
    </div>
  );
}
