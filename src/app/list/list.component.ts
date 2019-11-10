import { Component, OnInit } from '@angular/core';
import { SubjectService } from '../subject.service';

@Component({
    selector: 'app-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
    message = 'list component'

    constructor(private _subService: SubjectService) { }

    
  ngOnInit() {
    this._subService.messageSharing.subscribe(data => {
      this.message = data;
    });
  }
}