import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users: User[] = [];

  searchFor: string;

  constructor(private userService: UserService) { }

  //async ngOnInit() {
    //this.users = await this.userService.loadUsers();
  //}
  ngOnInit(): void {
    this.userService.getUsers().subscribe((user)=>this.users = user);
  }

  async searchUser() {
    this.users = await this.userService.searchForUsers(this.searchFor);
  }

}
