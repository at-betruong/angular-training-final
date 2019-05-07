import { Component, OnInit, OnChanges, DoCheck } from '@angular/core';
import { LocalerService } from 'src/app/core/services/localer.service';

@Component({
  selector: 'app-favotite',
  templateUrl: './favotite.component.html',
  styleUrls: ['./favotite.component.scss']
})
export class FavotiteComponent implements OnInit, DoCheck {
  userCurrent: string;
  listFavorite: Array<any> = [];
  objInArrFavorite: any;
  listProduct: any;


  constructor(
    private localer: LocalerService
  ) { }

  ngOnInit() {
    this.userCurrent =  this.localer.getSessionStorage('login');
    if (this.localer.getLocalStorage('favorite')) {
      this.listFavorite = JSON.parse(this.localer.getLocalStorage('favorite'));
      this.objInArrFavorite =  this.listFavorite.find(item => item.user === this.userCurrent);
      this.listProduct = this.objInArrFavorite.favoriteUser;
    }
  }
  ngDoCheck() {
  }

}
