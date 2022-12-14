interface IUser {
  id?: number;
  firstName: string;
  lastName: string;
  email: string;
  address: string
  phone: string
  userName: string
  password?: string
  avatar: string
}

export default IUser;