import {Action} from '@ngrx/store';
import {Class} from '../models/class.model';

export const ADD_CLASS = '[CLASS] Add';
export const REMOVE_CLASS = '[CLASS] Remove';

export class AddClass implements Action {
  readonly type = ADD_CLASS;
  constructor(public payload: Class) {}
}

export class RemoveClass implements  Action {
  readonly  type = REMOVE_CLASS;
  constructor(public payload: number) {}
}

export type Actions = AddClass | RemoveClass;
