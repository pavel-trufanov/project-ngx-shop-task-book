import {Component, ChangeDetectionStrategy, OnInit} from '@angular/core';

@Component({
  selector: 'ngx-shop-footer',
  templateUrl: './footer.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterComponent implements OnInit {

  public currentYear: number;

  public author: string;

  ngOnInit(): void {
    this.currentYear = new Date().getFullYear();
    this.author = 'Angular Course';
  }

}
