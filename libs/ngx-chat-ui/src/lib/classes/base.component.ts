import { OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AutoUnsubscribe } from 'ngx-auto-unsubscribe';

@AutoUnsubscribe()
export class BaseComponent implements OnInit, OnDestroy {
  protected subscriptions: Subscription[] = [];

  ngOnInit() {
    this.init();
  }

  ngOnDestroy() {
    this.subscriptions
      .forEach(subscription => subscription.unsubscribe());
    this.destroy();
  }

  init() {
  }

  destroy() {
  }
}
