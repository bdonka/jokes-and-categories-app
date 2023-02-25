import { NewDataService } from './../../../service/new-data';
import categoriesData from 'src/assets/categories.json';
import jokesData from 'src/assets/jokes.json';
import { Component, Inject, Input } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Category } from 'src/app/interface/category';
import { Joke } from 'src/app/interface/joke';
import { State } from 'src/app/state.enum';

function broofa() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = Math.random()*16|0, v = c == 'x' ? r : (r&0x3|0x8);
      return v.toString(16);
  });
}


@Component({
  selector: 'app-make-joke',
  templateUrl: './make-joke.component.html',
  styleUrls: ['./make-joke.component.scss']
})
export class MakeJokeComponent {

  @Input() categories: Category[] = categoriesData;
  @Input() jokes: Joke[] = jokesData;
  @Input() category: Category | undefined;
  @Input() joke: Joke | undefined;

  categoryId: string = '';
  newJokeContent: string = '';
  newJoke: any[] = [];

  public StateEnum = State;
  public Add = State.Add;
  public AddJoke = State.AddJoke;
  public Cancel = State.Cancel;
  public ChooseCategory = State.ChooseCategory;
  public ContentNewJoke = State.ContentNewJoke;

  constructor(private newDataService: NewDataService, @Inject(MAT_DIALOG_DATA) public data: {categories: any}){}

  ngOnInit() {
    this.newJoke = this.newDataService.newJoke;
  }

  getJokeCategory(newJokeContent?: Joke): Category | undefined {
    if (!newJokeContent) {
      return undefined;
    }
    let jokeCategory;
    this.categories?.forEach((category: Category) => {
      if (this.categoryId === newJokeContent.category) {
        jokeCategory = category;
      }
    });
    return jokeCategory;
  }

  addNewJoke() {
    this.newDataService.addJoke({ content: this.newJokeContent, category: this.categoryId, id: broofa() });
    this.newJokeContent = '';
  }
}
