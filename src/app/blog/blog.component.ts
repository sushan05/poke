import { Component } from '@angular/core';
import { customFade } from '../trigger.animation';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],
  animations: [customFade]
})
export class BlogComponent {

  customStateVar = 'shown';
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

  deleteItem(i: number): void {
    this.blogList.splice(i, 1);
  }

}
