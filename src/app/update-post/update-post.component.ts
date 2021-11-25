import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PostServiceService } from './../post-service.service';

@Component({
  selector: 'app-update-post',
  templateUrl: './update-post.component.html',
  styleUrls: ['./update-post.component.css']
})
export class UpdatePostComponent implements OnInit {

  constructor(public postService:PostServiceService,public router:Router, public route : ActivatedRoute) { }
  public param: any={
      id: this.route.snapshot.params["id"]
    };


  ngOnInit(): void {
    this.param = {
      id: this.route.snapshot.params["id"]
    }
  }
  public post?: any = this.postService.getPosts()[this.param.id];
  public category: string = this.post.category;
    postForm = new FormGroup({
    title: new FormControl(this.post.title,[Validators.required]),
    description: new FormControl(this.post.description, [Validators.required]),
    })

    get title() {
    return this.postForm.get('title');
    }

   get description() {
    return this.postForm.get('description');
    }
  onSubmit() {
    let date = new Date();
    let post = {
      title:this.postForm.value.title,
      description:this.postForm.value.description,
      category: this.category,
      date: date
    }
    let res=this.postService.updatePost(this.param.id, post);
    this.router.navigate(['/listposts'])
  }
}
