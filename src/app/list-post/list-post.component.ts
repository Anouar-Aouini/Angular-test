import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PostServiceService } from './../post-service.service';

@Component({
  selector: 'app-list-post',
  templateUrl: './list-post.component.html',
  styleUrls: ['./list-post.component.css']
})
export class ListPostComponent implements OnInit {

  constructor(public postService : PostServiceService , public router:Router , public route:ActivatedRoute) { }
  public posts?:any;
  ngOnInit(): void {
    this.posts = this.postService.getPosts();
  }
  panelOpenState = false;
  onDeletePost(id:number) {
    this.postService.deletePost(id);
    this.posts = this.postService.getPosts();
  }
  updatePost(id: number,post:any) {
    this.router.navigate([post.title,{id}],{relativeTo:this.route})
  }

}
