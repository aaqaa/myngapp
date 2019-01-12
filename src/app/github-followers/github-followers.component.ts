import { GithubFollowersService } from './github-followers-service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-github-followers',
  templateUrl: './github-followers.component.html',
  styleUrls: ['./github-followers.component.css']
})
export class GithubFollowersComponent implements OnInit {

  constructor(private service : GithubFollowersService) { }
  followers ;
  ngOnInit() {
     this.service.getAll().subscribe(res =>{
      this.followers = res;
    });
  }

}
