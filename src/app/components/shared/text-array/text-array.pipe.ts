import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'textArray',
})
export class TextArrayPipe implements PipeTransform {
  // transform(value: any, args?: any): any {
  //   return null;
  // }

  transform(value: string[] | undefined): string {
    return value?.filter((v) => v).join(', ') ?? '';
  }
}
