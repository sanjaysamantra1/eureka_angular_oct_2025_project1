import { Component } from '@angular/core';
import { AsyncSubject, BehaviorSubject, ReplaySubject, Subject } from 'rxjs';

@Component({
  selector: 'app-subject-demo1',
  imports: [],
  templateUrl: './subject-demo1.html',
  styleUrl: './subject-demo1.css',
})
export class SubjectDemo1 {
  ngOnInit() {
    // this.subject_demo();
    // this.behaviorSubject_demo();
    // this.replaySubject_demo();
    this.asyncSubject_demo();
  }

  subject_demo() {
    const mySubject = new Subject();
    mySubject.next('Plan-A'); // publishing/emitting the data
    mySubject.subscribe(val => console.log('Subscriber-1 ', val));
    mySubject.next('Plan-B');
    mySubject.subscribe(val => console.log('Subscriber-2 ', val));
    mySubject.next('Plan-C');
  }
  behaviorSubject_demo() {
    const mySubject = new BehaviorSubject('Default Plan');
    mySubject.next('Plan-A'); // publishing/emitting the data
    mySubject.subscribe(val => console.log('Subscriber-1 ', val));
    mySubject.next('Plan-B');
    mySubject.subscribe(val => console.log('Subscriber-2 ', val));
    mySubject.next('Plan-C');
  }
  replaySubject_demo() {
    const mySubject = new ReplaySubject();
    mySubject.next('Plan-A'); // publishing/emitting the data
    mySubject.subscribe(val => console.log('Subscriber-1 ', val));
    mySubject.next('Plan-B');
    mySubject.subscribe(val => console.log('Subscriber-2 ', val));
    mySubject.next('Plan-C');
  }
  asyncSubject_demo() {
    const mySubject = new AsyncSubject();
    mySubject.next('Plan-A'); // publishing/emitting the data
    mySubject.subscribe(val => console.log('Subscriber-1 ', val));
    mySubject.next('Plan-B');
    mySubject.subscribe(val => console.log('Subscriber-2 ', val));
    mySubject.next('Plan-C');
    mySubject.complete();
  }
}
