import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-author-selector',
  templateUrl: './author-selector.component.html',
  styleUrls: ['./author-selector.component.css']
})
export class AuthorSelectorComponent implements OnInit {
  author : any;
  constructor() { }

  ngOnInit() {
  }

  loadAuthors(){
    this.author = [{id:1,value : "asheer"},
                   {id:1,value : "Basheer"},{id:1,value : "naushad"},{id:1,value : "Saman"},{id:1,value : "asheer"},
                   {id:1,value : "Basheer"},{id:1,value : "naushad"},{id:1,value : "Saman"},{id:1,value : "asheer"},
                   {id:1,value : "Basheer"},{id:1,value : "naushad"},{id:1,value : "Saman"},{id:1,value : "asheer"},
                   {id:1,value : "Basheer"},{id:1,value : "naushad"},{id:1,value : "Saman"},{id:1,value : "asheer"},
                   {id:1,value : "Basheer"},{id:1,value : "naushad"},{id:1,value : "Saman"},{id:1,value : "asheer"},
                   {id:1,value : "Basheer"},{id:1,value : "naushad"},{id:1,value : "Saman"},{id:1,value : "asheer"},
                   {id:1,value : "Basheer"},{id:1,value : "naushad"},{id:1,value : "Saman"},{id:1,value : "asheer"},
                   {id:1,value : "Basheer"},{id:1,value : "naushad"},{id:1,value : "Saman"},{id:1,value : "asheer"},
                   {id:1,value : "Basheer"},{id:1,value : "naushad"},{id:1,value : "Saman"},{id:1,value : "asheer"},
                   {id:1,value : "Basheer"},{id:1,value : "naushad"},{id:1,value : "Saman"},{id:1,value : "asheer"},
                   {id:1,value : "Basheer"},{id:1,value : "naushad"},{id:1,value : "Saman"},{id:1,value : "asheer"},
                   {id:1,value : "Basheer"},{id:1,value : "naushad"},{id:1,value : "Saman"},{id:1,value : "asheer"},
                   {id:1,value : "Basheer"},{id:1,value : "naushad"},{id:1,value : "Saman"},{id:1,value : "asheer"},
                   {id:1,value : "Basheer"},{id:1,value : "naushad"},{id:1,value : "Saman"},{id:1,value : "asheer"},
                   {id:1,value : "Basheer"},{id:1,value : "naushad"},{id:1,value : "Saman"},{id:1,value : "asheer"},
                   {id:1,value : "Basheer"},{id:1,value : "naushad"},{id:1,value : "Saman"},{id:1,value : "asheer"},
                   {id:1,value : "Basheer"},{id:1,value : "naushad"},{id:1,value : "Saman"},{id:1,value : "asheer"},
                   {id:1,value : "Basheer"},{id:1,value : "naushad"},{id:1,value : "Saman"},{id:1,value : "asheer"},
                   {id:1,value : "Basheer"},{id:1,value : "naushad"},{id:1,value : "Saman"},{id:1,value : "asheer"},
                   {id:1,value : "Basheer"},{id:1,value : "naushad"},{id:1,value : "Saman"},{id:1,value : "asheer"},
                   {id:1,value : "Basheer"},{id:1,value : "naushad"},{id:1,value : "Saman"},{id:1,value : "asheer"},
                   {id:1,value : "Basheer"},{id:1,value : "naushad"},{id:1,value : "Saman"},{id:1,value : "asheer"},
                   {id:1,value : "Basheer"},{id:1,value : "naushad"},{id:1,value : "Saman"},{id:1,value : "asheer"},
                   {id:1,value : "Basheer"},{id:1,value : "naushad"},{id:1,value : "Saman"},{id:1,value : "asheer"},
                   {id:1,value : "Basheer"},{id:1,value : "naushad"},{id:1,value : "Saman"},{id:1,value : "asheer"},
                   {id:1,value : "Basheer"},{id:1,value : "naushad"},{id:1,value : "Saman"},{id:1,value : "asheer"},
                   {id:1,value : "Basheer"},{id:1,value : "naushad"},{id:1,value : "Saman"},{id:1,value : "asheer"},
                   {id:1,value : "Basheer"},{id:1,value : "naushad"},{id:1,value : "Saman"},{id:1,value : "asheer"},
                   {id:1,value : "Basheer"},{id:1,value : "naushad"},{id:1,value : "Saman"},{id:1,value : "asheer"},
                   {id:1,value : "Basheer"},{id:1,value : "naushad"},{id:1,value : "Saman"},{id:1,value : "asheer"},
                   {id:1,value : "Basheer"},{id:1,value : "naushad"},{id:1,value : "Saman"},{id:1,value : "asheer"},
                   {id:1,value : "Basheer"},{id:1,value : "naushad"},{id:1,value : "Saman"},{id:1,value : "asheer"},
                   {id:1,value : "Basheer"},{id:1,value : "naushad"},{id:1,value : "Saman"},{id:1,value : "asheer"},
                   {id:1,value : "Basheer"},{id:1,value : "naushad"},{id:1,value : "Saman"},{id:1,value : "asheer"},
                   {id:1,value : "Basheer"},{id:1,value : "naushad"},{id:1,value : "Saman"},{id:1,value : "asheer"},
                   {id:1,value : "Basheer"},{id:1,value : "naushad"},{id:1,value : "Saman"},{id:1,value : "asheer"},
                   {id:1,value : "Basheer"},{id:1,value : "naushad"},{id:1,value : "Saman"},{id:1,value : "asheer"},
                   {id:1,value : "Basheer"},{id:1,value : "naushad"},{id:1,value : "Saman"},{id:1,value : "asheer"},
                   {id:1,value : "Basheer"},{id:1,value : "naushad"},{id:1,value : "Saman"},{id:1,value : "asheer"},
                   {id:1,value : "Basheer"},{id:1,value : "naushad"},{id:1,value : "Saman"},{id:1,value : "asheer"},
                   {id:1,value : "Basheer"},{id:1,value : "naushad"},{id:1,value : "Saman"},{id:1,value : "asheer"},
                   {id:1,value : "Basheer"},{id:1,value : "naushad"},{id:1,value : "Saman"},{id:1,value : "asheer"},
                   {id:1,value : "Basheer"},{id:1,value : "naushad"},{id:1,value : "Saman"},{id:1,value : "asheer"},
                   {id:1,value : "Basheer"},{id:1,value : "naushad"},{id:1,value : "Saman"},{id:1,value : "asheer"},
                   {id:1,value : "Basheer"},{id:1,value : "naushad"},{id:1,value : "Saman"},{id:1,value : "asheer"},
                   {id:1,value : "Basheer"},{id:1,value : "naushad"},{id:1,value : "Saman"},{id:1,value : "asheer"},
                   {id:1,value : "Basheer"},{id:1,value : "naushad"},{id:1,value : "Saman"},{id:1,value : "asheer"},
                   {id:1,value : "Basheer"},{id:1,value : "naushad"},{id:1,value : "Saman"},{id:1,value : "asheer"},
                   {id:1,value : "Basheer"},{id:1,value : "naushad"},{id:1,value : "Saman"},{id:1,value : "asheer"},
                   {id:1,value : "Basheer"},{id:1,value : "naushad"},{id:1,value : "Saman"}]
  }

  trackAuthor(index , author ){

    return author ? author.id : undefined

  }
}
