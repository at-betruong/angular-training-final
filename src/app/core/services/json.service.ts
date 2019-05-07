import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JsonService {

  constructor() { }

  saveText(text, filename) {
    let a = document.createElement('a');
    a.setAttribute('href', 'data:text/plain;charset=utf-u,' + encodeURIComponent(text));
    a.setAttribute('save', filename);
    a.setAttribute('download', filename);
    a.click();
  }
}
