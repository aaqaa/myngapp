import { Directive, HostListener, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appNameFormat]'
})
export class NameFormatDirective {
  
  @Input('case') case : string;
  constructor(private el : ElementRef) { }
  @HostListener('blur') onBlur(){
    if(this.case == "L")
    this.el.nativeElement.value = this.el.nativeElement.value.toLowerCase()
    else
    this.el.nativeElement.value = this.el.nativeElement.value.toUpperCase()

  } 

  

}
