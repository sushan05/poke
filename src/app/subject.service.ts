import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubjectService {
  messageSharing: Subject<string> = new Subject();
  constructor() { }
}
