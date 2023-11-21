// https://refine.dev/blog/react-router-useparams/#what-are-url-parameters-in-react-router
import { useParams } from "react-router-dom";
import Card from "../components/Card.jsx";

function Single({ dataset, zootype, removeCard, modifyLikes }) {
  const paramId = useParams();
  const item = dataset.filter((el) => paramId.id === el.name)[0];

  return (
    <main className="single-main">
      <Card key={item.name} {...item} zootype={zootype} removeCard={() => removeCard(item.name, zootype)} decreaseLikes={() => modifyLikes(item.name, "decrease", zootype)} increaseLikes={() => modifyLikes(item.name, "increase", zootype)} />
    </main>
  );
}

export default Single;
