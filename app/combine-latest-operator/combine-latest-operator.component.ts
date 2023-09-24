import { Component, OnInit } from '@angular/core';
import { combineLatest } from 'rxjs/observable/combineLatest';

import {
  getSingleValueObservable,
  getDelayedValueObservable,
  getMultiValueObservable
} from './../util';

@Component({
  selector: 'app-combine-latest-operator',
  templateUrl: './combine-latest-operator.component.html'
})
export class CombineLatestOperatorComponent {
  show = false;
  values$ = combineLatest(
    getSingleValueObservable(),
    getDelayedValueObservable(),
    getMultiValueObservable(),
    (first, second, third) => { 
      return { first, second, third };
    }
  );
}