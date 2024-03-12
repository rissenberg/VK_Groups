import {Filter, GetGroupsResponse} from './types';
import {MockGroups} from './mockData';

const defaultFilter: Filter = {
  friendsInGroup: false,
  groupType: undefined,
  avatarColor: undefined,
};

export class API {
  groupSearch = async (filter: Filter = defaultFilter): Promise<GetGroupsResponse> => {
    const response: GetGroupsResponse = {
      result: 1,
      data: MockGroups,
    }

    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(response);
      }, 1000);
    });
  }

}