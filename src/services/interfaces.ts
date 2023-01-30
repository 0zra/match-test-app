export interface User {
  userId: string;
  firstName: string;
  lastName: string;
  email: string;
}

export interface GetUsersResponseInterface {
  code: string;
  data: User[];
  error?: any;
}

export interface Project {
  projectId: string;
  userIds: string[];
  rule: string;
  gatewayIds: string[];
  structure: string;
  industry: string;
  website: string;
  description: string;
  image: string;
  name: string;
}

export interface GetProjectsResponseInterface {
  code: string;
  data: Project[];
  error?: any;
}

export interface Gateway {
  gatewayId: string;
  userIds: string[];
  name: string;
  type: string;
  apiKey: string;
  secondaryApiKey: string;
  description: string;
}

export interface GetGatewaysResponseInterface {
  code: string;
  data: Gateway[];
  error?: any;
}