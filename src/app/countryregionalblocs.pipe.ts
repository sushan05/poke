import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cntyregionalblocs'
})
export class CountryregionalblocsPipe implements PipeTransform {

  transform(value: any[], ...args: any[]): any {
    let regionalBlocsNames = '';
    const displayFormat: string = args[0];

    if(!value.length) {
      return null;
    }

    value.forEach(data => {
      let displayValue = '';

      if (displayFormat === 'short' || !displayFormat) {
        displayValue = data['acronym'];
      } else if (displayFormat === 'long') {
        displayValue = data['name'];
      }

      regionalBlocsNames += displayValue + ', ';
    });

    return regionalBlocsNames.trim().replace(/(^,)|(,$)/g, "");
  }

}
