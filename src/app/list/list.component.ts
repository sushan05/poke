import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy } from '@angular/core';

@Component({
    selector: 'app-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.css']
})
export class ListComponent implements 
    OnChanges, 
    OnInit, 
    DoCheck, 
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy {
   @Input() listData: Array<string> = [];
   @Input() dataInfo: string;
   @Output() deleteClick = new EventEmitter;

   removeElement(i: number) {
    this.deleteClick.emit(i);
   }

    ngOnChanges(changes: SimpleChanges): void {
        console.log('checking onChanges ', changes);
    }

    ngOnInit(): void {
        console.log('checking onInit');
    }

    ngDoCheck(): void {
        console.log('checking doCheck');
    }

    ngAfterContentInit(): void {
        console.log('checking afterContentInit');
    }

    ngAfterContentChecked(): void {
        console.log('checking afterContentChecked');
    }

    ngAfterViewInit(): void {
        console.log('checking afterViewInit');
    }

    ngAfterViewChecked(): void {
        console.log('checking afterViewChecked');
    }

    ngOnDestroy(): void {
        console.log('checking onDestroy');
    }
}