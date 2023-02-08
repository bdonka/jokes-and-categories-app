import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JokePageComponent } from 'src/app/pages/joke-page/joke-page.component';
import { JokeListPageComponent } from 'src/app/pages/joke-list-page/joke-list-page.component';

const routes: Routes = [
  {
    path: 'joke-page',
    component: JokePageComponent
  },
  {
    path: 'joke-list-page',
    component: JokeListPageComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
