import { useDispatch, useSelector } from "react-redux";
import { changeFilter } from "../../redux/filters/slice";
import { selectFilter } from "../../redux/filters/selectors";
import css from "./Filter.module.css";

export default function SearchBox() {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  return (
    <input
      className={css.input}
      placeholder="Search by name..."
      value={filter}
      onChange={(e) => dispatch(changeFilter(e.target.value))}
    />
  );
}
