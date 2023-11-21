function About() {
  return (
    <main className="about-main">
      <h2 className="about-title">About React Zoo</h2>
      <h3 className="about-subtitle">Description</h3>
      <p>A project assignment for the React Basics class (REACT2023S) at Business College Helsinki. It utilizes important React concepts and tools such as:</p>
      <ul className="about-list">
        <li>function components</li>
        <li>import and modules</li>
        <li>destructuring</li>
        <li>Array.map()</li>
        <li>React Router</li>
      </ul>

      <h3 className="about-subtitle">Functionality</h3>
      <p> Select a Zoo category on the home page to see several instances. You can hide the instances by clicking the close button, and give like points.</p>
    </main>
  );
}

export default About;
