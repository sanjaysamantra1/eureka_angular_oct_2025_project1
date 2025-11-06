import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ordinal'
})
export class OrdinalPipe implements PipeTransform {
  transform(input: any) {
    let rem = input % 10;
    let res = '';

    if (rem === 1) {
      res = `${input}st`
    } else if (rem === 2) {
      res = `${input}nd`
    } else if (rem === 3) {
      res = `${input}rd`
    } else {
      res = `${input}th`
    }

    return res;
  }
}
