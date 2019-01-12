import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})

export class LikeComponent implements OnInit {
@Input() likeCount :number;
@Input() body;
@Input() isLiked;
  constructor() { }

  ngOnInit() {
  }
  updateLike(){
    this.isLiked = !this.isLiked;
    if(this.isLiked)
    this.likeCount++;
    else
    this.likeCount--;  
  }

}
