import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PostServiceService } from './../post-service.service';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {

  public category: string = "Sport";
  constructor(public postService:PostServiceService) { }

  ngOnInit(): void {
  }

    postForm = new FormGroup({
    title: new FormControl("",[Validators.required]),
    description: new FormControl("",[Validators.required])
    })

    get title() {
    return this.postForm.get('title');
    }

   get description() {
    return this.postForm.get('description');
    }
  onSubmit(postForm: FormGroup) {
    let date = new Date();
    let post = {
      title:this.postForm.value.title,
      description:this.postForm.value.description,
      category: this.category,
      date: date
    }
    this.postService.setPost(post);
    postForm.reset()

  }
}
