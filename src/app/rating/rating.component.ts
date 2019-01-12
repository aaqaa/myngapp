import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnInit {
  ratingNumber;
  constructor() { }

  ngOnInit() {
  }
  setRating(ratingNumber){
    this.ratingNumber = ratingNumber;
  }
}
