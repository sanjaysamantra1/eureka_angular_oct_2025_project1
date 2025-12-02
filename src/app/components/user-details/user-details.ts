import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-details',
  imports: [],
  templateUrl: './user-details.html',
  styleUrl: './user-details.css',
})
export class UserDetails {
  activatedRoute = inject(ActivatedRoute);
  httpClient = inject(HttpClient);

  user: any;

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: any) => {
      console.log(params);
      const user_url = `https://jsonplaceholder.typicode.com/users/${params.id}`
      this.httpClient.get(user_url).subscribe(userResponse => {
        this.user = userResponse;
      })
    })
  }
}
