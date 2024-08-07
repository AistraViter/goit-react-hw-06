import { useId } from "react";
import { useSelector } from "react-redux";
import styles from "./SearchBox.module.css";
const SearchBox = ({inputValue = "", handleChange}) => {
  const { searchBox } = styles;
  const id = useId();


  return (
    <div className={searchBox}>
      <label htmlFor={`searchBoxInput${id}`}>Find contacts by name</label>
      <input id={`searchBoxInput${id}`} type="text" value={inputValue} onChange={handleChange}/>

    </div>
  );
};
export default SearchBox;
