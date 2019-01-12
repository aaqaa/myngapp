import { AppError } from './AppError';

export class  BadRequestError extends AppError{

    constructor(public originalError ?: any){
        super();
        console.log("Original Error : " + originalError);
    }
}