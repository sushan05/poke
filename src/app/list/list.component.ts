import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.css']
})
export class ListComponent {
   @Input() listData: Array<string>;
   @Input() dataInfo: string;

   removeElement(i: number) {
       this.listData.splice(i, 1);
   }
}