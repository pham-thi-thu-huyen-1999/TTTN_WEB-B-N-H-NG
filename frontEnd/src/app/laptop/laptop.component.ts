import { Component, OnInit } from '@angular/core';

import { DataService } from "../service/data.service";
import { laptop, URL_IMG, URL } from '../models/data.class';
import { Url } from 'url';
import { Router } from '@angular/router';
import { map, filter, scan } from 'rxjs/operators';

@Component({
  selector: 'app-laptop',
  templateUrl: './laptop.component.html',
  styleUrls: ['./laptop.component.scss']
})
export class LaptopComponent implements OnInit {
  URL: Url;
  _latop: laptop[];
  dataLaptop;
  // private _searchdetail: string;
  search_f_name: string;
  imageUrl: string = URL_IMG;
  constructor(
    private _dataService: DataService,
    private router: Router
  ) { }
  
  sanpham;
  listSearchProduct: laptop[];
 
 //search
 _search: string;  
 get search(): string {
   return this._search;
 }

 set search(value: string) {
   this._search = value;
   this.listSearchProduct = this.search ? this.sanpham.filter(p => p.phone_name.toLowerCase().includes(this.search) == true) : [];
 }

  searchLaptop(searchString: string) {
    return this._latop.filter(name =>{
      name.phone_name.toLowerCase().indexOf(searchString.toLowerCase()) == -1;
    })
    
  }
  ngOnInit() {
    this._dataService.getAllLaptop().subscribe((d:laptop) => {
      this.dataLaptop = d;
      this.sanpham=d;
      console.log(d)
    })
    this.dataLaptop = this._dataService.getAllLaptop();
    
    
  }

}

