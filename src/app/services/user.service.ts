import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl='http://localhost:4200/api/users';

  constructor(private http: HttpClient) { }

   async getUsers() {
    return this.http.get<User[]>(this.apiUrl).toPromise();
  }

  async createUser(user: User) {
    return this.http.post<User>(this.apiUrl, user).toPromise();
  }
  async loadUsers() {
    return this.http.get<User[]>(this.apiUrl).toPromise();
  }
  async sortUsers(src: string) {
    return this.http.get<User[]>(this.apiUrl, {
      params: { src }
    }).toPromise();
  }
  async getUserById(id: string) {
    return this.http.get<User>(this.apiUrl + id).toPromise();
  }
}
