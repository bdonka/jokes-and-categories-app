import { MakeJokeComponent } from 'src/app/components/make-joke/make-joke/make-joke.component';
import { JokeListPageComponent } from './pages/joke-list-page/joke-list-page.component';
import { JokePageComponent } from './pages/joke-page/joke-page.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { AppComponent } from 'src/app/app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderRoutingComponent } from './components/header-routing/header-routing/header-routing.component';
import { JokeComponent } from './pages/joke-page/joke/joke.component';
import { ShowNextJokeBtnComponent } from './pages/joke-page/show-next-joke-btn/show-next-joke-btn.component';
import { OpenAddJokeBtnComponent } from './components/open-add-joke-btn/open-add-joke-btn.component';
import { JokeListComponent } from './pages/joke-list-page/joke-list/joke-list/joke-list.component';
import { ConfirmationRemoveJokeComponent } from './pages/joke-list-page/confirmation-remove-joke/confirmation-remove-joke.component';
import { RemoveJokeBtnComponent } from './pages/joke-list-page/remove-joke-btn/remove-joke-btn.component';
import { DialogModule } from '@angular/cdk/dialog';
import { MatNativeDateModule } from '@angular/material/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OpenDialogService } from './service/open-dialog.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderRoutingComponent,
    JokeComponent,
    JokePageComponent,
    ShowNextJokeBtnComponent,
    OpenAddJokeBtnComponent,
    JokeListComponent,
    JokeListPageComponent,
    ConfirmationRemoveJokeComponent,
    RemoveJokeBtnComponent,
    MakeJokeComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    DialogModule,
    MatButtonModule,
    MatCardModule,
    MatDialogModule,
    MatInputModule,
    MatSelectModule,
    MatFormFieldModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [ OpenDialogService,
    { provide: MAT_DIALOG_DATA, useValue: {} },
    { provide: MatDialogRef, useValue: {} }
  ],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
