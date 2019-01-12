import { FormGroup, FormArray, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-course',
  templateUrl: './new-course.component.html',
  styleUrls: ['./new-course.component.css']
})
export class NewCourseComponent implements OnInit {

  constructor(fb : FormBuilder) 
  {
    this.form = fb.group({
      name : ["",Validators.required],
      contact : fb.group({
        email :[],
        form : []
      }),
      topics : fb.array([])
    })

   }

  ngOnInit() {
  }


   form = new FormGroup({
     //this empty array is container for all the topics
      topics : new FormArray([])
     });

     addTopic(topic : HTMLInputElement){
       console.log(topic.value);
      (this.form.get('topics') as FormArray).push(new FormControl(topic.value));
       topic.value =""
     }

     delTopic(topic : FormControl){
      let index = (this.form.get('topics') as FormArray).controls.indexOf(topic);
      (this.form.get('topics') as FormArray).removeAt(index);
    }
}
