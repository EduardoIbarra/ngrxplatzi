import { Component, OnInit } from '@angular/core';
import {AppState} from '../app.state';
import {Store} from '@ngrx/store';
import * as ClassActions from '../actions/class.action';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  constructor(private store: Store<AppState>) { }

  addClass(name, url) {
    this.store.dispatch(new ClassActions.AddClass({name: name, url: url}));
  }

  ngOnInit() {
  }

}
