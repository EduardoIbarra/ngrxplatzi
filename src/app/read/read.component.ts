import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Class} from '../models/class.model';
import {AppState} from '../app.state';
import {Store} from '@ngrx/store';
import * as ClassActions from '../actions/class.action';
@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css']
})
export class ReadComponent implements OnInit {
  classes: Observable<Class[]>;
  constructor(private store: Store<AppState>) {
    this.classes = store.select('class');
  }

  delClass(index) {
    this.store.dispatch(new ClassActions.RemoveClass(index));
  }
  ngOnInit() {
  }

}
