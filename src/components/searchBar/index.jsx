import PropTypes from "prop-types";
import styles from "./index.module.css";

function SearchBar ({ keyword, keywordChange }) {
  return (
    <input 
      className={styles.input} 
      type="text" 
      placeholder="Pencarian..." 
      value={keyword}
      onChange={(event) => keywordChange(event.target.value)}/>
  )
}

SearchBar.propTypes = {
  keyword: PropTypes.string.isRequired,
  keywordChange: PropTypes.func.isRequired,
}

export default SearchBar;