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
  public category: string = "Sport";
  constructor(public postService:PostServiceService,public router:Router, public route : ActivatedRoute) { }
  public param:any;
  ngOnInit(): void {
    this.param = {
      id: this.route.snapshot.params["id"]
    }
  }

    postForm = new FormGroup({
    title: new FormControl("",[Validators.required,Validators.minLength(3)]),
    description: new FormControl("", [Validators.required, Validators.required]),
    })

    get title() {
    return this.postForm.get('titre');
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
    console.log(post, res);
    this.router.navigate(['/listposts'])
  }
}
