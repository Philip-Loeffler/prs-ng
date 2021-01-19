export class User {
  id: number;
  userName: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  email: string;
  isReviewer: boolean;
  isAdmin: boolean;

  constructor(
    id = 0,
    userName: '',
    firstName: '',
    lastName: '',
    phoneNumber: '',
    email: '',
    isReviewer = false,
    isAdmin = false
  ) {
    this.id = id;
    this.userName = userName;
    this.firstName = firstName;
    this.lastName = lastName;
    this.phoneNumber = phoneNumber;
    this.email = email;
    this.isReviewer = isReviewer;
    this.isAdmin = isAdmin;
  }
}
