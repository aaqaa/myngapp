import { AppError } from './AppError';

export class  WrongUrlError extends AppError{
   public constructor( originalError ?: any){
        super(originalError);
        console.log("Original Error : " + originalError);
    }
}