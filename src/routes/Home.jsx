import { Link } from 'react-router-dom';

function Home() {
  return (
    <main className="home-main">
      <Link className="home-card home-card--animals" to="/animals">
        <p>Animals</p>
      </Link>
      <Link className="home-card home-card--birds" to="/birds">
        <p>Birds</p>
      </Link>
      <Link className="home-card home-card--insects" to="/insects">
        <p>Insects</p>
      </Link>
      <Link className="home-card home-card--fish" to="/fish">
        <p>Fish</p>
      </Link>
    </main>
  );
}

export default Home;
