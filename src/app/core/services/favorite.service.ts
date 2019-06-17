import { Injectable } from '@angular/core';
import { LocalerService } from './localer.service';

@Injectable({
  providedIn: 'root'
})
export class FavoriteService {
  id: any;
  objCartList = {user: '', favoriteUser: []};
  idFavorite: any;
  favoriteList: Array<any> = [];

  constructor(private localer: LocalerService) { }

  addFavorite($event) {
    this.idFavorite = -1;
    // get id of useLogin current
    if (this.localer.getLocalStorage('favorite')) {
      this.favoriteList = JSON.parse(this.localer.getLocalStorage('favorite'));
    }
    if (this.favoriteList) {
      this.idFavorite = this.favoriteList.findIndex(item => item.user === this.localer.getSessionStorage('login'));
    }
    if (this.idFavorite === -1) {
      this.objCartList.user = (this.localer.getSessionStorage('login'));
      this.objCartList.favoriteUser.push( Number($event.target.id.substr(10)) );
      this.favoriteList.push(this.objCartList);
      this.localer.saveLocalStorage('favorite', this.favoriteList);
    } else {
      // show color red for item selected
      this.objCartList = this.favoriteList[this.idFavorite];
      if (!this.objCartList.favoriteUser.includes( Number($event.target.id.substr(10)))) {
        this.favoriteList[this.idFavorite].favoriteUser.push(Number($event.target.id.substr(10)));
        this.localer.saveLocalStorage('favorite', this.favoriteList);
        $event.target.classList.toggle('favorite');
      } else {
        // nếu product đã tồn tại trong danh sách yêu thích thì xoá
        if (confirm('Do you want to give up your favorite?')) {
          // tslint:disable-next-line:max-line-length
          this.favoriteList[this.idFavorite].favoriteUser = this.favoriteList[this.idFavorite].favoriteUser.filter( item => item !== Number($event.target.id.substr(10)));
          this.localer.saveLocalStorage('favorite', this.favoriteList);
          $event.target.classList.remove('favorite');
        }
      }
    }
  }

  removeFavorite($event) {
    if (confirm('Do you want to give up your favorite?')) {
      if (this.localer.getLocalStorage('favorite')) {
        this.favoriteList = JSON.parse(this.localer.getLocalStorage('favorite'));
      }
      if (this.favoriteList) {
        this.idFavorite = this.favoriteList.findIndex(item => item.user === this.localer.getSessionStorage('login'));
      }
      // tslint:disable-next-line:max-line-length
      this.favoriteList[this.idFavorite].favoriteUser = this.favoriteList[this.idFavorite].favoriteUser.filter( item => item !== Number($event.target.id.substr(10)));
      this.localer.saveLocalStorage('favorite', this.favoriteList);
      $event.target.classList.remove('favorite');
    }
  }

}
