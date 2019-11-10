import { Component, OnInit } from '@angular/core';
import { SubjectService } from '../subject.service';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent implements OnInit {
  message = 'hello component';
  constructor(private _subService: SubjectService) { }

  ngOnInit() {
    this._subService.messageSharing.subscribe(data => {
      this.message = data;
    });
  }

}
