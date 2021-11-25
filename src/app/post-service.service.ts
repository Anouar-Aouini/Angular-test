import { Injectable } from '@angular/core';
import { Post } from './post.module';

@Injectable({
  providedIn: 'root'
})
export class PostServiceService {

  constructor() { }
  public posts: Post[] = [];
  getLocal(item:string) {
      return  <string>localStorage.getItem(item)
    }
  getPosts() {
    return  JSON.parse(<string>localStorage.getItem("posts"));
  }
  setPost(post: any) {
    if (this.getPosts()) {
      console.log(this.getPosts())
      let posts = [...this.getPosts(),post];
    localStorage.setItem("posts",JSON.stringify(posts));
    } else {
      localStorage.setItem("posts",JSON.stringify([post]))
    }

  }


  updatePost(id: number, post: Post) {
    console.log(post,id)
    let posts = this.getPosts().map((el: any, index: any) => +index === +id ? post : el);
    this.setPosts(posts);
  }


  setPosts(posts:any) {
    localStorage.setItem("posts",JSON.stringify(posts))
  }


  deletePost(id: number) {
    let posts = this.getPosts().filter((el: any, index: any) => +index !== +id);
    localStorage.setItem("posts", JSON.stringify(posts))
    this.setPosts(posts)
  }
}
