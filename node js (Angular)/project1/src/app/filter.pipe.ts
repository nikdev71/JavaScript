import { Pipe, PipeTransform } from '@angular/core';
import { ifError } from 'assert';
import { retry } from 'rxjs';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(arr: any, searchStr:string, field:string): any {
    if(arr.length===0 || searchStr ==='') return arr;

    return arr.filter((item:any)=>
    item[field].toLowerCase().indexOf(searchStr.toLocaleLowerCase()) !== -1)
  }

}
