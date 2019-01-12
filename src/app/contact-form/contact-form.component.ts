import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {

  constructor() { }
  contactMethod = [
    {id:1,
      value:"mobile"},
      {id:2,value:"email"},
      {id:3,value:"phone"},{id:4,value:"mail"}

    ];

  ngOnInit() {
  }
  log(name){
    console.log(name)
  }
  submit(f){
    console.log(f)
  }
}
