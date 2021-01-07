import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'rate',
})
// @ts-ignore
export class RatePipe implements PipeTransform {
  public transform(value: number): number | undefined {
    const decimal = value - Math.floor(value);
    const integer = Math.floor(value);
    if (decimal > 0 && decimal < 0.25) {
      return integer;
    } else if (decimal >= 0.25 && decimal < 0.75) {
      return integer + 0.5;
    } else {
      return integer + 1;
    }
  }
}
