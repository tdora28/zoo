import { Link } from "react-router-dom";

function Home() {
  return (
    <main className="home-main">
      <Link className="home-card home-card--animals" to="/animals">
        <p>Animals</p>
      </Link>
      <Link className="home-card home-card--birds" to="/birds">
        <p>Birds</p>
      </Link>
    </main>
  );
}

export default Home;
