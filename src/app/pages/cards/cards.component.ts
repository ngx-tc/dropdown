import { Component, OnDestroy, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';
import { BasePageComponent } from '../base-page/base-page.component';
import { IAppState } from '../../interfaces/app-state';
import { HttpService } from '../../services/http/http.service';

@Component({
  selector: 'page-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class PageCardsComponent extends BasePageComponent implements OnInit, OnDestroy {
  constructor(
    store: Store<IAppState>,
    httpSv: HttpService
  ) {
    super(store, httpSv);

    this.pageData = {
      title: 'Cards',
      loaded: true,
      breadcrumbs: [
        {
          title: 'Components',
          route: '/'
        },
        {
          title: 'Cards'
        }
      ]
    };
  }

  ngOnInit() {
    super.ngOnInit();
  }

  ngOnDestroy() {
    super.ngOnDestroy();
  }
}
