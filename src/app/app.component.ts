import { Component, OnInit } from '@angular/core';
import { Observable, Subject, Subscription, BehaviorSubject, ReplaySubject } from 'rxjs';
import { SubjectService } from './subject.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  newMessage = 'Write new message here';

  obvSubscription: Subscription;
  obv: Observable<any>;
  // sub: Subject<number>;
  // sub: BehaviorSubject<number>;
  sub: ReplaySubject<number>;

  constructor(private _subService: SubjectService) {
    this.obv = new Observable(observer => {

      setTimeout(() => { observer.next(1); }, 2000);
      setTimeout(() => { observer.next(7); }, 4000);
      setTimeout(() => { observer.next(8); }, 6000);

      setTimeout(() => {
        // observer.error(new Error('Cannot proceed'));
      }, 5000);

      setTimeout(() => { observer.complete(); }, 7000);

      observer.next(3);
      observer.next(4);
      observer.next(5);
      observer.next(6);
    });

    // this.sub = new Subject();
    // this.sub = new BehaviorSubject(100);
    this.sub = new ReplaySubject(3);
  }

  ngOnInit() {

    this.sub.next(111);
    this.sub.next(112);
    this.sub.next(113);
    this.sub.next(114);
    this.sub.next(115);
    this.sub.next(116);

    this.sub.subscribe(
      subjectData => {
        console.log('Subject Data = ', subjectData);
      },
      subError => {
        console.log('Something inside Subject went wrong ', subError);
      },
      () => {
        console.log('Subject Completed!!!');
      }
    );

    this.sub.next(11);
    this.sub.next(12);
    this.sub.next(13);
    // this.sub.error(new Error('Subject cannot be proceed'));
    // this.sub.complete();

    this.obvSubscription = this.obv.subscribe(
                              data => {
                                console.log('observable data = ', data);
                              },
                              error => {
                                console.log('something went wrong ', error);
                              },
                              () => {
                                console.log('obv is completed');
                              }
                            );
  }

  unSubscribe() {
    this.sub.next(Math.random());
    this.obvSubscription.unsubscribe();
  }

  submitMsg() {
    console.log('new message = ', this.newMessage);
    this._subService.messageSharing.next(this.newMessage);
  }
}
