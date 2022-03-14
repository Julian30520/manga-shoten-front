import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-button-tome',
  templateUrl: './button-tome.component.html',
  styleUrls: ['./button-tome.component.scss'],
  animations: [
    trigger('animateText', [
      state(
        'ready_text',
        style({
          opacity: 1,
        })
      ),
      state(
        'active_text',
        style({
          opacity: 0,
        })
      ),
      transition('ready_text => active_text', animate('100ms linear')),
      transition('active_text => ready_text', animate('100ms 100ms linear')),
    ]),
    trigger('hideText', [
      state(
        'ready_text',
        style({
          display: 'inline',
        })
      ),
      state(
        'active_text',
        style({
          display: 'none',
        })
      ),
      transition('ready_text => active_text', animate('0ms 400ms linear')),
      transition('active_text => ready_text', animate('0ms linear')),
    ]),
    trigger('animateCheck', [
      state(
        'ready_check',
        style({
          opacity: 0,
        })
      ),
      state(
        'active_check',
        style({
          opacity: 1,
        })
      ),
      transition('ready_check => active_check', animate('100ms 450ms linear')),
      transition('ready_check => active_check', animate('100ms linear')),
    ]),
    trigger('hideCheck', [
      state(
        'ready_check',
        style({
          display: 'none',
        })
      ),
      state(
        'active_check',
        style({
          display: 'inline',
        })
      ),
      transition('ready_check => active_check', animate('100ms 420ms linear')),
    ]),
  ],
})
export class ButtonTomeComponent {
  itemStates: { Id: string; state: string }[] = [{ Id: '1', state: 'ready' }];

  addToCart(ItemId: string): void {
    this.itemStates.find((i) => i.Id === ItemId).state = 'active';

    setTimeout(() => {
      this.itemStates.find((i) => i.Id === ItemId).state = 'ready';
    }, 1800);
  }
  
  getItemState(ItemId: string): string {
    return this.itemStates.find((i) => i.Id === ItemId).state;
  }
}
