import { Component, OnInit } from '@angular/core';
import { Contact } from 'src/app/models/contact';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  users: Contact[];
  userForm: boolean;
  // new user
  isNewUser: boolean;
  newUser: any = {};
  // update user
  editUserForm: boolean;
  editedUser: any = {};
  // filter
  userSearch = '';

  user;

  constructor(private contactService: ContactService) { }

  ngOnInit() {
    this.users = this.getUsers();
  }

  getUsers(): Contact[] {
    return this.contactService.getUsersFromData();
  }

  showEditUserForm(user: Contact) {
    if (!user) {
      this.userForm = false;
      return;
    }
    this.editUserForm = true;
    this.editedUser = user;
  }

  saveUser() {
    // add a new user
    this.contactService.addUser(this.newUser);
    this.userForm = false;
  }

  updateUser() {
    this.contactService.updateUser(this.editedUser);
    this.editUserForm = false;
    this.editedUser = {};
  }

  removeUser(user: Contact) {
    this.contactService.deleteUser(user);
  }

}
