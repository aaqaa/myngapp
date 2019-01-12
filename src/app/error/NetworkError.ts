import { AppError } from './AppError';

export class  NetworkError extends AppError{
    constructor(public originalError ?: any){
        super();
        console.log("Original Error : " + originalError);
    }
}