import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { CommentService } from '../../services/comment-service';
import { Comment } from '../../models/comment';

@Component({
  selector: 'app-comment-list',
  imports: [],
  templateUrl: './comment-list.html',
  styleUrl: './comment-list.css',
})
export class CommentList {
  comments_url = 'https://jsonplaceholder.typicode.com/comments';
  commentArr: Comment[] = [];

  constructor(private commentService: CommentService) {
  }

  ngOnInit() {
    this.fetchData_Javascript();
    // this.fetchData_Angular();
  }
  fetchData_Angular() {
    this.commentService.getAllComments().subscribe((response: Comment[]) => {
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
