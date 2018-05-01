import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-mine-coins',
  templateUrl: './mine-coins.component.html',
  styleUrls: ['./mine-coins.component.css']
})
export class MineCoinsComponent implements OnInit {

  constructor(private _httpService: HttpService) { }

  ngOnInit() {
  }

  submit(number) {
   
    this._httpService.submit(number)
  }

}
