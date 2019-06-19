import { Injectable } from '@angular/core';
import { PersistenceModule } from './persistence.module';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: PersistenceModule
})
export class LoginService {

  private loginUrl = 'http://localhost:3000/auth';
  private token : string;

  constructor(private httpClient : HttpClient) { }

  /**
   * Richiede il token di autenticazione
   * lo memorizza, resituisce un observable per gestire
   * i callback  dove occorre
   * @param username
   * @param password
   */
  autentica(username : string, password : string):Observable<boolean>{
    return this.httpClient.post<{success:boolean,token?:string}>(
      this.loginUrl, 
      {name:username,password:password}).pipe(
        map(resp=>{
          if(resp.success){
            this.token = resp.token;
          }
          return resp.success;
        })
      );
  }

  getAuthHeader(){
    return {
      headers : new HttpHeaders({
        Authorization: 'Bearer<'+this.token+'>'
      })
    };
  }

}
