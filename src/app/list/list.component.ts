import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.css']
})
export class ListComponent {
   @Input() listData: Array<string>;
   @Input() dataInfo: string;
   @Input() keyName: string;

   @Output() deleteClick = new EventEmitter;
   @Output() viewClick = new EventEmitter;

   removeElement(i: number) {
    this.deleteClick.emit(i);
   }

   viewElement(i: number) {
    this.viewClick.emit(i);
   }
}