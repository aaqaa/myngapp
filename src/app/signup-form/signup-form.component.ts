import { UniversalValidator } from './universal.validator';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent  {


  form = new FormGroup({
   
   account : new FormGroup({
     
    username : new FormControl('',[Validators.required,Validators.minLength(3)], UniversalValidator.shouldBeUnique),
    password : new FormControl('', UniversalValidator.cannotContainSpace)  
   })
     
  });
  
  username = ()=>{
    return this.form.get('account.username');
  }
  password = ()=>{
    return this.form.get('account.password');   
  }

  login(){
    this.form.setErrors({
      inValidForm : true
    })
  }

}
