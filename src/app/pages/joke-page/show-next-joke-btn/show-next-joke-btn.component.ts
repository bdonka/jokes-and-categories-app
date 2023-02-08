import categoriesData from 'src/assets/categories.json';
import jokesData from 'src/assets/jokes.json';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Category } from 'src/app/interface/category';
import { Joke } from 'src/app/interface/joke';
import { State } from 'src/app/state.enum';

@Component({
  selector: 'app-show-next-joke-btn',
  templateUrl: './show-next-joke-btn.component.html',
  styleUrls: ['./show-next-joke-btn.component.scss']
})
export class ShowNextJokeBtnComponent implements OnInit{

  @Input() categories: Category[] = categoriesData;
  @Input() jokes: Joke[] = jokesData;
  @Input() category: Category | undefined;
  @Input() joke: Joke | undefined;

  @Output() showNext = new EventEmitter();

  public StateEnum = State;
  public ShowNext = State.ShowNext;

  constructor() {}

  onShowNext() {
    this.showNext.emit();
  }

  ngOnInit(){}
}
