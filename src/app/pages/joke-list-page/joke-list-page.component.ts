import categoriesData from 'src/assets/categories.json';
import jokesData from 'src/assets/jokes.json';
import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/interface/category';
import { Joke } from 'src/app/interface/joke';
import { OpenDialogService } from 'src/app/service/open-dialog.service';

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

  constructor(private openDialogService:  OpenDialogService){
  }

  ngOnInit() {
  }

  openDialog() {
    this.openDialogService.openDialog().subscribe(data =>
      console.log(data));
  }
}
