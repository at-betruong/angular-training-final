import { Injectable } from '@angular/core';
import { CookieService } from './cookie.service';

@Injectable({
  providedIn: 'root'
})
export class LocalerService {

  constructor(private cookieService: CookieService) { }

  saveLocalStorage(key: string, value: any) {
    if (typeof value === 'object' ) {
      return localStorage.setItem(key, JSON.stringify(value));
    }
    return localStorage.setItem(key, value);
  }
  getLocalStorage(key: string) {
    if (typeof localStorage.getItem(key) === 'string') {
      return localStorage.getItem(key);
    }
    return JSON.parse(localStorage.getItem(key));
  }
  removeLocalStorage(key: string) {
    return localStorage.removeItem(key);
  }
  saveSessionStorage(key: string, value: any, exdays: any) {
    if (typeof value === 'object' ) {
      return this.cookieService.setCookie(key, JSON.stringify(value), exdays);
    }
    return this.cookieService.setCookie(key, value, exdays);
  }
  getSessionStorage(key: string) {
    if (typeof this.cookieService.getCookie(key) === 'object') {
      return JSON.stringify(this.cookieService.getCookie(key));
    }
    return this.cookieService.getCookie(key);
  }
}
