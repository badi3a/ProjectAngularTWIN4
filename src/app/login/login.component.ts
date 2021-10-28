import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {UserService} from "../services/user.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  myForm: FormGroup;
  constructor(private serviceUser: UserService, private fb: FormBuilder) { }

  ngOnInit(): void {
    //this.myForm = this.fb.group({
     // 'email': ['',[Validators.required, Validators.minLength(3)]],
      //'psw': ['',Validators.required],
      //'confirmPsw': ['',Validators.required]
    //})
    this.myForm = new FormGroup({
      'email': new FormControl('',[Validators.required, Validators.minLength(3)]),
     'psw': new FormControl('',Validators.required),
      'confirmPsw': new FormControl('',Validators.required)
    })
  }
  login(f: FormGroup): boolean{
    let logIn= false;
    this.serviceUser.list.forEach(
      (user)=>{
      if((user.email===f.controls['email'].value) &&
        (user.password===f.controls['psw'].value)){
        logIn = true;
      }
    })
    console.log(logIn)
    return  logIn
  }

}
