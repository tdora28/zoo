// https://refine.dev/blog/react-router-useparams/#what-are-url-parameters-in-react-router
import { useParams, useNavigate } from "react-router-dom";

function Single({ zoo }) {
  const navigate = useNavigate();
  const urlParams = useParams();
  const category = urlParams.category;
  const name = urlParams.name;
  const item = zoo[category].find((el) => {
    return el.name === name;
  });

  // console.log(item);

  return (
    <main className="single-main">
      <img src={`https://source.unsplash.com/400x400/?${item.name}`} alt={`unsplash image of ${item.name}`} />
      <h2>{item.name}</h2>
      <p>Likes: {item.likes}</p>
      <button onClick={() => navigate(-1)}>Go Back</button>
    </main>
  );
}

export default Single;
