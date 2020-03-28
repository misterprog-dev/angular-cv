import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {

  private urluser = 'http://localhost:3000/api/Users/login';

  constructor(private httpClient: HttpClient) { }

  login(credential) {
    return this.httpClient.post(this.urluser, credential);
  }

  logout() {
    localStorage.removeItem('token');
  }
}
