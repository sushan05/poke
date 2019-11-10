import { Component, OnInit } from '@angular/core';
import { SubjectService } from '../subject.service';

@Component({
    selector: 'app-users',
    templateUrl: './users.component.html',
    styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
    newMessage;
    message = 'users component'
    constructor(private _subService: SubjectService) { }

    ngOnInit() {
        this._subService.messageSharing.subscribe(data => {
        this.message = data;
        });
    }

    submitMsg() {
        this._subService.messageSharing.next(this.newMessage);
    }
}