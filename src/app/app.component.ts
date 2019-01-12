import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  post ={selected : false}

  updateFav(){
    this.post.selected = !this.post.selected;
  }
  tweet={
    body :"I am genius",
    isLiked : false,
    likeCount : 1000
  }
  
}
