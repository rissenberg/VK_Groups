export interface GetGroupsResponse {
  result: 1 | 0,
  data?: Group[]
}

export interface Group {
  "id": number,
  "name": string,
  "closed": boolean,
  "avatar_color"?: string,
  "members_count": number,
  "friends"?: User[]
}

export interface User {
  "first_name": string,
  "last_name": string
}

export interface Filter {
  friendsInGroup: boolean,
  groupType: boolean | 'any',
  avatarColor: string | 'any'
}