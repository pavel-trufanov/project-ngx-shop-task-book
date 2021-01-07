import {Component, ChangeDetectionStrategy, Output, EventEmitter, OnInit} from '@angular/core';

@Component({
  selector: 'ngx-shop-header',
  templateUrl: './header.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent implements OnInit {

  public counter;

  @Output()
  public goToBasket = new EventEmitter();

  ngOnInit(): void {
    this.counter = 5;
  }

  public redirectTo() {
    this.goToBasket.emit();
  }

}
