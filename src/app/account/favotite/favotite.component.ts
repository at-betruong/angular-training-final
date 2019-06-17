import { Component, OnInit} from '@angular/core';
import { LocalerService } from 'src/app/core/services/localer.service';
import { ApiService, END_POINT } from 'src/app/core/services/api.service';
import { DeactivateDialogService } from 'src/app/core/sevices/deactivate-dialog.service';
import { FavoriteService } from 'src/app/core/services/favorite.service';

@Component({
  selector: 'app-favotite',
  templateUrl: './favotite.component.html',
  styleUrls: ['./favotite.component.scss']
})
export class FavotiteComponent implements OnInit {
  userCurrent: string;
  listFavorite: Array<any> = [];
  objInArrFavorite: any;
  listProduct: any;
  infoFavorite$: Array<any> = [];

  constructor(
    private localer: LocalerService,
    private api: ApiService,
    private dialogService: DeactivateDialogService,
    private favorite: FavoriteService,
  ) { }

  ngOnInit() {
    this.userCurrent =  this.localer.getSessionStorage('login');
    if (this.localer.getLocalStorage('favorite')) {
      this.listFavorite = JSON.parse(this.localer.getLocalStorage('favorite'));
      this.objInArrFavorite =  this.listFavorite.find(item => item.user === this.userCurrent);
      this.listProduct = this.objInArrFavorite.favoriteUser;
      console.log(typeof(this.listProduct), this.listProduct);
    }

    // favorite list
    this.api.getAssets(END_POINT.newsJson).subscribe(data => {
      data.man.forEach( item => {
        if (this.listProduct.find( i => i === item.id)) {
          this.infoFavorite$.push(item);
        }
      });
      data.women.forEach( item => {
        if (this.listProduct.find( i => i === item.id)) {
          this.infoFavorite$.push(item);
        }
      });
      data.child.forEach( item => {
        if (this.listProduct.find( i => i === item.id)) {
          this.infoFavorite$.push(item);
        }
      });
      console.log(this.infoFavorite$);
    });
  }
  removeFavorite($event) {
    this.favorite.removeFavorite($event);
    this.infoFavorite$ = this.infoFavorite$.filter(item => item.id !== Number($event.target.id.substr(10)));
  }
}
