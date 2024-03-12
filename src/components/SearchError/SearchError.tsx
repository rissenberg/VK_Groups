import "./style.css";
import {useContext} from "react";
import {SearchContext} from "../SearchBar/SearchContext";

export function SearchError() {
  const { errorMessage } = useContext(SearchContext);

  return (
    <> {errorMessage &&
      <div className="searchError">
        {errorMessage}
      </div>
    } </>
  );
}
