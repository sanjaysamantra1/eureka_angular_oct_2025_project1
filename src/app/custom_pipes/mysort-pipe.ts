import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mysort',
  pure:false
})
export class MysortPipe implements PipeTransform {

  transform(arr: any) {
    console.log('my sort pipe')
    return arr.sort((a:any, b:any) => a - b);
  }

}
