import { MakeJokeComponent } from 'src/app/components/make-joke/make-joke/make-joke.component';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { State } from 'src/app/state.enum';
import { Category } from 'src/app/interface/category';
import categoriesData from 'src/assets/categories.json';
import jokesData from 'src/assets/jokes.json';
import { Joke } from 'src/app/interface/joke';

@Component({
  selector: 'app-remove-joke-btn',
  templateUrl: './remove-joke-btn.component.html',
  styleUrls: ['./remove-joke-btn.component.scss']
})
export class RemoveJokeBtnComponent {

  @Input() categories: Category[] = categoriesData;
  @Input() jokes: Joke[] = jokesData;
  @Input() category: Category | undefined;
  @Input() joke: Joke | undefined;

  @Output() remove = new EventEmitter();
  @Output() open = new EventEmitter();

  public StateEnum = State;
  public Delete = State.Delete;

  constructor() {
  }

  ngOnInit() {}

  OpenDialog() {
    this.open.emit();
  }
  onRemoveJoke() {
    this.remove.emit()
  }
}


