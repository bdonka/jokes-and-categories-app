import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Category } from '../interface/category';
import { Joke } from '../interface/joke';
import categoriesData from 'src/assets/categories.json';
import jokesData from 'src/assets/jokes.json';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewDataService {

  categories: Category[] = categoriesData;
  jokes: Joke[] = jokesData;

  categoryId: string = '';
  newJokeContent: string = '';

  newJoke: any[] = [
    {content: this.newJokeContent, category: this.categoryId}
  ]

  private url: string = "assets/jokes.json";

  constructor(private http: HttpClient) { }

  updateJokes(newRecord: any) {
    this.newJoke = [...this.jokes, newRecord];
  }

  subscribeNewJoke(): Observable<Joke[]>  {
    return this.http.get<Joke[]>(this.url);
  }
}
