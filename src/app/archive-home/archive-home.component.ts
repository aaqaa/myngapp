import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-archive-home',
  templateUrl: './archive-home.component.html',
  styleUrls: ['./archive-home.component.css']
})
export class ArchiveHomeComponent implements OnInit {

  archives =[];
  constructor() { }

  ngOnInit() {
    this.archives.push(new ArchiveObject("2016",'1'));
    this.archives.push(new ArchiveObject("2017",'6'));
    this.archives.push(new ArchiveObject("2018",'7'));
    this.archives.push(new ArchiveObject("2018",'8'));
    this.archives.push(new ArchiveObject("2015",'3'));
    console.log(this.archives) 
   }

}

class ArchiveObject {
  constructor(public year , public month){   
  
  }
}
