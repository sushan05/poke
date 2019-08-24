import { Component } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],
   
})
export class BlogComponent {

  newBlog: string;
  blogList: Array<string> = [];

  constructor() { }

  addNewBlog(): void {

    if(!this.newBlog) {
      return;
    }

    this.blogList.push(this.newBlog);
    this.newBlog = '';

    console.log(this.blogList);
    this.blogList = [... this.blogList];
  }

}
