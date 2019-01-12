import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';
import { BadRequestError } from './error/BadRequestError';
import { NetworkError } from './error/NetworkError';
import { WrongUrlError } from './error/WrongUrlError';

@Injectable()
export class ApiService {

  constructor(private url : string ,private http : Http) {}

  getAll(){
    return  this.http.get(this.url)
                .map(res => res.json())
                .catch(this.handleError);
  } 

  create(input : HTMLInputElement){
    let post = {title : input.value};
   return this.http.post(this.url,JSON.stringify(post))
              .map(res => res.json())
              .catch(this.handleError);;
  }

  update(post){
  return this.http.patch(this.url+'/'+post.id,JSON.stringify({isRead : true}))
                  .map(res => res.json())
                  .catch(this.handleError);
  }

  delete(post){ 
  return  this.http.delete(this.url +'/'+post.id)
                   .map(res => res.json())
                   .catch(this.handleError);
  }

  private handleError(error : Response){
    console.log(error.json())
    if(error.status == 404)
      return Observable.throw(new BadRequestError());
    else if(error.status == 400)
      return Observable.throw(new NetworkError());
      else if(error.status === 0)
    return Observable.throw(new WrongUrlError(error));
  }

}
