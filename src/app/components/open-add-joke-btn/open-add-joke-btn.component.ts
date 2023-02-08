import categoriesData from 'src/assets/categories.json';
import jokesData from 'src/assets/jokes.json';
import { Component, EventEmitter, Output } from '@angular/core';
import { State } from 'src/app/state.enum';
import { Category } from 'src/app/interface/category';
import { Joke } from 'src/app/interface/joke';

@Component({
  selector: 'app-open-add-joke-btn',
  templateUrl: './open-add-joke-btn.component.html',
  styleUrls: ['./open-add-joke-btn.component.scss']
})
export class OpenAddJokeBtnComponent {

  @Output() open = new EventEmitter();

  categories: Category[] = categoriesData;
  jokes: Joke[] = jokesData;

  public StateEnum = State;
  public Add = State.Add;

  constructor() {
  }

  OpenDialog() {
    this.open.emit();
  }
}
