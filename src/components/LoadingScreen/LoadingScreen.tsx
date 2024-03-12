import "./style.css";
import {useContext} from "react";
import {SearchContext} from "../SearchBar/SearchContext";

export function LoadingScreen() {
  const { isLoading } = useContext(SearchContext);

  return (
    <> {isLoading &&
      <div className="loadingScreen">
        <div className="lds-ring">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    } </>
  );
}
