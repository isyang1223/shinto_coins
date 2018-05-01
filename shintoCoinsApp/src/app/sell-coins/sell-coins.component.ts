import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-sell-coins',
  templateUrl: './sell-coins.component.html',
  styleUrls: ['./sell-coins.component.css']
})
export class SellCoinsComponent implements OnInit {

  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    this.ownedCoins = this._httpService.ownedCoins;
    this.coinValue = this._httpService.coinValue;
  }
  sell(numberOfCoins) {
    if((Number(numberOfCoins) <= this.ownedCoins && this.ownedCoins > 0) && (Number(numberOfCoins) > 0) {
      this._httpService.sell(numberOfCoins)
      this.ngOnInit()
    }
  }
}
