import StyleSheet from "../Search/Search.module.css"
import {ReactComponent as SearchIcon } from "../../assets/search-icon.svg"

const Search = ({search}) => {
    return (
        <form className={StyleSheet.wrapper}>
        <input className={StyleSheet.search} placeholder={search}/>
        <button className={StyleSheet.searchButton} type="submit"><SearchIcon /></button>
    </form>
    );
  };
  
  export default Search;