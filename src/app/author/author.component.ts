import { AuthorService } from './../author.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent implements OnInit {
  active: boolean = false;
  title : string;
   public list : any
  constructor( private authorService : AuthorService) { }

  ngOnInit() {
    this.list = this.authorService.getAuthors();
  }
  setActive(){
    this.active = !this.active;
  }


}
