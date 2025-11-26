import { HttpClient } from '@angular/common/http';
import { Component, effect, inject, signal } from '@angular/core';

@Component({
  selector: 'app-effect-demo',
  imports: [],
  templateUrl: './effect-demo.html',
  styleUrl: './effect-demo.css',
})
export class EffectDemo {
  userId = signal(1);
  userData: any = {};

  constructor(private httpClient: HttpClient) {
  }
  userDetailsEffect = effect(() => {
    console.log('I am an effect.....')
    const id = this.userId(); // reading userId signal
    this.fetchUserDetails(id); // whenever userId changes, this effect will be invoked
  });
  destroyEffect() {
    this.userDetailsEffect.destroy()
  }
  fetchUserDetails(id: number) {
    this.httpClient.get(`https://jsonplaceholder.typicode.com/users/${id}`).subscribe(response => {
      this.userData = response;
    })
  }
  incrementUserId() {
    this.userId.update(val => val + 1);
  }

}


