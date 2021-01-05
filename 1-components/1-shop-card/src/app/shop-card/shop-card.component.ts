import {Component, EventEmitter, Input, Output} from '@angular/core';
import {ICartProduct} from '../../../../../shared/mocks/1-components/cart-product';

@Component({
  selector: 'app-shop-card',
  templateUrl: './shop-card.component.html',
})

export class ShopCardComponent {

  @Input()
  public product: ICartProduct;

  @Output()
  public increment = new EventEmitter();

  @Output()
  public decrement = new EventEmitter();

  public incrementProductInCart() {
    this.increment.emit();
  }

  public decrementProductInCart() {
    this.decrement.emit();
  }

}
