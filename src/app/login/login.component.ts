import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ImagesService } from '../images.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm : any = [];

  constructor(private router : Router,private service: ImagesService) { }

  ngOnInit() {
    this.loginForm = new FormGroup({
      email : new FormControl('',[Validators.required]),
      password : new FormControl('',[Validators.required]),
    })
  }

  onSubmit(){
    let email = this.loginForm.controls['email'].value;
    let password = this.loginForm.controls['password'].value;
    if(this.loginForm.valid){
      if(email == "apiuser" && password == "test@apiuser1756"){
        this.service.getLoginURL(email,password).subscribe((res)=>{
          this.router.navigate(['/file-upload']);
        })
      }else{
        alert("Please Enter Correct Username and Password!");
      }
    }else{
      alert("Please Fill the Login Details");
    }
  }



}
