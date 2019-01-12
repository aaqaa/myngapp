import { ErrorHandler } from '@angular/core';

export class CustomErrorHandler extends ErrorHandler{
 handleError(error){
    alert(" An unexpected error occurs ");
    console.log("-------------------")
    console.log(error)
    
 }   
}