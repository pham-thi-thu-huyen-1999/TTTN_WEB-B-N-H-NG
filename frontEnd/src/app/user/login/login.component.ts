import { Component, OnInit } from '@angular/core';
//import router
import { Router } from "@angular/router";
import { DataService } from "../../service/data.service";
import { user } from '../../models/data.class';
import { HttpHeaders, HttpHeaderResponse } from '@angular/common/http';
import { checkAndUpdateElementDynamic } from '@angular/core/src/view/element';
import { NgForm } from "@angular/forms";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  _user: user;
  // email:String;
  constructor(private router: Router, private _service: DataService) { }

  islist: boolean = false;
  ngOnInit() {
    this._user = new user();
  }
  onSubmit(form: NgForm) {

  }
  login() {
    // this._service.get_User(this._user.email).subscribe((d: user) => {
    //   if (d != null) {
    //     if (this._user.password == d.password) {
    //       alert("dang nhap thanh cong");
    //       localStorage.setItem('personalUser', d._id);
    //       this.router.navigate(['/home']);
    //     } else {
    //       alert("Mat khau bi sai !");
    //     }
    //   } else { 
    //     alert("tai khoan khong ton tai !");
    //     // localStorage.setItem('');
    //     this.router.navigate(['/sign-up'])
    //   }

    // })
  }




}
