import { Observable } from 'rxjs/Observable';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import 'rxjs/add/observable/combineLatest';
@Component({
  selector: 'app-github-profile',
  templateUrl: './github-profile.component.html',
  styleUrls: ['./github-profile.component.css']
})
export class GithubProfileComponent implements OnInit {

  constructor(private route : ActivatedRoute) { }

  ngOnInit() {
    // this.route.paramMap.subscribe(params =>{
    //   console.log(params);
    //   console.log(params.get('username'))
    // })

   let username =  this.route.snapshot.paramMap.get("username");
   console.log(username)
   
   let page = this.route.snapshot.queryParamMap.get("page");
    console.log(page);

  this.route.queryParamMap.subscribe(res =>{
    console.log(res.get("order"))
  })

  Observable.combineLatest([
    this.route.paramMap,
    this.route.queryParamMap
  ]).subscribe(res =>{
    let username = res[0].get("username");
    let page = res[1].get("page");
    console.log(username +" "+ page);
  })


   
  }


}
