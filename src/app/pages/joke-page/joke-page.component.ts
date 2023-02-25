import categoriesData from 'src/assets/categories.json';
import jokesData from 'src/assets/jokes.json';
import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/interface/category';
import { Joke } from 'src/app/interface/joke';
import { OpenDialogService } from 'src/app/service/open-dialog.service';
import { NewDataService } from 'src/app/service/new-data';

@Component({
  selector: 'app-joke-page',
  templateUrl: './joke-page.component.html',
  styleUrls: ['./joke-page.component.scss']
})
export class JokePageComponent implements OnInit{

  categories: Category[] = categoriesData;
  jokes: Joke[] = jokesData;
  category: Category | undefined;
  joke: Joke | undefined;

  public startIndex: number = 0;
  public nextIndex?: number;

  jokesNewStatePage: Joke[] = []

  constructor(private openDialogService:  OpenDialogService, private newDataService: NewDataService){
  }

  ngOnChanges() {
    this.onShowNext();
  }

  ngOnInit(){
    this.getJokeCategory();
    this.newDataService.jokesNewState.subscribe((data) => {
      this.jokesNewStatePage = data
      this.getRandomInt(data.length);
      this.getJoke(data.length);
    })
  }

  ngDoCheck() {
    if(!!this.categories.length && !!this.jokesNewStatePage.length) {
      if(!this.joke) {
        this.startIndex = this.getRandomInt(this.jokesNewStatePage.length || 0);
        this.joke = this.getJoke(this.startIndex);
      }
      if(!this.category) {
        this.category = this.getJokeCategory(this.joke)
      }
    }
  }

  getRandomInt(max: number): number {
    return Math.floor(Math.random() * max);
  }

  getJoke(index: number): Joke | undefined {
    if(!this.jokesNewStatePage) {
      return undefined;
    }
    return this.jokesNewStatePage[index];
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

  onShowNext() {
    this.startIndex += 1;
    if(this.startIndex >= this.jokesNewStatePage?.length) {
      this.startIndex = 0;
    }

    this.joke = this.getJoke(this.startIndex);
    this.category = this.getJokeCategory(this.joke)
  }

  openDialog() {
    this.openDialogService.openDialog().subscribe(data =>
      console.log(data));
  }
}
