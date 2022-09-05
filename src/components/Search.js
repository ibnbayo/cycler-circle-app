import SearchIcon from "./SearchIcon";
function Search({play,setPlay}) {

    

    const handleSearch = event => {
        let query = event.target.value
        query = query.charAt(0).toUpperCase() + query.slice(1)
        console.log(query)
        setPlay(query)

          
    }
    return (
    <div className="search">
        <input className="search-box"
         placeholder="Search items"
         onChange={handleSearch}/>
        <SearchIcon/>
    </div>
    )
}

export default Search;