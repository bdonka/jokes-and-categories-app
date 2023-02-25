import categoriesData from 'src/assets/categories.json';
import jokesData from 'src/assets/jokes.json';
import { Component, Inject, Input, OnInit } from '@angular/core';
import { State } from 'src/app/state.enum';
import { Joke } from 'src/app/interface/joke';
import { Category } from 'src/app/interface/category';
import { DIALOG_DATA } from '@angular/cdk/dialog';
import { NewDataService } from 'src/app/service/new-data';

@Component({
  selector: 'app-confirmation-remove-joke',
  templateUrl: './confirmation-remove-joke.component.html',
  styleUrls: ['./confirmation-remove-joke.component.scss']
})
export class ConfirmationRemoveJokeComponent implements OnInit{
  public StateEnum = State;
  public Confirmation = State.Confirmation;
  public No = State.No;
  public Question = State.Question;
  public Yes = State.Yes;

  display = false;

  joke: Joke;

  constructor(@Inject(DIALOG_DATA) public data: any, private newDataService: NewDataService) {
    this.joke = data.joke
  }

  ngOnInit() {}

  onRemoveJoke() {
    this.newDataService.removeJoke(this.joke.id)
  }

  onPress() {
    this.display = true;
  }
}
