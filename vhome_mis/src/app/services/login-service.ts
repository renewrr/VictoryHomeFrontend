import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root',
})
export class LoginService {
  http = inject(HttpClient);
  async login_without_totp(account: string, password: string) {
    // await delay(1000)
    const url = environment.apiURL + 'login'
    const formData = new FormData();
    formData.append('account', account)
    formData.append('password', password)
    return this.http.post(url, formData, {observe: 'response',  withCredentials: true})
  }
  async login_with_totp(account: string, password: string, totp: string){
    // await delay(1000)
    const url = environment.apiURL + 'login'
    const formData = new FormData();
    formData.append('account', account)
    formData.append('password', password)
    formData.append('totp', totp)
    return this.http.post(url, formData, {observe: 'response',  withCredentials: true})
  }
  logout(){
    const url = environment.apiURL + 'logout'
    var status = 401
    const formData = new FormData();
    this.http.post(url, formData, {observe: 'response',  withCredentials: true}).subscribe(response => {status = response.status})
    return status == 200
  }
  async check_login(): Promise<Boolean>{
    const url = environment.apiURL + 'check_login'
    const status = (await lastValueFrom(this.http.get(url, {observe: 'response',  withCredentials: true}))).status
    return status == 200
  }
}
