import {Filter, GetGroupsResponse, Group} from './types';
import {MockGroups} from './mockData';

const defaultFilter: Filter = {
  friendsInGroup: false,
  groupType: 'any',
  avatarColor: 'any',
};

export class API {
  groupSearch = async (filter: Filter = defaultFilter): Promise<GetGroupsResponse> => {
    const data: Group[] = MockGroups;

    const filteredData: Group[] = data.filter((group: Group) => {
      let toFilter = true;

      // Фильтртрование по друзьям
      if (filter.friendsInGroup) {
        toFilter = toFilter && Boolean(group.friends && group.friends.length > 0);
      }
      // Фильтртрование по приватности
      if (filter.groupType !== 'any') {
        toFilter = toFilter && group.closed === filter.groupType;
      }
      // Фильтртрование по цвету аватара
      if (filter.avatarColor !== 'any') {
        toFilter = toFilter && group.avatar_color === filter.avatarColor;
      }

      return toFilter;
    });

    const response: GetGroupsResponse = {
      result: data ? 1 : 0,
      data: filteredData,
    }

    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(response);
      }, 1000);
    });
  }

}