import { ConfirmationRemoveJokeComponent } from './../../confirmation-remove-joke/confirmation-remove-joke.component';
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
  @Input() joke: Joke | undefined;
  @Input() category?: Category | undefined;


  public StateEnum = State;
  public Category = State.Category;
  public Cancel = State.Cancel;

  constructor(public dialog : MatDialog){}

  ngOnInit() {
  }

  getJokeCategory(joke?: Joke): string {
    if (!joke) {
      return '';
    }
    let categoryName;
    this.categories?.forEach((category: Category) => {
      if (category.id === joke.category) {
        categoryName = category.name;
      }
    });
    return this.categoryName;
  }

  openConfirmation() {
  this.dialog.open(ConfirmationRemoveJokeComponent, {
    height: '473px',
    width: '600px',
    data: {categories : this.categories}
    });
  }
}
