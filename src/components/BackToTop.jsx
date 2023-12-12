function BackToTop() {
  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <button className="back-to-top" onClick={scrollUp}>
      <span className="material-symbols-outlined">arrow_upward</span>
    </button>
  );
}

export default BackToTop;
