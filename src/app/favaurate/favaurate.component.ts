import { Component, OnInit,Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-favaurate',
  templateUrl: './favaurate.component.html',
  styleUrls: ['./favaurate.component.css']
})

export class FavaurateComponent implements OnInit {

  @Input() active : boolean;
  @Output() change = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  
  setActive(){
    this.change.emit();
  }

}
