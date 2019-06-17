import { Component, OnInit, OnDestroy, Output, EventEmitter, Input, OnChanges } from '@angular/core';
import { ApiService, END_POINT } from '../../../core/services/api.service';
import { LocalerService } from 'src/app/core/services/localer.service';
import { DeactivateDialogService } from 'src/app/core/sevices/deactivate-dialog.service';
import { FavoriteService } from 'src/app/core/services/favorite.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';


@Component({
  selector: 'app-list-card',
  templateUrl: './list-card.component.html',
  styleUrls: ['./list-card.component.scss']
})
export class ListCardComponent implements OnInit, OnChanges {
  subscribe;
  id: any;
  objCartList = {user: '', favoriteUser: []};
  idFavorite: any; // STT của user hiện tại trong DS favorite.
  favoriteList: Array<any> = [];
  login = false;

  @Input() listProduct: any;
  @Input() namePage: any;
  @Input() listInfoProduct$: Array<any> =  [];
  @Input() limit: any;

  // listInfoProduct$: Array<any> =  [];

  constructor(
    private authService: AuthService,
    private api: ApiService,
    private localer: LocalerService,
    private dialogService: DeactivateDialogService,
    private favorite: FavoriteService,
    private router: Router,
  ) {
    if (this.listInfoProduct$.length === 0) {
        this.namePage = this.router.url.split(/[/]/)[1];
        this.api.getAssets(END_POINT.newsJson).subscribe(data => {
          if (this.namePage === 'men') {
            this.listInfoProduct$ = data.man;
            this.showLiked(this.listInfoProduct$);
            this.namePage = 'Men';
          } else if (this.namePage === 'women') {
            this.listInfoProduct$ = data.women;
            this.showLiked(this.listInfoProduct$);
            this.namePage = 'Women';
          } else if (this.namePage === 'child') {
            this.listInfoProduct$ = data.child;
            this.showLiked(this.listInfoProduct$);
            this.namePage = 'Children';
          }
        });
    }
  }

  ngOnChanges() {
    if (this.listInfoProduct$ && this.limit) {
      this.listInfoProduct$ = this.listInfoProduct$.splice(0, this.limit);
    }

    this.showLiked(this.listInfoProduct$);
  }

  ngOnInit() {
    this.getListIdFavorite();
  }

  addFavorite($event) {
    $event.target.classList.toggle('is_animating');
    this.favorite.addFavorite($event);
  }

  getListIdFavorite() {
    // 1.1favorite - check showed heart or check login
    if (this.authService.isLoggedIn()) {
      this.login = true;
      const user = this.localer.getSessionStorage('login');
      // get id
      if ( typeof this.localer.getLocalStorage('favorite') === 'string') {
        this.objCartList =  JSON.parse(this.localer.getLocalStorage('favorite')).find(item => item.user ===  user);
        this.favoriteList =  this.objCartList.favoriteUser;
      }
    }
  }
  showLiked(listProduct) {
    // 1.2favorite - compare
    if ( typeof listProduct === 'object') {
      listProduct.forEach( (item) => {
        item.isLike = false;
        if (this.favoriteList.includes(item.id)) {
          item.isLike = true;
        }
      });
    }
  }
}
