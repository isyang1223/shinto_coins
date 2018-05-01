import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()


export class HttpService {
  ownedCoins = 0;
  coinValue = 1;
  ledger = [];



  constructor(private _http: HttpClient) { }
  submit(number){
    if (number == 21) {
      this.coinValue += 
      this.ledger.push({"id": Math.floor(Math.random() * 9999) + 1, "action" : "Mined", "amount" : 1, "value" : this.coinValue})
      for (var i = 0; i < this.ledger.length; i++) {
        console.log(this.ledger[i])
      }
    }
  }

  buy(numberOfCoins){
    this.ownedCoins += Number(numberOfCoins);
    this.coinValue += Number(numberOfCoins);
    this.ledger.push({ "id": Math.floor(Math.random() * 9999) + 1, "action": "Bought", "amount": numberOfCoins, "value": this.coinValue })
    for ( var i = 0; i < this.ledger.length; i++){
      console.log(this.ledger[i])
    }
    
  }

  sell(numberOfCoins) {
    this.ownedCoins -= Number(numberOfCoins);
    this.coinValue -= Number(numberOfCoins);
    this.ledger.push({ "id": Math.floor(Math.random() * 9999) + 1, "action": "Sold", "amount": numberOfCoins, "value": this.coinValue })
    for (var i = 0; i < this.ledger.length; i++) {
      console.log(this.ledger[i])
    }

  }


}
