import { Link } from 'react-router-dom';
import fox from '../assets/fox-pexels-pixabay-162291.jpg';
import owl from '../assets/owl-pexels-aa-dil-2474014.jpg';

function Home() {
  return (
    <main className="home-main">
      <h1 className="home-title">Zoo!</h1>
      <div className="home-cards">
        <Link className="home-card" to="/animals">
          <img src={fox} alt="Photo of a fox" />
        </Link>
        <Link className="home-card" to="/birds">
          <img src={owl} alt="Photo of an owl" />
        </Link>
      </div>
    </main>
  );
}

export default Home;
