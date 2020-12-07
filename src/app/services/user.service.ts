import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  userUrl = 'http://localhost:3000';
  
  constructor(private httpClient:HttpClient) { }

  getAllUsers() {
    return this.httpClient.get<{message:string, users:any}>(`${this.userUrl}/allUsers`);
  }

  deleteUser(id:string) {
    return this.httpClient.delete(`${this.userUrl}/deleteUser/${id}`);
  }

  addUser(user:any) {
  // addUser(user:any, image:File) {
    // let formData = new FormData();
    // formData.append('firstName', user.firstName);
    // formData.append('lastName', user.lastName);
    // formData.append('email', user.email);
    // formData.append('pwd', user.pwd);
    // formData.append('confirmPwd', user.confirmPwd);
    // formData.append('image', image);

    return this.httpClient.post(`${this.userUrl}/addUser`, user);
  }

  editUser(user:any) {
    return this.httpClient.put(`${this.userUrl}/editUser/${user._id}`,user);
  }
  getUserbyId(id:string){
    return this.httpClient.get<{user:any}>(`${this.userUrl}/displayUser/${id}`)
  }

  login(user:any) {
    return this.httpClient.post<{user:any}>(`${this.userUrl}/login`, user);
  }

 
}