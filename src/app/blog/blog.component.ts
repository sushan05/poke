import { 
          Component,
          ContentChild,
          ContentChildren,
          ViewChild,
          ViewChildren,
          OnInit,
          AfterContentInit,
          AfterContentChecked,
          ElementRef,
          QueryList,
          AfterViewInit
        } from '@angular/core';
import { HelloComponent } from '../hello/hello.component';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'], 
})
export class BlogComponent implements OnInit, AfterViewInit, AfterContentInit, AfterContentChecked {
  @ViewChild('divRef', {static: true}) divRef: ElementRef;
  @ViewChildren('divRef, divRefs, divReft, divReff') divRefs: QueryList<ElementRef>;

  @ContentChild(HelloComponent, {static: false}) helloCom: HelloComponent;
  @ContentChildren(HelloComponent) helloComs: QueryList<HelloComponent>;

  showOptions = true;
  showNumOptions = true;

  constructor() { }

  ngOnInit() { }

  ngAfterViewInit() {
    console.log('checking div reference', this.divRef);
    console.log('checking div reference multiple ', this.divRefs.toArray());

    this.divRef.nativeElement.innerHTML = 'Update Information'; 
  }

  ngAfterContentInit() {
    console.log('checking after content init ', [...this.helloComs.toArray()]);

    setTimeout(() => {
      this.helloCom.message = 'Konnichwa';      
    }, 1000);

    setTimeout(() => {
      this.helloComs.toArray().forEach(data => {
        console.log('itrating projected hello components', data);
        data.message = "mushi";
      })
    }, 2000);
  }

  ngAfterContentChecked() {
    console.log('checking after checked ', [...this.helloComs.toArray()]);
  }
}
