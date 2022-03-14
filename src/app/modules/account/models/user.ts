export interface User {
  id?: number;
  username: string;
  mail: string;
  avatar: string;
  firstName: string;
  lastName: string;
  password?: string;
  role: any;
  dateOfBirth: string;
}
