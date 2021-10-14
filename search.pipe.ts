import { Pipe, PipeTransform } from '@angular/core';

/**
 * Usage 
 * 
 * <div *ngFor="let item of items | search:'id,text':valueToSearch">{{item.text}}</div>
 */
@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(values: Array<any>, keys: string, term: string) {
    if (!term) {
      return values;
    }

    if (!values || !values.length) {
      return values;
    }

    if(!keys || typeof values[0] == 'string') {
      return values.filter(value => new RegExp(term, 'gi').test(value));
    }

    return (values || []).filter(item => keys.split(',').some(key => item.hasOwnProperty(key) && new RegExp(term, 'gi').test(item[key])));

  }

}
