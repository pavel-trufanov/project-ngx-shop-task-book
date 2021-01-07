import { PipeTransform, Pipe } from '@angular/core';

@Pipe({
  name: 'review',
})
// @ts-ignore
export class ReviewPipe implements PipeTransform {
  public transform(countOfReviews: number | undefined): string {
    countOfReviews = countOfReviews ? countOfReviews : 0;
    const lastDigit = ReviewPipe.getLastDigits(countOfReviews);
    if (lastDigit === 1) {
      return countOfReviews + ' отзыв';
    } else if ([2, 3, 4].includes(lastDigit)) {
      return countOfReviews + ' отзыва';
    } else if (countOfReviews === 0){
      return 'Нет отзывов';
    } else if ([0, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14].includes(lastDigit)) {
      return countOfReviews + ' отзывов';
    }
  }

  private static getLastDigits(value: number): number {
    const toText = value.toString();
    if (toText.length === 1) {
      return +(toText.slice(-1));
    } else {
      const lastDigits = +(toText.slice(-2));
      if ([10, 11, 12, 13, 14].includes(lastDigits)) {
        return lastDigits;
      } else {
        return lastDigits % 10;
      }
    }
  }
}
