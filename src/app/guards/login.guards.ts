import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRoute, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { LoginService } from '../model/login.service';

@Injectable()
export class LoginGuards implements CanActivate {

    constructor(
        private loginService : LoginService,
        private router : Router
        ){}

    canActivate(route : ActivatedRouteSnapshot, state : RouterStateSnapshot) : boolean {
        if(this.loginService.utenteLoggato()){
            return true;
        }else{
            this.router.navigateByUrl('/admin/login');
            return false;
        }
    }

}