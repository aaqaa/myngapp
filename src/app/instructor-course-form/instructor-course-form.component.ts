import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
@Component({
  selector: 'app-instructor-course-form',
  templateUrl: './instructor-course-form.component.html',
  styleUrls: ['./instructor-course-form.component.css']
})
export class InstructorCourseFormComponent implements OnInit {
  link="https://www.youtube.com/embed/BBif2s1SS1U"
  constructor(public sanitizer : DomSanitizer) { }
 category=['hi','mat']
  ngOnInit() {
    }
    
    submit(f){
      console.log(f)
    }
    log(a)
    {
     let  b =this.sanitizer.bypassSecurityTrustResourceUrl(this.link);
    console.log(b)
      
    }
    getLink(){
      let  b =this.sanitizer.bypassSecurityTrustResourceUrl(this.link);
      console.log(b)
      return b    
    }
    
}
