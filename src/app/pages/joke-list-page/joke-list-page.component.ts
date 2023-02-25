import categoriesData from 'src/assets/categories.json';
import jokesData from 'src/assets/jokes.json';
import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/interface/category';
import { Joke } from 'src/app/interface/joke';
import { OpenDialogService } from 'src/app/service/open-dialog.service';
import { NewDataService } from 'src/app/service/new-data';

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

  jokesNewStatePage: Joke[] = []

  newJoke: any[] = [];

  constructor(private openDialogService:  OpenDialogService,
    private newDataService: NewDataService){
  }

  ngOnInit() {
    this.newDataService.jokesNewState.subscribe((data) => {
      this.jokesNewStatePage = data
    })
  }

  openDialog() {
    this.openDialogService.openDialog().subscribe(data =>
      console.log(data));
  }
}
