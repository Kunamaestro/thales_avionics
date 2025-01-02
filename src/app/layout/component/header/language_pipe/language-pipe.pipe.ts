import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'languagePipe'
})
export class LanguagePipePipe implements PipeTransform {

  transform(value: string):string{
    return value.match(/[A-Z]/g)?.join('') || '' 
  }

}
