import { ApiService } from './../api.service';
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class GithubFollowersService extends ApiService  {
    constructor( http : Http){
        super("https://api.github.com/users/mosh-hamedani/followers",http);
    }
}