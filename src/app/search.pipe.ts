import { Pipe, PipeTransform } from '@angular/core';

import { Hero } from './hero';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value: Hero[], args?: string): any {
    if (value === undefined) return;
    return value.filter(item => item.name.startsWith(args));
  }

}
