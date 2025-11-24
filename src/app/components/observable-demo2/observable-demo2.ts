import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, inject, ViewChild } from '@angular/core';
import { concatMap, exhaustMap, forkJoin, from, fromEvent, mergeMap, of } from 'rxjs';

@Component({
  selector: 'app-observable-demo2',
  imports: [],
  templateUrl: './observable-demo2.html',
  styleUrl: './observable-demo2.css',
})
export class ObservableDemo2 {
  user_url = 'https://jsonplaceholder.typicode.com/users';
  post_url = 'https://jsonplaceholder.typicode.com/posts';
  users: any = [];
  @ViewChild('loginBtn') loginBtn!: ElementRef;

  httpClient = inject(HttpClient);

  ngOnInit() {
    // this.forkJoin_demo();
    // this.mergemap_demo();
    // this.concatmap_demo();
  }

  forkJoin_demo() {
    const observableArr = [
      this.httpClient.get(this.user_url),
      this.httpClient.get(this.post_url)
    ]
    forkJoin(observableArr).subscribe(
      (responseArr: any) => {
        console.log(responseArr);
        this.users = responseArr[0];
      }
    );
  }

  mergemap_demo() {
    const userArr = [
      { "id": 1, "name": "sanjay", "gender": "male" },
      { "id": 2, "name": "geeta", "gender": "female" },
      { "id": 3, "name": "sameer", "gender": "male" },
      { "id": 4, "name": "sita", "gender": "female" },
      { "id": 5, "name": "deepak", "gender": "male" }
    ]
    let userPublisher = from(userArr); // outer Observable
    userPublisher.pipe(mergeMap((userObj: any) => {
      return this.httpClient.get(`https://fakestoreapi.com/carts/${userObj.id}`)
    })).subscribe(cartResponse => {
      console.log(cartResponse)
    });
  }

  concatmap_demo() {
    const userArr = [
      { "id": 1, "name": "sanjay", "gender": "male" },
      { "id": 2, "name": "geeta", "gender": "female" },
      { "id": 3, "name": "sameer", "gender": "male" },
      { "id": 4, "name": "sita", "gender": "female" },
      { "id": 5, "name": "deepak", "gender": "male" }
    ]
    let userPublisher = from(userArr); // outer Observable
    userPublisher.pipe(concatMap((userObj: any) => {
      return this.httpClient.get(`https://fakestoreapi.com/carts/${userObj.id}`)
    })).subscribe(cartResponse => {
      console.log(cartResponse)
    });
  }

  ngAfterViewInit() {
    /* fromEvent(this.loginBtn.nativeElement, 'click').subscribe(val => {
      this.httpClient.get('https://jsonplaceholder.typicode.com/users').subscribe(response => {
        console.log(response);
      });
    }); */

    fromEvent(this.loginBtn.nativeElement, 'click').pipe(exhaustMap((val) => {
      return this.httpClient.get('https://jsonplaceholder.typicode.com/users')
    })).subscribe({
      next: (res) => console.log('Response:', res),
      error: (err) => console.error('Error:', err),
    })
  }


}
