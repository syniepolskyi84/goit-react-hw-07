import { changeFilter, selectNameFilter } from "../../redux/filtersSlice";
import css from "./SearchBox.module.css";
import { useDispatch, useSelector } from 'react-redux';
export default function SearchBox(){
  const filter = useSelector(selectNameFilter);
  const dispatch = useDispatch();

  const handleFilterChange = (e) => {
    dispatch(changeFilter(e.target.value))
  }
    return (
        <div className={css.div}>
          <p className={css.p}>Find contacts by name</p>
          <input
            type="text"
            value={filter}
            onChange={handleFilterChange}
          />
        </div>
      );
}