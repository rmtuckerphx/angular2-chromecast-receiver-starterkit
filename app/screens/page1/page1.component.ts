// import {Injectable} from 'angular2/core';
import { Component } from 'angular2/core';
import { RouteParams } from 'angular2/router';

@Component({
  selector: 'screen-page1',
  templateUrl: 'app/screens/page1/page1.component.html'
})
export class Page1Component {
  message: string;

  constructor(params: RouteParams) {
    this.message = params.get('message');
  }
}
