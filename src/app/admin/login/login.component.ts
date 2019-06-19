import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/model/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user : string;
  pass : string;
  messaggio : string;

  constructor(
    private loginService : LoginService,
    private router : Router
    ) { }


  ngOnInit() {
  }

  accedi() {
    this.loginService.autentica(this.user,this.pass)
    .subscribe((res)=>{
      if(res){
        //login avvenuto
        this.router.navigateByUrl('/admin/main');
      }else{
        //credenziali errate
        this.messaggio = 'Credenziali errate!';
      }
    });
  }

}
