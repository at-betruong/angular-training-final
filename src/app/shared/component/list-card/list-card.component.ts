import { Component, OnInit, OnDestroy, Output, EventEmitter, Input, OnChanges } from '@angular/core';
import { ApiService, END_POINT } from '../../../core/services/api.service';
import { WordLimitPipe } from '../../pipe/word-limit.pipe';
import { LocalerService } from 'src/app/core/services/localer.service';
import { DeactivateDialogService } from 'src/app/core/sevices/deactivate-dialog.service';
import { FavoriteService } from 'src/app/core/services/favorite.service';

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


  @Input() listProduct: any;

  listInfoProduct$: Array<any> =  [];

  constructor(
    private api: ApiService,
    private localer: LocalerService,
    private dialogService: DeactivateDialogService,
    private favorite: FavoriteService
  ) {  }

  ngOnInit() {
    this.api.getAssets(END_POINT.newsJson).subscribe(data => {
      data.man.forEach( item => {
        if (this.listProduct.find( i => i === item.id)) {
          this.listInfoProduct$.push(item);
        }
      });
      data.women.forEach( item => {
        if (this.listProduct.find( i => i === item.id)) {
          this.listInfoProduct$.push(item);
        }
      });
      data.child.forEach( item => {
        if (this.listProduct.find( i => i === item.id)) {
          this.listInfoProduct$.push(item);
        }
      });
      console.log(this.listInfoProduct$);
    });

  }

  ngOnChanges() {
    console.log('change data ' + this.listProduct);
  }

  addFavorite($event) {
    $event.target.classList.toggle('is_animating');
    this.favorite.addFavorite($event);
  }
}
