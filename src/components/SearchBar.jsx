function SearchBar({ searchHandler }) {
  return <input type="text" id="search" onChange={searchHandler} placeholder="Search" />;
}

export default SearchBar;
