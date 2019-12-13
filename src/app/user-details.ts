export class UserDetails {
  private userName: string;
  name: string;
  private password: string;
  userRole: string;

  constructor(
    userRole: string,
    name: string,
    userName: string,
    password: string
  ) {
    this.userName = userName;
    this.password = password;
    this.userRole = userRole;
    this.name = name;
  }

  authenticateUser(uName: string, pswrd: string): boolean {
    if (this.userName === uName && this.password === pswrd) {
      return true;
    } else {
      return false;
    }
  }

  getUserRole(): string {
    return this.userRole;
  }

  getName(): string {
    return this.name;
  }
}
