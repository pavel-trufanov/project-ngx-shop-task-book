import { Component } from '@angular/core';
import { IProduct, oneProduct } from '../../../../shared/mocks/2-pipes/product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  public title = '2. Pipes';
  public product: IProduct = oneProduct;

  public terminalMessage: string;
  public goToProduct() {
    this.terminalMessage = 'Переход на компонент продукта';
  }
}
