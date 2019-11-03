import { Component } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],
   
})
export class BlogComponent {

  showList = true;
  newBlog: string;
  cacheList: Array<string> = [];
  blogList: Array<string> = [];

  constructor() { }

  addNewBlog(): void {
    if(!this.newBlog) {
      return;
    }

    this.cacheList.push(this.newBlog);
    this.newBlog = '';

    this.blogList = [... this.cacheList];
  }

  deleteItem(i: number): void {
    this.blogList.splice(i, 1);
  }

}
