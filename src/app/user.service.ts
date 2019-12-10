import { Injectable } from "@angular/core";
import { UserDetails } from "./user-details";

@Injectable({
  providedIn: "root"
})
export class UserService {
  private userName:string;
  private password:string;
  private userRole:string;
  private name:string;
  private status:boolean=false;
  private user: UserDetails[] = [];

  constructor() {
    this.user.push(new UserDetails("Admin", "Administrator", "admin", "admin"));
    this.user.push(new UserDetails("Admin", "Anoop Rj", "arj", "arj"));
    this.user.push(new UserDetails("User", "DemoUser", "user", "user"));
    this.user.push(new UserDetails("User", "Anoop Jha", "aj", "aj"));
  }

  checkUser(uname:string,pswrd:string):boolean{
    this.user.forEach(person=>{
      if(person.authenticateUser(uname,pswrd)){
        this.userName = uname;
        this.password = pswrd;
        this.userRole = person.getUserRole();
        this.name = person.getName();
        this.status=true;
      }
    });
    return this.status;
  }

  getUserName():string{
    this.checkUser(this.userName,this.password);
    return this.name;
  }

  getUserRole():string{
    this.checkUser(this.userName,this.password);
    return this.userRole;
  }
}
