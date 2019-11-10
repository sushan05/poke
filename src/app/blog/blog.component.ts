import { Component, OnInit } from '@angular/core';
import { SubjectService } from '../subject.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],
   
})
export class BlogComponent implements OnInit{
  message = 'blog component'
  constructor(private _subService: SubjectService) { }

  ngOnInit() {
    this._subService.messageSharing.subscribe(data => {
      this.message = data;
    });
  }
}
