import categoriesData from 'src/assets/categories.json';
import jokesData from 'src/assets/jokes.json';
import { Component, Input, OnInit } from '@angular/core';
import { State } from 'src/app/state.enum';
import { Joke } from 'src/app/interface/joke';
import { Category } from 'src/app/interface/category';

@Component({
  selector: 'app-confirmation-remove-joke',
  templateUrl: './confirmation-remove-joke.component.html',
  styleUrls: ['./confirmation-remove-joke.component.scss']
})
export class ConfirmationRemoveJokeComponent implements OnInit{

  @Input() categories: Category[] = categoriesData;
  @Input() jokes: Joke[] = jokesData;

  public StateEnum = State;
  public Confirmation = State.Confirmation;
  public No = State.No;
  public Question = State.Question;
  public Yes = State.Yes;

  constructor() {}

  ngOnInit() {}

  onRemoveJoke(index: number) {
    if (index !== -1) {
      this.jokes.splice(index, 1);
    }
    console.log('dupa')
  }

}
