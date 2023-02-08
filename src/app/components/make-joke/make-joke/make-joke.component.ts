import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { State } from 'src/app/state.enum';

@Component({
  selector: 'app-make-joke',
  templateUrl: './make-joke.component.html',
  styleUrls: ['./make-joke.component.scss']
})
export class MakeJokeComponent {

  selectedValue: string = '';
  newJokeContent: string = '';

  public StateEnum = State;
  public Add = State.Add;
  public AddJoke = State.AddJoke;
  public Cancel = State.Cancel;
  public ChooseCategory = State.ChooseCategory;
  public ContentNewJoke = State.ContentNewJoke;

  constructor(@Inject(MAT_DIALOG_DATA) public data: {categories: any}){}
}
