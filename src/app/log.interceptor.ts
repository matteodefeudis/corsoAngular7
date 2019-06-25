import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';
import { environment } from 'src/environments/environment';

export class LogInterceptor implements HttpInterceptor{

    intercept(req : HttpRequest<any>, next : HttpHandler){
        if(!environment.production){
            console.log(new Date(),req.url,req.method,req.body);
            return next.handle(req);
        }
    }   

}