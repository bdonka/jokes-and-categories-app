import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Joke } from '../interface/joke';

@Injectable({
  providedIn: 'root'
})
export class AddNewJokeService {

  private url: string = "assets/jokes.json";

  constructor(private http: HttpClient) { }

  addNewJoke(): Observable<Joke[]>  {
    return this.http.get<Joke[]>(this.url);
  }
}
