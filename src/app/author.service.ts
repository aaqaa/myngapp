import { Injectable } from '@angular/core';

@Injectable()
export class AuthorService {
  constructor() { }

  getAuthors(){
    return ['Asheer','Basheer','Naushad','Saman'];
  }
}
