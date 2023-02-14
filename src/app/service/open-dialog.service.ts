import { Injectable, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MakeJokeComponent } from '../components/make-joke/make-joke/make-joke.component';
import { Category } from '../interface/category';
import { Joke } from '../interface/joke';
import categoriesData from 'src/assets/categories.json';
import jokesData from 'src/assets/jokes.json';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OpenDialogService {

  @Input() categories: Category[] = categoriesData;
  @Input() jokes: Joke[] = jokesData;

  constructor(public dialog : MatDialog){
   }

  openDialog(): Observable<any> {
    const dialogRef = this.dialog.open(MakeJokeComponent, {
    height: '473px',
    width: '600px',
    data: {categories : this.categories}
    });
    return dialogRef.afterClosed();
  }
}
