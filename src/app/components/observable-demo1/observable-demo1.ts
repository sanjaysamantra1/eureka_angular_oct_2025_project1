import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { filter, interval, map, Observable } from 'rxjs';

@Component({
  selector: 'app-observable-demo1',
  imports: [CommonModule],
  templateUrl: './observable-demo1.html',
  styleUrl: './observable-demo1.css',
})
export class ObservableDemo1 {
  private httpClient = inject(HttpClient);
  user_url = 'https://jsonplaceholder.typicode.com/uses';

  ngOnInit() {
    // this.fetchUserData();
    // this.createAndUseCustomObservable();
    this.interval_demo();
    this.digitalClock();
  }

  fetchUserData() { // use of observable while fetching data from backend
    this.httpClient.get(this.user_url).subscribe(
      (partialResponse) => { console.log(partialResponse) }, // next
      (error) => { console.log('SOmething went wrong', error) },
      () => { console.log('Completed') }
    );
  }

  createAndUseCustomObservable() {
    const carsPublisher = new Observable((publisher) => { // publisher
      publisher.next('Tata');
      publisher.next('Honda');
      publisher.next('Maruti');
      publisher.complete();
    });
    const carsSubscriber = carsPublisher.subscribe({ // subscriber
      next: (response) => { console.log('partial response received ', response) },
      error: (error) => { console.log('Something went wrong', error) },
      complete: () => { console.log('Completed') }
    });
  }

  numPublisher: Observable<number> | undefined;
  evenNumPublisher: Observable<number> | undefined;
  squarePublisher: Observable<number> | undefined;
  interval_demo() {
    this.numPublisher = interval(1000);  // publisher keeps publishing new data
    this.evenNumPublisher = this.numPublisher.pipe(filter(val => val % 2 == 0));
    this.squarePublisher = this.numPublisher.pipe(map(val => val * val));

    const numSubscriber = this.numPublisher.subscribe((val) => console.log('Num Value is: ', val));
    // subscriber keeps subscribing the data
    setTimeout(
      () => {
        numSubscriber.unsubscribe();
      }, 10000);
  }

  currentTime$: Observable<string> | undefined;
  digitalClock() {
    this.currentTime$ = interval(1000).pipe(map(() => new Date().toLocaleTimeString()))
  }

}
