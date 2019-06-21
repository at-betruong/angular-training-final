import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService, END_POINT } from 'src/app/core/services/api.service';
import { FavoriteService } from 'src/app/core/services/favorite.service';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-detail-card',
  templateUrl: './detail-card.component.html',
  styleUrls: ['./detail-card.component.scss']
})
export class DetailCardComponent implements OnInit, OnDestroy {
  id: number;
  sub: any;
  news$: any;
  infoCard: any;
  infoCart1: any;
  relativalCard: any;
  checkLogin = false;
  checkFavorite: any;

  constructor(
    private route: ActivatedRoute,
    private api: ApiService,
    private authService: AuthService,
    private favorite: FavoriteService) {}

  ngOnInit() {
    this.sub = this.route.paramMap.subscribe(params => {
       this.id = +params.get('id'); // (+) converts string 'id' to a number
       console.log('id product:' + this.id);
       // In a real app: dispatch action to load the details here.
    });

    this.api.getAssets(END_POINT.newsJson).subscribe(data => {
      this.infoCard = data.man.find((item) => {
        return item.id === this.id;
      });
      this.infoCart1 = data.women.find((item) => {
        return item.id === this.id;
      });

      if ( this.infoCard ) {
        this.infoCard = data.man.find((item) => {
          return item.id === this.id;
        });
        this.relativalCard =  data.man.filter(item => item.id !== this.id);
      } else if ( this.infoCart1 ) {
        this.infoCard = data.women.find((item) => {
          return item.id === this.id;
        });
        this.relativalCard =  data.women.filter(item => item.id !== this.id);
      } else {
        this.infoCard = data.child.find((item) => {
          return item.id === this.id;
        });
        this.relativalCard =  data.child.filter(item => item.id !== this.id);
      }
    });

    if (this.authService.isLoggedIn()) {
      this.checkLogin = true;
    }

  }

  addFavorite($event) {
    this.favorite.addFavorite($event);
    this.checkFavorite = this.favorite.checkFavorite($event);
    // disactive button when favorited
  }


  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
