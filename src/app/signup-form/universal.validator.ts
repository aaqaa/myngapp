import { Component } from '@angular/core';
import {  AbstractControl, ValidationErrors } from "@angular/forms";
import { Observable } from 'rxjs/Observable';
import { resolve } from 'url';
import { reject } from 'q';

export class UniversalValidator {

    static cannotContainSpace (control : AbstractControl):ValidationErrors |null{
        if((control.value as string).indexOf(' ')>=0){
            return {'cannotContainSpace':true}
        }
        return null;
    }

    static shouldBeUnique(control : AbstractControl): Promise<ValidationErrors | null>{

        return new Promise((resolve, reject)=>{
            setTimeout(()=>{
                if((control.value as String)=="AAQQAA")
                    resolve ({shouldBeUnique : true});
                else
                    resolve(null);
            },5000)
        }) 
    }
    static oldPasswordMatch(control : AbstractControl): Promise<ValidationErrors | null>{
        return new Promise((resolve,reject)=>{
            setTimeout(()=>{
                if((control.value as string) != "1234")
                    resolve({oldPasswordMatch : true});
                else
                    resolve(null);
            },3000)
        })

    }

    static vaildatePwdMatch(control : AbstractControl): ValidationErrors | null{
       console.log(control);
       if(control.value.confirmPassword != control.value.newPassword)
       {
           return {pwdMismatch : true}
       }
       return null;
    }

}