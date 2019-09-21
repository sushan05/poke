import { Component } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],
   
})
export class BlogComponent {

  // Input fields
  name: string;
  lastName: string;
  age: number;
  address: string;

  // Array to store the list of users
  users: Array<any> = [];

  showUserNumber: number = null;
  newBlog: string;
  blogList: Array<string> = [];

  constructor() { }

  addNewUser(): void {
    const newUser = {
      name: this.name,
      lastName: this.lastName,
      age: this.age,
      address: this.address
    }

    this.users.push(newUser);

    this.users = [...this.users];

    this.resetUserInfo();

    console.log('chekcing users', this.users);
  }

  resetUserInfo(): void {
    this.name = this.lastName = this.age = this.address = null;
  }

  viewItem(index: number) {
    this.showUserNumber = index;
  }

  addNewBlog(): void {

    if(!this.newBlog) {
      return;
    }

    this.blogList.push(this.newBlog);
    this.newBlog = '';

    console.log(this.blogList);
    this.blogList = [... this.blogList];
  }

  deleteItem(i: number): void {
    this.blogList.splice(i, 1);
  }

}
