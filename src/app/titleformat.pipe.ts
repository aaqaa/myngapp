import {Pipe, PipeTransform} from '@angular/core';

@Pipe({

 name:"toTitle"

})
export class TitlePipe implements PipeTransform {
    transform(value: string, ...args: any[]) {
        if(!value)
        return ""

        let words =  value.split(' ');
    
        let str : string;
        str =""
        words.forEach(element => {
            console.log(element)
            if((element == 'of' || element == 'the')){
                str =  str.concat(element.toLowerCase()+" ")      
            }
            else{
          
              str =   str.concat(element.substr(0,1).toUpperCase()+(element.substring(1)).toLowerCase()+" ");
          
            }

        });
        
        return str;

    }
}