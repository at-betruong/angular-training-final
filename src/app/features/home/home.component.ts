import { Component, OnInit, OnDestroy } from '@angular/core';
import { ApiService, END_POINT } from 'src/app/core/services/api.service';
import * as $ from 'jquery';
import { AuthService } from 'src/app/core/services/auth.service';
import { LocalerService } from 'src/app/core/services/localer.service';
// import { Transform } from 'stream';
import { Route, Router, ActivatedRoute } from '@angular/router';
import { FavoriteService } from 'src/app/core/services/favorite.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  sliderHome: any;
  products = [];
  man: any;
  women: any;
  child: any;
  subscribe;
  checkLogin = false;
  id: any;
  objCartList = {user: '', favoriteUser: []};
  idFavorite: any;
  favoriteList: Array<any> = [];
  listProduct$: any;

  constructor(
    private api: ApiService,
    private authService: AuthService,
    private localer: LocalerService,
    private router: Router,
    private route: ActivatedRoute,
    private favorite: FavoriteService) { }

  ngOnInit() {
    this.subscribe = this.api.get(END_POINT.listNews).subscribe();
    this.api.getAssets(END_POINT.newsJson).subscribe(data => {
      this.man = data.man;
      this.women = data.women;
      this.child = data.child;
      data.man.slice(0, 4).forEach( item => {
        this.products.push(item);
      });
      data.women.slice(0, 4).forEach( item => {
        this.products.push(item);
      });
      data.child.slice(0, 4).forEach( item => {
        this.products.push(item);
      });
      // data.women.forEach((item) => {
      //   this.products.push(item);
      // });
      // data.child.forEach((item) => {
      //   this.products.push(item);
      // });

      // tslint:disable-next-line:no-shadowed-variable
      this.route.data.subscribe( item => {
        if (item.page === 'child') {
          this.listProduct$ =  this.child;
        } else if (item.page === 'men') {
          this.listProduct$ =  this.man;
        } else if (item.page === 'women') {
          this.listProduct$ =  this.women;
        } else {
          this.listProduct$ = this.products;
        }

      });

    });

    if (this.authService.isLoggedIn()) {
      this.checkLogin = true;
    }
    // tslint:disable-next-line:only-arrow-functions
    // $(document).ready( function() {
    //   /* when a user clicks, toggle the 'is-animating' class */
    //   $('.heart').on('click touchstart', function() {
    //     // $(this).toggleClass('is_animating');
    //     console.log($(this)[0].id.substr(10));
    //     this.cardList.push($(this)[0].id.substr(10));
    //   });

    //   /*when the animation is over, remove the class*/
    //   $('.heart').on('animationend', function() {
    //     $(this).toggleClass('is_animating');
    //   });
    // });
  }

  addFavorite($event) {
    $event.target.classList.toggle('is_animating');
    this.favorite.addFavorite($event);
  }

  // showColorFavorit(id: any, tag: any) {
  // }

  ngOnDestroy() {
    this.subscribe.unsubscribe();
  }
}
