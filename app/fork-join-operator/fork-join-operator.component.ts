import { Component, OnInit } from '@angular/core';
import { forkJoin } from 'rxjs/observable/forkJoin';

import {
  getSingleValueObservable,
  getDelayedValueObservable,
  getMultiValueObservable
} from './../util';

@Component({
  selector: 'app-fork-join-operator',
  templateUrl: './fork-join-operator.component.html'
})
export class ForkJoinOperatorComponent {
  show = false;
  values$ = forkJoin(
    getSingleValueObservable(),
    getDelayedValueObservable(),
    // getMultiValueObservable(), forkJoin on works for observables that complete
    (first, second) => { 
      return { first, second };
    }
  );
}