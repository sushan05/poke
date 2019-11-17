import { Component, Input, Output, EventEmitter } from '@angular/core';
import { customFade } from '../trigger.animation';


@Component({
    selector: 'app-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.css'],
    animations: [ customFade ]
})
export class ListComponent {
   @Input() listData: Array<string>;
   @Input() dataInfo: string;
   @Output() deleteClick = new EventEmitter;

   customStateVar = 'shown';

   removeElement(i: number) {
    this.deleteClick.emit(i);
   }

   updateState() {
       this.customStateVar = 'alert';

       setTimeout(() => {
        this.customStateVar = 'shown';
       }, 3000);
   }
}