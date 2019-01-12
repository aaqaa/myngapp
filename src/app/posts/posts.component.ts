import { PostService } from './post.service';
import { AppError } from '../error/AppError';
import { Component, OnInit } from '@angular/core';
import { BadRequestError } from '../error/BadRequestError';
import { NetworkError } from '../error/NetworkError';
import { WrongUrlError } from '../error/WrongUrlError';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts : any;
  constructor(private postService : PostService) {}

   createPost(input : HTMLInputElement){
     
     let post = {title : input.value};
     this.posts.unshift(post);
    this.postService.create(input).subscribe(postCreated=>{
      input.value=""; 
      post['id'] = postCreated.id;
    },error=>{
      alert('unable to create post')
      this.posts.splice(0,1);
    })

   }

   updatePost(post){
     this.postService.update(post).subscribe(newPost=>{
       console.log(newPost)
     }, error =>{
       alert('update failed');
     });     
   }

   deletePost(post){
    let index =  this.posts.indexOf(post);
    let delPost = this.posts[index];  
    this.posts.splice(index,1);
    this.postService.delete(post).subscribe(()=>{
     
      

    }, (error:Response)=>{
      this.posts.splice(index , index+1 , delPost)
      if(error instanceof BadRequestError )
      alert('Unable to delete user');
      else if (error instanceof NetworkError)
      alert("Wrong Url");
      else alert('error wrong ---------url')
    });

  }

  ngOnInit() {
    this.postService.getAll().subscribe(posts=>{
      this.posts = posts;
    },
    (error : AppError)=>{
      if(error instanceof BadRequestError )
      alert('User already deleted');
      else if (error instanceof NetworkError)
      alert("Wrong Url");
      else if(error instanceof WrongUrlError)
      {  
        alert('error wrong ---------url')
        throw error;
      }  
  
  
    });
  }

}
