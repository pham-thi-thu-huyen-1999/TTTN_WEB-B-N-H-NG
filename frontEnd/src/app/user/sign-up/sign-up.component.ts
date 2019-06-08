import { Component, OnInit } from '@angular/core';
import { DataService } from "../../service/data.service";
import { user } from "../../models/data.class";
import { Router } from "@angular/router";
import { NgForm } from '@angular/forms';
import { UserComponent } from '../user.component';
import { formArrayNameProvider } from '@angular/forms/src/directives/reactive_directives/form_group_name';
import { ToastrService } from "ngx-toastr";
// import {  } from "../../models/data.class";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  _user: user = {
    email: "",
    username: '',
    password: '',
    reapeatPassword: '',
    adddress: ''
  }
  constructor(
    private dataService: DataService,
    private router: Router,
    private toastrService: ToastrService

  ) { }

  ngOnInit() {

  }
  resetForm(form?: NgForm) {
    form.reset();
    this._user = {
      email: "",
      username: '',
      password: '',
      reapeatPassword: '',
      adddress: ''
    }
  }
  onSubmit(form: NgForm) {
    console.log(form.value)
    if (form.value.email === form.value.email) {
      alert('tài khoản đã tồn tại')
    } else {
      if (form.value.password === form.value.reapeatPassword) {
        this.dataService.signupUser(form.value)
          .subscribe((data: any) => {
            this.resetForm(form);
            this.toastrService.success('signup succesful')
            this.router.navigateByUrl('/home')
          }
          )
      }
      else {
        alert("nhap lai pass")
      }
    }

  }
  // login(){
  //   console.log(this.User.email)
  //   this._service.get_User(this.User.email).subscribe((d:user)=>{
  //     if(d==null){
  //       alert("Tài khoản không tồn tại");
  //     }else{
  //       if(this.User.password==d.password){
  //         alert("Đăng nhập thành công");
  //       }else{
  //         alert("Mật khẩu sai");
  //       }
  //     }
  //   })
  // }

  // createUser(email, password, userName){
  //   return this.http.post<user>(`${this.url_user}/`+ {email: email, userName: userName, password: password}).pipe(map)
  // }

}
