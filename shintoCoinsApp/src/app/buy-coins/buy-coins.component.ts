import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-buy-coins',
  templateUrl: './buy-coins.component.html',
  styleUrls: ['./buy-coins.component.css']
})
export class BuyCoinsComponent implements OnInit {


  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    this.ownedCoins = this._httpService.ownedCoins;
    this.coinValue = this._httpService.coinValue;
  }
  buy(numberOfCoins){
    this._httpService.buy(numberOfCoins)
    this.ngOnInit()

  }
}
