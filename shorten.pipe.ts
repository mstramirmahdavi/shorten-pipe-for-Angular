import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shorten'
})
export class ShortenPipe implements PipeTransform {
  transform(value: any, args?: any): any {
    // if your string length is bigger than args this pipe shorten your string and add (...) at the end of string
    if (value.length > args) {
      return value.substr(0, args) + ' ...';
    }
    return value;
  }
}
