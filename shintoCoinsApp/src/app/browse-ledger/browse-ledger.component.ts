import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-browse-ledger',
  templateUrl: './browse-ledger.component.html',
  styleUrls: ['./browse-ledger.component.css']
})
export class BrowseLedgerComponent implements OnInit {


  constructor(private _httpService: HttpService) { }


  ngOnInit() {
    this.ledger = this._httpService.ledger
  }
  showDetails(x, i){
    this.i = i + 1;
    this.transaction = x;
  }

}
