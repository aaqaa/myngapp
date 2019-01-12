import { UniversalValidator } from './../signup-form/universal.validator';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {

  form = new FormGroup({
    oldPassword : new FormControl('',[Validators.required], UniversalValidator.oldPasswordMatch),
    passwords : new FormGroup({
      newPassword : new FormControl('',[Validators.required]),
      confirmPassword : new FormControl('',[Validators.required])  
    },UniversalValidator.vaildatePwdMatch)
  })
  oldPassword = ()=>{
    return this.form.get('oldPassword');
  }
  
  newPassword = ()=>{
    return this.form.get('passwords.newPassword') as FormControl;
  }
  
  confirmPassword = ()=>{
    return this.form.get('passwords.confirmPassword');
  }
  constructor() { }
  ngOnInit() {
  }
  
  
}