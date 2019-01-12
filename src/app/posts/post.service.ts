import { Http } from '@angular/http';
import { ApiService } from './../api.service';
import { Injectable } from '@angular/core';
@Injectable()
export class PostService extends ApiService{

    constructor(http : Http){
        super('http://jsonplaceholder.typicode.com/posts',http);
    }

}