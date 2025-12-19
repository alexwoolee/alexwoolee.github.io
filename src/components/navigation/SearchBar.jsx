import SearchIcon from "../icons/navigation/SearchIcon";

const SearchBar = () => {
  return (
    <div className='search-bar-container'>
      <SearchIcon></SearchIcon>
      <input className='search-bar-input' type="text" placeholder='What are you looking for?'></input>
    </div>
  )
}

export default SearchBar

