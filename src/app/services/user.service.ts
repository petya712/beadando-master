import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl='http://localhost:4200/api/users';

  constructor(private http: HttpClient) { }

   //async getUsers() {
    //return this.http.get<User[]>(this.apiUrl).toPromise();
  //}

  getUsers(): Observable<User[]>{
    return this.http.get<User[]>(this.apiUrl);
  }

  // async createUser(user: User) {
  //   return this.http.post<User>(this.apiUrl, user).toPromise();
  // }

  createUser(user: User):Observable<User>{
    return this.http.post<User>(this.apiUrl,user);
  }
  //async loadUsers() {
    //return this.http.get<User[]>(this.apiUrl).toPromise();
  //}

  loadUsers(): Observable<User[]>{
    return this.http.get<User[]>(this.apiUrl);
  }

  async searchForUsers(search: string) {
    return this.http.get<User[]>(this.apiUrl, {
      params: { search }
    }).toPromise();
  }
  // async getUserById(id: string) {
  //   return this.http.get<User>(this.apiUrl + id).toPromise();
  // }

  getUserById(id: string): Observable<User>{
    return this.http.get<User>(this.apiUrl);
  }
}
