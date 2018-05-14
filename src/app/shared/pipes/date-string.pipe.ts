import { Pipe, PipeTransform } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { getTimeStringFromDate, getFormattedDate } from '@app/utils';

@Pipe({ name: 'dateToTimeString' })
export class DateToTimeStringPipe implements PipeTransform {
  transform(value: Date): string {
    console.log(value);
    return getTimeStringFromDate(value);
  }
}

