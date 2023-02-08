import jokesData from 'src/assets/jokes.json';
import categoriesData from 'src/assets/categories.json';
import { Component, Input, OnInit } from '@angular/core';
import { State } from 'src/app/state.enum';
import { Joke } from 'src/app/interface/joke';
import { Category } from 'src/app/interface/category';


@Component({
  selector: 'app-joke',
  templateUrl: './joke.component.html',
  styleUrls: ['./joke.component.scss']
})
export class JokeComponent implements OnInit{

  @Input() categoryName: string = '';
  @Input() jokeContent: string = '';

  public StateEnum = State;
  public Category = State.Category;

  constructor() {
  }

ngOnInit(){}
}
