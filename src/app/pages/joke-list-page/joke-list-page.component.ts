import { OpenDialogService } from './../../service/open-dialog.service';
import categoriesData from 'src/assets/categories.json';
import jokesData from 'src/assets/jokes.json';
import { Component, DoCheck, OnChanges, OnInit } from '@angular/core';
import { Category } from 'src/app/interface/category';
import { Joke } from 'src/app/interface/joke';

@Component({
  selector: 'app-joke-list-page',
  templateUrl: './joke-list-page.component.html',
  styleUrls: ['./joke-list-page.component.scss']
})
export class JokeListPageComponent implements OnInit {

  categories: Category[] = categoriesData;
  jokes: Joke[] = jokesData;
  category: Category | undefined;
  joke: Joke | undefined;

  public startIndex: number = 0;
  public nextIndex?: number;

  constructor(private openDialogService:  OpenDialogService){
  }

  ngOnInit() {
    this.getJoke(this.jokes.length);
    this.getJokeCategory();
  }

  ngDoCheck() {
    if(!!this.categories.length && !!this.jokes.length) {
      if(!this.joke) {
        this.joke = this.getJoke(this.startIndex);
      }
      if(!this.category) {
        this.category = this.getJokeCategory(this.joke)
      }
    }
  }

  getJoke(index: number): Joke | undefined {
    if(!this.jokes) {
      return undefined;
    }
    return this.jokes[index];
  }

  getJokeCategory(joke?: Joke): Category | undefined {
    if (!joke) {
      return undefined;
    }
    let jokeCategory;
    this.categories?.forEach((category: Category) => {
      if (category.id === joke.category) {
        jokeCategory = category;
      }
    });
    return jokeCategory;
  }

  openDialog() {
    this.openDialogService.openDialog().subscribe(data =>
      console.log(data));
  }
}
