import { useParams, useNavigate } from "react-router-dom";

function Single({ zoo }) {
  const navigate = useNavigate();
  const urlParams = useParams();
  const category = urlParams.category;
  const name = urlParams.name;
  const item = zoo[category].find((el) => {
    return el.name === name;
  });

  return (
    <main className="single-main">
      <img className="single-image" src={`https://source.unsplash.com/400x400/?${item.name}`} alt={`${item.name}`} />
      <h2 className="single-title">{item.name}</h2>
      <p className="single-likes">Likes: {item.likes}</p>
      <button className="single-button" onClick={() => navigate(-1)}>
        Go Back
      </button>
    </main>
  );
}

export default Single;
