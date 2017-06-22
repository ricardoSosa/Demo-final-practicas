import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'generalFilter',
    pure: false
})
export class GeneralFilter implements PipeTransform {
    transform(items: any[], filter: string): any {
        if (filter) {
            filter = filter.toLowerCase();
            return items.filter(item => item.name.toLowerCase().indexOf(filter) > -1);
        }
        return items;
    }
}