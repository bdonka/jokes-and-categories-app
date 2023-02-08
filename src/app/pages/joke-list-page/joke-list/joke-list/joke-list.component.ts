import categoriesData from 'src/assets/categories.json';
import jokesData from 'src/assets/jokes.json';
import { MakeJokeComponent } from 'src/app/components/make-joke/make-joke/make-joke.component';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { State } from 'src/app/state.enum';
import { Category } from 'src/app/interface/category';
import { Joke } from 'src/app/interface/joke';

@Component({
  selector: 'app-joke-list',
  templateUrl: './joke-list.component.html',
  styleUrls: ['./joke-list.component.scss']
})
export class JokeListComponent implements OnInit{

  @Input() jokes: Joke[] = [];
  @Input() categories: Category[] = [];
  @Input() categoryName: string = '';


  public StateEnum = State;
  public Category = State.Category;
  public Cancel = State.Cancel;

  constructor(public dialog : MatDialog) {
  }

  ngOnInit() {}

  onRemoveJoke(index: number) {
    if (index !== -1) {
      this.jokes.splice(index, 1);
    }
    console.log('dupa')
  }
}
