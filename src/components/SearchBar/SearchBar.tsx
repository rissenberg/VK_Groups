import React, {useContext, useEffect, useState} from 'react';
import './style.css';
import {Filter, Group} from '../../modules/types';
import {API} from "../../modules/api";
import {SearchContext} from "./SearchContext";

interface SearchFormArguments {
  setGroups: (groups: Group[]) => void,
  setErrorMessage: (errorMessage: string) => void,
  setIsLoading: (isLoading: boolean) => void,
}

export function SearchBar(props: SearchFormArguments) {
  const [friendsInGroup, setFriendInGroup] = useState(false);
  const [groupType, setGroupType] = useState('any');
  const [avatarColor, setAvatarColor] = useState('any');
  const [avatarCollection, setAvatarCollection] = useState<string[]>([])

  const { isLoading } = useContext(SearchContext);

  // Делаем первый вызов и рендерим все группы, параллельно сохрняем значения всех аватарок
  useEffect(() => {
    sendRequest().then((data) => {
      if (data.result && data.data) {
        // @ts-ignore
        const avatars = [...new Set(data.data.map((group) => {
            return group.avatar_color ?? '';
        }))];
        setAvatarCollection(avatars);
      }
    })
  }, [])

  const handleFriendsCheckbox = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFriendInGroup(e.target.checked);
  };

  const handleGroupTypeSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setGroupType(e.target.value);
  };

  const handleAvatarSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setAvatarColor(e.target.value);
  };

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    !isLoading && sendRequest();
  }

  const sendRequest = async () => {
    props.setErrorMessage('');
    props.setIsLoading(true);

    const filter: Filter = {
      friendsInGroup,
      groupType: groupType === 'any' ? 'any' : groupType === 'open',
      avatarColor
    }

    const api = new API();
    const res = await api.groupSearch(filter);
    props.setIsLoading(false);

    if (res.result && res.data) {
      props.setGroups(res.data);
      !res.data.length && props.setErrorMessage('Группы не найдены');
    } else {
      props.setGroups([]);
      props.setErrorMessage('Произошла ошибка при запросе!');
    }

    return res;
  };

  return (
    <div className="searchBar">
      <form className="searchBar_form" onSubmit={handleFormSubmit}>
        <label className="friendsCheckbox">
          <input type="checkbox" onChange={handleFriendsCheckbox} checked={friendsInGroup}/>
          Только с друзьями
        </label>
        <div>
          <div>Тип приватности</div>
          <select className="selectGroupType" onChange={handleGroupTypeSelect} value={groupType}>
            <option value="any">Любые</option>
            <option value="open">Открытые</option>
            <option value="closed">Закрытые</option>
          </select>
        </div>
        <div>
          <div>Цвет аватара</div>
          <select className="selectGroupAvatar" onChange={handleAvatarSelect} value={avatarColor}>
            <option value="any">Любые</option>
            {avatarCollection.map((avatar: string, index) => (
              <>{ avatar && <option value={avatar} key={index}> {avatar} </option> }</>
            ))}
          </select>
        </div>

        <button className="searchSubmitButton" type="submit">Поиск</button>
      </form>
    </div>
  );
}
