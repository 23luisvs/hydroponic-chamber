import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _isAuthenticated = new BehaviorSubject<boolean>(false);
  constructor() { }
  get isAuthenticated() {
    return this._isAuthenticated;
  }
  login() {
    this._isAuthenticated.next(true);
    console.log("Login", this._isAuthenticated.value);

  }
  logout() {
    this._isAuthenticated.next(false);
    console.log("Logout",  this._isAuthenticated.value);
  }
}
