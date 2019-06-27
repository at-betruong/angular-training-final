import { Component, OnInit, Output,  EventEmitter} from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-tooltip',
  templateUrl: './tooltip.component.html',
  styleUrls: ['./tooltip.component.scss']
})
export class TooltipComponent implements OnInit {
  constructor() { }

  visible = true;
  @Output() open = new EventEmitter();
  @Output() close = new EventEmitter();

  // HTTP
  time = new Observable( observer => {
    setInterval(() => observer.next(new Date().toString()), 1000);
  });

  toggle() {
    this.visible = !this.visible;
    if (this.visible) {
      this.open.emit('open');
    } else {
      this.close.emit('close');
    }
  }

  ngOnInit() {
  }

}
