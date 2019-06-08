import { Component, OnInit } from '@angular/core';
import { phone, URL_IMG } from '../models/data.class';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-phone',
  templateUrl: './phone.component.html',
  styleUrls: ['./phone.component.scss']
})

export class PhoneComponent implements OnInit {
  data;
  imageUrl: string = URL_IMG;
  constructor(
    private _connectAPI: DataService
  ) {};
  _getAllPhone() {
    this._connectAPI.getAllPhone().subscribe((d: phone) => {
      this.data = d;
    });
  }
  ngOnInit() {
    this._getAllPhone();
  }
}
