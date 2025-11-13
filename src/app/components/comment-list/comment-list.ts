import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-comment-list',
  imports: [],
  templateUrl: './comment-list.html',
  styleUrl: './comment-list.css',
})
export class CommentList {
  comments_url = 'https://jsonplaceholder.typicode.com/comments';
  commentArr: any = [];

  constructor(private httpClient: HttpClient) {
  }

  ngOnInit() {
    this.fetchData_Javascript();
    // this.fetchData_Angular();
  }
  fetchData_Angular() {
    this.httpClient.get(this.comments_url).subscribe((response: any) => {
      this.commentArr = response;
    });
  }

  fetchData_Javascript() {
    fetch(this.comments_url).then((response) => {
      console.log(response);
      response.json().then((finalResponse) => {
        this.commentArr = finalResponse;
      })
    });
  }
}
