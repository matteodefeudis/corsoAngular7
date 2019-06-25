import { Injectable, ErrorHandler, Injector } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable()
export class LoginErrorHandler implements ErrorHandler {

    constructor(private injector : Injector){}

    handleError(error : HttpErrorResponse){
        const router : Router = this.injector.get(Router);
        switch (error.status){
            case 401:
                router.navigateByUrl('/admin/login');
                break;
            default:
                console.error(error.message);
        } 
    }

}