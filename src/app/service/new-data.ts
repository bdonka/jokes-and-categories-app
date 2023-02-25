import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Category } from '../interface/category';
import { Joke } from '../interface/joke';
import categoriesData from 'src/assets/categories.json';
import jokesData from 'src/assets/jokes.json';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewDataService {

  categories: Category[] = categoriesData;
  jokes: Joke[] = jokesData;

  private _jokesNewState: BehaviorSubject<Joke[]> = new BehaviorSubject((jokesData as Joke[]));

  public readonly jokesNewState: Observable<Joke[]> = this._jokesNewState.asObservable();

  categoryId: string = '';
  newJokeContent: string = '';

  newJoke: any[] = [
    {content: this.newJokeContent, category: this.categoryId}
  ]

  private url: string = "assets/jokes.json";

  constructor(private http: HttpClient) { }

  addJoke(joke: Joke) {
    this._jokesNewState.next([...this._jokesNewState.value, joke]);
  }

  removeJoke(id: Joke['id']) {
    const updatedState = this._jokesNewState.value.filter((joke) => joke.id !== id);
    this._jokesNewState.next(updatedState);
  }

  updateJokes(newRecord: any) {
    this.newJoke = [...this.jokes, newRecord];
  }

}
