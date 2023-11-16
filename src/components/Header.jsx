const Header = ({ search }) => {
  return (
    <header>
      <p>Header</p>
      <input type="text" id="search" onChange={search} />
    </header>
  );
};

export default Header;
