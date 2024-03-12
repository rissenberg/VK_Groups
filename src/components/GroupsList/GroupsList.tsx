import { useContext } from "react";
import { SearchContext } from "../SearchBar/SearchContext";
import "./style.css";
import {Group} from "../../modules/types";
import {GroupCard} from "../GroupCard/GroupCard";

export function GroupsList() {
  const { groups } = useContext(SearchContext);

  return (
    <div className="groupsList">
      {groups.map((group: Group) => (
        <GroupCard {...group} key={group.id}/>
      ))}
    </div>
  );
}
